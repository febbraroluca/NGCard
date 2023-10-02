import { Component, OnInit } from '@angular/core';
import { FirebaseService, IPost } from 'src/app/services/firebase.service';
import { trigger, style, animate, transition } from '@angular/animations';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { SearchServiceService } from 'src/app/services/search-service.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './postList.component.html',
  styleUrls: ['./postList.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1500ms ease-in', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class PostListComponent implements OnInit {
  posts: IPost[] = [];
  postId: any;
  isConfirmationModalOpen = false;
  selectedPostId: string | null = null;
  animationState = 'in';
  currentPage = 1;
  postsPerPage = 12;
  pages: number[] = [];
  searchForm: FormGroup;
  searchResults$: Observable<IPost[]>;
  searchPerformed = false;

  constructor(
    private firebase: FirebaseService,
    private route: ActivatedRoute,
    private router: Router,
    private searchService: SearchServiceService
  ) {
    this.searchResults$ = this.searchService.getSearchQuery().pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((query: string) => this.searchPosts(query))
    );
    console.log(this.searchResults$);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const pageNumber = params.get('pageNumber');
      if (pageNumber) {
        this.currentPage = +pageNumber;
      } else {
        this.currentPage = 1;
      }
    });

    this.firebase.getPost().subscribe((data: any) => {
      this.posts = Object.keys(data).map((key) => {
        data[key]['id'] = key;
        return data[key];
      });

      this.pages = Array.from(
        { length: Math.ceil(this.posts.length / this.postsPerPage) },
        (_, index) => index + 1
      );
    });
  }

  getPagedPosts(): IPost[] {
    const startIndex = (this.currentPage - 1) * this.postsPerPage;
    const endIndex = startIndex + this.postsPerPage;
    return this.posts.slice(startIndex, endIndex);
  }

  get pagedPosts(): Observable<IPost[]> {
    if (this.searchPerformed) {
      return this.searchResults$;
    } else {
      return of(this.getPagedPosts());
    }
  }

  changePage(page: number) {
    this.router.navigate(['/postlist', page]);
  }

  openConfirm(postId: string): void {
    const post = this.posts.find((p: any) => p.id === postId);
    if (post) {
      this.selectedPostId = postId;
      this.isConfirmationModalOpen = true;
    }
  }

  closeConfirm(): void {
    this.selectedPostId = null;
    this.isConfirmationModalOpen = false;
  }

  deletePost(postId: any) {
    this.firebase.deletePost(postId).subscribe(() => {
      this.posts = this.posts.filter((post: any) => post.id !== postId);
      this.closeConfirm();
      this.updatePostList();
      alert('Post deleted succesfully');
    });
  }

  updatePostList(): void {
    this.firebase.getPost().subscribe((data: any) => {
      this.posts = Object.keys(data).map((key) => {
        data[key]['id'] = key;
        return data[key];
      });
    });
  }

  searchPosts(query: string): Observable<IPost[]> {
    if (!query || query.trim() === '') {
      this.searchPerformed = false;
      return of(this.posts);
    }

    return of(this.filterPosts(query));
  }

  filterPosts(query: string): IPost[] {
    if (query.length < 3) {
      return [];
    }
    this.searchPerformed = true;
    return this.posts.filter((post: IPost) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
  }
}

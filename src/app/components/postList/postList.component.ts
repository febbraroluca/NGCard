import { Component, OnInit } from '@angular/core';
import { FirebaseService, IPost } from 'src/app/services/firebase.service';
import { trigger, style, animate, transition } from '@angular/animations';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

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

  constructor(
    private firebase: FirebaseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.firebase.getPost().subscribe((data: any) => {
      this.posts = Object.keys(data).map((key) => {
        data[key]['id'] = key;
        return data[key];
      });

      const totalPages = Math.ceil(this.posts.length / this.postsPerPage);

      for (let i = 1; i <= totalPages; i++) {
        this.pages.push(i);
      }
      
      console.log(this.posts);

      this.route.paramMap.subscribe((params: ParamMap) => {
        const pageNumber = params.get('pageNumber');
        if (pageNumber) {
          this.currentPage = +pageNumber;
        } else {
          this.currentPage = 1;
        }
      });
    });
  }

  get pagedPosts() {
    const startIndex = (this.currentPage - 1) * this.postsPerPage;
    const endIndex = startIndex + this.postsPerPage;
    return this.posts.slice(startIndex, endIndex);
  }

  changePage(page: number) {
    this.router.navigate(['/postlist', page]);
  }

  openConfirm(postId: string): void {
    const post = this.posts.find((p: any) => p.id === postId);
    if (post) {
      this.selectedPostId = postId;
      this.isConfirmationModalOpen = true;
      console.log('Modal open confirm');
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
    console.log('Updating post list...');
    this.firebase.getPost().subscribe((data: any) => {
      console.log('Received data:', data);
      this.posts = Object.keys(data).map((key) => {
        data[key]['id'] = key;
        return data[key];
      });
      console.log('Updated posts:', this.posts);
    });
  }
}

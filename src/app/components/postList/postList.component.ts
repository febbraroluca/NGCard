import { Component, OnInit } from '@angular/core';
import { DataFetchService, IPost } from '../../services/data-fetch.service';
import { map, noop, subscribeOn, switchMap, tap, timer } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './postList.component.html',
  styleUrls: ['./postList.component.css'],
})
export class PostListComponent implements OnInit {
  //posts: IPost[] = [];
  posts: any = [];
  postId: any;
  isConfirmationModalOpen = false;
  selectedPostId: string | null = null;

  constructor(private firebase: FirebaseService) {}

  ngOnInit(): void {
    this.firebase.getPost().subscribe((data: any) => {
      this.posts = Object.keys(data).map((key) => {
        data[key]['id'] = key;
        return data[key];
      });
      console.log(this.posts);
    });

    // const firstGroup$ = timer(1000).pipe(
    //   switchMap(() =>
    //     this.dataService.getData().pipe(
    //       map((data) => {
    //         const filteredData = data.filter((dataelem) => dataelem.id <= 10);

    //         return filteredData;
    //       })
    //     )
    //   )
    // );

    // const secondGroup$ = timer(2000).pipe(
    //   switchMap(() =>
    //     this.dataService
    //       .getData()
    //       .pipe(
    //         map((data) =>
    //           data.filter((dataelem) => dataelem.id > 10 && dataelem.id <= 20)
    //         )
    //       )
    //   )
    // );

    // const thirdGroup$ = timer(3000).pipe(
    //   switchMap(() =>
    //     this.dataService
    //       .getData()
    //       .pipe(
    //         map((data) =>
    //           data.filter((dataelem) => dataelem.id > 20 && dataelem.id <= 30)
    //         )
    //       )
    //   )
    // );

    // firstGroup$
    //   .pipe(
    //     tap((firstGroup) => (this.posts = firstGroup)),
    //     switchMap(() =>
    //       secondGroup$.pipe(
    //         tap(
    //           (secondGroup) => (this.posts = [...this.posts, ...secondGroup])
    //         ),
    //         switchMap(() =>
    //           thirdGroup$.pipe(
    //             tap(
    //               (thirdGroup) => (this.posts = [...this.posts, ...thirdGroup])
    //             )
    //           )
    //         )
    //       )
    //     )
    //   )
    //   .subscribe(noop);
  }

  openConfirm(postId: string): void {
    const post = this.posts.find((p: any) => p.key === postId);
    if (post) {
      this.selectedPostId = post.id;
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
      this.posts = this.posts.filter((post: any) => post.key !== postId);
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

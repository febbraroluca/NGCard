import { Component, OnInit } from '@angular/core';
import { FirebaseService, IPost } from 'src/app/services/firebase.service';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-post-list',
  templateUrl: './postList.component.html',
  styleUrls: ['./postList.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1500ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})

export class PostListComponent implements OnInit {
  posts: IPost[] = [];
  postId: any;
  isConfirmationModalOpen = false;
  selectedPostId: string | null = null;
  animationState = 'in';

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
    //     this.firebase.getPost().pipe(
    //       map((data) => {
    //         const filteredData = data.filter((dataelem) => dataelem.key <= 10);

    //         return filteredData;
    //       })
    //     )
    //   )
    // );

    // const secondGroup$ = timer(2000).pipe(
    //   switchMap(() =>
    //     this.firebase
    //       .getPost()
    //       .pipe(
    //         map((data) =>
    //           data.filter((dataelem) => dataelem.id > 10 && dataelem.id <= 20)
    //         )
    //       )
    //   )
    // );

    // const thirdGroup$ = timer(3000).pipe(
    //   switchMap(() =>
    //     this.firebase
    //       .getPost()
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

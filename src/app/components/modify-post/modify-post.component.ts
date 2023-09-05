import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-modify-post',
  templateUrl: './modify-post.component.html',
  styleUrls: ['./modify-post.component.css'],
})
export class ModifyPostComponent {
  post: any;
  postId: string;

  constructor(
    private firebase: FirebaseService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.postId = this.route.snapshot.paramMap.get('id');
    if (this.postId) {
      console.log('ID del post:', this.postId);
      this.firebase.getPostById(this.postId).subscribe((data: any) => {
        this.post = data;
      });
    }
  }

  updatePost(): void {
    this.firebase.updatePost(this.post, this.postId).subscribe(
      () => {
        //this.toastr.success('Post updated succesfully', 'Success');
        alert('post updated succesfully')
        setTimeout(() => {
          this.router.navigate(['/postlist']);
        }, 4000);
      },
      (error) => {
        console.error('Error during the post update', error);
      }
    );
  }
}

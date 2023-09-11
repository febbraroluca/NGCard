import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { createPostConsts } from 'src/app/consts/createPost.consts';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './createPost.component.html',
  styleUrls: ['./createPost.component.css'],
})
export class CreatePostComponent implements OnInit {
  postForm: FormGroup;
  dataConsts = createPostConsts;

  constructor(
    private formBuilder: FormBuilder,
    private firebase: FirebaseService
  ) {}

  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
    });
  }

  onCreatePost(): void {
    if (this.postForm.valid) {
      this.firebase
        .insertPost({
          title: this.postForm.value.title,
          body: this.postForm.value.body,
        })
        .subscribe((data: any) => {
          console.log(data);
        });
      this.postForm.reset();
    }
  }

  onCancel(): void {
    this.postForm.reset();
  }
}

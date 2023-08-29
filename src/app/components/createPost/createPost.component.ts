import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { createPostConsts } from 'src/app/consts/createPost.consts';

@Component({
  selector: 'app-create-post',
  templateUrl: './createPost.component.html',
  styleUrls: ['./createPost.component.css'],
})
export class CreatePostComponent implements OnInit {

  postForm: FormGroup;
  dataConsts = createPostConsts;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
    });
  }

  onCreatePost(): void {
    if (this.postForm.valid) {
      console.log(this.postForm.value);
      this.postForm.reset();
    }
  }

  onCancel(): void {
    this.postForm.reset();
  }
}

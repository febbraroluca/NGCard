import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './createPost.component.html',
  styleUrls: ['./createPost.component.css'],
})
export class CreatePostComponent {

  onCreatePost(form: NgForm) {
    if (form.valid) {
      console.log(form.value)
      form.resetForm()
    }
  }

  onCancel(form: NgForm) {
    form.resetForm();
  }
}

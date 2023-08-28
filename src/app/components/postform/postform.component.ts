import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.css'],
})
export class PostformComponent {

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

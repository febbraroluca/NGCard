import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './components/postList/postList.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CreatePostComponent } from './components/createPost/createPost.component';
import { ConfirmModalComponent } from './shared-components/confirm-modal/confirm-modal.component';
import { ModifyPostComponent } from './components/modify-post/modify-post.component';

const routes: Routes = [
  { path: 'postlist', component: PostListComponent },
  { path: 'create-post', component: CreatePostComponent },
  { path: 'modalconfirm', component: ConfirmModalComponent },
  { path: 'modify-post/:id', component: ModifyPostComponent },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

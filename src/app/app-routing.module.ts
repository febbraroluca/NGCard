import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CreatePostComponent } from './components/createPost/createPost.component';
import { ConfirmModalComponent } from './shared-components/confirm-modal/confirm-modal.component';
import { ModifyPostComponent } from './components/modify-post/modify-post.component';

const routes: Routes = [
  {
    path: 'postlist',
    loadChildren: () =>
      import('./components/postList/postlist.module').then(
        (m) => m.PostlistModule
      ),
  },
  {
    path: 'create-post',
    loadChildren: () =>
      import('./components/createPost/create-post/create-post.module').then(
        (m) => m.CreatePostModule
      ),
  },
  {
    path: 'modalconfirm',
    loadChildren: () =>
      import(
        './/shared-components/confirm-modal/confirm-modal/confirm-modal.module'
      ).then((m) => m.ConfirmModalModule),
  },
  {
    path: 'modify-post/:id',
    loadChildren: () =>
      import('./components/modify-post/modify-post/modify-post.module').then(
        (m) => m.ModifyPostModule
      ),
  },
  {
    path: '404',
    loadChildren: () =>
      import('./components/notfound/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

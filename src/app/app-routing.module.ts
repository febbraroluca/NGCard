import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  {
    path: 'homepage',
    component: HomepageComponent,
  },
  {
    path: 'postlist',
    loadChildren: () =>
      import('./components/postList/postlist.module').then(
        (m) => m.PostlistModule
      ),
  },
  {
    path: 'postlist/:pageNumber',
    loadChildren: () =>
      import('./components/postList/postlist.module').then(
        (m) => m.PostlistModule
      ),
  },
  {
    path: 'create-post',
    loadChildren: () =>
      import('./components/createPost/create-post.module').then(
        (m) => m.CreatePostModule
      ),
  },
  {
    path: 'modalconfirm',
    loadChildren: () =>
      import('.//shared-components/confirm-modal/confirm-modal.module').then(
        (m) => m.ConfirmModalModule
      ),
  },
  {
    path: 'modify-post/:id',
    loadChildren: () =>
      import('./components/modify-post/modify-post.module').then(
        (m) => m.ModifyPostModule
      ),
  },
  {
    path: '404',
    loadChildren: () =>
      import('./components/notfound/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
  { path: '**', redirectTo: '/homepage' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

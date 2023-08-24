import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponentComponent } from './card-component/card-component.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: 'postslist', component: CardComponentComponent },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

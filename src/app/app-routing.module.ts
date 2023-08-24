import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponentComponent } from './card-component/card-component.component';

const routes: Routes = [{path: 'postslist', component: CardComponentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

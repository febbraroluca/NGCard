import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModifyPostComponent } from '../modify-post.component';

const routes: Routes = [{ path: '', component: ModifyPostComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModifyPostRoutingModule { }

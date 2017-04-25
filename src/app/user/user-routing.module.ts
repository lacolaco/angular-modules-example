import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserIndexComponent } from './index.component';
import { UserDetailComponent } from './detail.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: UserIndexComponent },
      { path: ':id', component: UserDetailComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

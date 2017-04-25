import { UserDetailComponent } from './user/detail.component';
import { UserIndexComponent } from './user/index.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home', component: HomeComponent,
  },
  {
    path: 'about', component: AboutComponent,
  },
  {
    path: 'user',
    children: [
      { path: '', component: UserIndexComponent },
      { path: ':id', component: UserDetailComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

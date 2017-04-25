import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';

import { UserRoutingModule } from './user-routing.module';
import { UserIndexComponent } from './index.component';
import { UserDetailComponent } from './detail.component';

@NgModule({
  imports: [
    SharedModule,
    UserRoutingModule
  ],
  declarations: [
    UserIndexComponent,
    UserDetailComponent,
  ]
})
export class UserModule { }

import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';

import { UserRoutingModule } from './user-routing.module';

@NgModule({
  imports: [
    SharedModule,
    UserRoutingModule
  ],
  declarations: []
})
export class UserModule { }

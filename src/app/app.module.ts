import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserIndexComponent } from './user/index.component';
import { UserDetailComponent } from './user/detail.component';
import { PageContainerComponent } from './shared/components/page-container/page-container.component';
import { UserService } from './shared/services/user.service';
import { UserCardComponent } from './shared/components/user-card/user-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    UserIndexComponent,
    UserDetailComponent,
    PageContainerComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SharedModule.forRoot(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

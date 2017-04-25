import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { PageContainerComponent } from './components/page-container/page-container.component';
import { UserCardComponent } from './components/user-card/user-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    PageContainerComponent,
    UserCardComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    PageContainerComponent,
    UserCardComponent,
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        UserService,
      ]
    };
  }
}

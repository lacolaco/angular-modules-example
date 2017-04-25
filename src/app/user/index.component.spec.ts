import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIndexComponent } from './index.component';

describe('IndexComponent', () => {
  let component: UserIndexComponent;
  let fixture: ComponentFixture<UserIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

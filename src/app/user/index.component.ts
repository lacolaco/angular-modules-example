import { Component, OnInit } from '@angular/core';
import { UserService } from './../shared/services/user.service';

@Component({
  selector: 'app-user-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class UserIndexComponent implements OnInit {

  users: any[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUserList();
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './../shared/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user$: any;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.user$ = this.route.params.map(params => params['id']).map(id => this.userService.getUser(id));
  }

}

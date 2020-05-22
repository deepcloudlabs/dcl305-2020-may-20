import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {ActivatedRoute} from "@angular/router";
import {User} from "../model/user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User = new User();
  users: Array<User> = [];
  id : number = null;

  constructor(private route: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.hasOwnProperty('id')) {
        this.id = Number(params['id']);
        let foundUser = this.userService.findUserById(this.id);
        if (foundUser != null || foundUser != undefined)
          this.user = foundUser;
      }
      this.users = this.userService.findAllUsers();
    })
  }

}

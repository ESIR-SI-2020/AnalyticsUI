import { Component, OnInit } from '@angular/core';
import { UserCreateService } from 'src/app/services/user-create.service';
import { Address } from 'src/app/model/address/address';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userName: String;
  email: String;
  password: String;
  address: Address;

  constructor(
    private userCreateService : UserCreateService,
  ) { }

  ngOnInit() {
    this.userCreateService.createUser(this.userName, this.email, this.password, this.address);
  }

}

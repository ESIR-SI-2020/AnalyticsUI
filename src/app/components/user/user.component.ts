import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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

  checkoutForm;

  constructor(
    private userCreateService : UserCreateService, private formBuilder: FormBuilder
  ) {  this.checkoutForm = this.formBuilder.group({
    name: '',
    email: '',
    password: ''
  });}

  ngOnInit() {
  }

  onSubmit(userData) {
    // Process checkout data here
    console.warn('onSubmit', userData);
    this.checkoutForm.reset();
  }
    //this.userCreateService.createUser(this.userName, this.email, this.password, this.address);

  

}

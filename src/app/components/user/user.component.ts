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
    private userCreateService: UserCreateService, private formBuilder: FormBuilder
  ) {  this.checkoutForm = this.formBuilder.group({
    name: '',
    email: '',
    password: '',
    streetNumber: '',
    complement: '',
    streetName: '',
    postalCode: ''
  });
}

  ngOnInit() {
  }

  onSubmit(userData) {
    // Process checkout data here
    console.warn('onSubmit', userData);
    const address = {
      postalCode: userData.postalCode,
      street : userData.streetName,
      streetNumber: userData.streetNumber,
      complement: userData.complement,
    };
    this.userCreateService.createUser(userData.name, userData.email, userData.password, address).subscribe(
      (data) => console.log(data),  //changed
      (err) => console.log(err),
      () => console.log('Done'));
    this.checkoutForm.reset();
  }

  

}

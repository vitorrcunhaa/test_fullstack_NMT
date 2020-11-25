import {Component, OnInit} from '@angular/core';
import {CustomerService} from 'src/app/services/customer.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  customer = {
    name: '',
    age: 0,
    city: ''
  };
  submitted = false;

  constructor(private customerService: CustomerService, private router: Router) {
  }

  ngOnInit(): void {
  }

  saveCustomer(): void {
    const data = {
      name: this.customer.name,
      age: this.customer.age,
      city: this.customer.city,
    };

    this.customerService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newCustomer(): void {
    this.submitted = false;
    this.customer = {
      name: '',
      age: 0,
      city: ''
    };
  }

  goHome(): void {
    this.router.navigate(['/customers']);
  }

}

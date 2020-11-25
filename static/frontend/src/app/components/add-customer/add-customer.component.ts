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
  message = '';
  message_class = '';

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
          this.message_class = 'alert alert-success';
          this.message = 'The customer ' + this.customer.name + ' was added successfully!';
          this.submitted = true;
        },
        error => {
          Object.keys(error.error)
            // tslint:disable-next-line:typedef
            .forEach((key) => {
              this.message = key + ': ' + error.error[key];
            });
          this.message_class = 'alert alert-danger';
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

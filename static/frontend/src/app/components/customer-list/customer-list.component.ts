import {Component, OnInit} from '@angular/core';
import {CustomerService} from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers: any;
  currentCustomer = {
    id: -1,
    name: '',
    age: 0,
    city: ''
  };
  currentIndex = -1;
  name = '';

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.retrieveCustomers();
  }

  retrieveCustomers(): void {
    this.customerService.getAll()
      .subscribe(
        data => {
          this.customers = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveCustomers();
    this.currentCustomer = {
    id: -1,
    name: '',
    age: 0,
    city: ''
  };
    this.currentIndex = -1;
  }

  // @ts-ignore
  setActiveCustomer(customer, index): void {
    this.currentCustomer = customer;
    this.currentIndex = index;
  }

  // removeAllCustomers(): void {
  //   this.customerService.deleteAll()
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.retrieveCustomers();
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

  searchName(): void {
    this.customerService.findByName(this.name)
      .subscribe(
        data => {
          this.customers = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


}

import {Component, OnInit} from '@angular/core';
import {CustomerService} from 'src/app/services/customer.service';

import {Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers: any;
  dtOptions: DataTables.Settings = {};
  // @ts-ignore
  dtTrigger: Subject = new Subject();

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      language: {
        searchPlaceholder: 'Filter by Id, Name, City or Age',
      },
    };
    this.retrieveCustomers();
  }

   ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  retrieveCustomers(): void {
    this.customerService.getAll()
      .subscribe(
        data => {
          this.customers = data;
          this.dtTrigger.next();
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}

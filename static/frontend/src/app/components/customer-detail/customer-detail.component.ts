import {Component, OnInit} from '@angular/core';
import {CustomerService} from 'src/app/services/customer.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {

  currentCustomer = {
    id: -1,
    name: '',
    age: 0,
    city: ''
  };
  message = '';

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.message = '';
    this.getCustomer(this.route.snapshot.paramMap.get('id'));
  }

  // @ts-ignore
  getCustomer(id): void {
    this.customerService.get(id)
      .subscribe(
        data => {
          console.log(data);
          this.currentCustomer = data;
        },
        error => {
          console.log(error);
        });
  }

  updateCustomer(): void {
    this.customerService.update(this.currentCustomer.id, this.currentCustomer)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The customer ' + this.currentCustomer.name + ' was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteCustomer(): void {
    // @ts-ignore
    this.customerService.delete(this.currentCustomer.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/customers']);
        },
        error => {
          console.log(error);
        });
  }

  goHome(): void {
    this.router.navigate(['/customers']);
  }
}

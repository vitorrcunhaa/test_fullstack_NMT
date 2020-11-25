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
  message_class = '';

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
          alert(error);
          console.log(error);
        });
  }

  updateCustomer(): void {
    this.customerService.update(this.currentCustomer.id, this.currentCustomer)
      .subscribe(
        response => {
          console.log(response);
          this.message_class = 'alert alert-success';
          this.message = 'The customer ' + this.currentCustomer.name + ' was updated successfully!';
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

  deleteCustomer(): void {
    // @ts-ignore
    this.customerService.delete(this.currentCustomer.id)
      .subscribe(
        response => {
          alert('Customer deleted successfully!');
          console.log(response);
          this.router.navigate(['/customers']);
        },
        error => {
          alert('Could not delete customer: ' + error);
          console.log(error);
        });
  }

  goHome(): void {
    this.router.navigate(['/customers']);
  }
}

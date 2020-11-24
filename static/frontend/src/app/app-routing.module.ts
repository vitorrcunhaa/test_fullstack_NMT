import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomerListComponent} from "./components/customer-list/customer-list.component";
import {CustomerDetailComponent} from "./components/customer-detail/customer-detail.component";
import {AddCustomerComponent} from "./components/add-customer/add-customer.component";

const routes: Routes = [
  {path: '', redirectTo: 'customers', pathMatch: 'full'},
  {path: 'customers', component: CustomerListComponent},
  {path: 'customers/:id', component: CustomerDetailComponent},
  {path: 'add', component: AddCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

// for development
// const baseUrl = 'http://localhost:8000/api/customers/';

const baseUrl = 'https://neoprospecta-test.herokuapp.com/api/customers/';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}${id}/`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}${id}/`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByName(name: string): Observable<any> {
    return this.http.get(`${baseUrl}?name=${name}`);
  }
}

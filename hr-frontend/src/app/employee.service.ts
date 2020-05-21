import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../model/Employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService { // Integration Service -> hr-backend
  private readonly baseURL: string = "http://localhost:4001/employees";

  constructor(private httpClient: HttpClient) {
  }

  findAllEmployees(): Observable<Array<Employee>> {
    return this.httpClient.get<Array<Employee>>(this.baseURL);
  }

  findEmpByIdentity(identity: string): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseURL}/${identity}`);
    //return this.httpClient.get<Employee>(this.baseURL.concat("/").concat(identity));
  }

  fireEmpByIdentity(identity: string): Observable<Employee> {
    return this.httpClient.delete<Employee>(`${this.baseURL}/${identity}`);
  }

  hireEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(this.baseURL, employee);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(this.baseURL, employee);
  }
}

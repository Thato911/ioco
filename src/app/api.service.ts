import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Content-type': 'application/json'})

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<any>{
    return this.http.get(this.baseurl + '/persons/', 
    {headers: this.httpHeaders});
  }
  getOneEmployees(id): Observable<any>{
    return this.http.get(this.baseurl + '/persons/' + id + '/', 
    {headers: this.httpHeaders});
  }
  updatePerson(person): Observable<any>{
    const body = {first_name: person.first_name, last_name: person.last_name, birth_date: person.birth_date };
    return this.http.put(this.baseurl + '/persons/' + person.id + '/', body,
    {headers: this.httpHeaders});
  }
  createPerson(person): Observable<any>{
    const body = {first_name: person.first_name, last_name: person.last_name, birth_date: person.birth_date };
    return this.http.post(this.baseurl + '/persons/' + '/', body,
    {headers: this.httpHeaders});
  }
  deletePerson(id): Observable<any>{
    return this.http.delete(this.baseurl + '/persons/' + id + '/', 
    {headers: this.httpHeaders});
  }
}

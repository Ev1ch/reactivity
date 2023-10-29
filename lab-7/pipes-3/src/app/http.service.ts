import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export default class HttpService {
  constructor(private http: HttpClient) {}

  public getUsers() {
    return this.http.get('assets/users.json');
  }
}

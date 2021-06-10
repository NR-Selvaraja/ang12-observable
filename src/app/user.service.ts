import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private API: string = 'https://topsupreme.com/wp-json/wc/v3/products?consumer_key=ck_5c2b1d5e057572083d46e24912ac8f0c67ab7e91&consumer_secret=cs_6fafe2a7276237a71384a9bedfdfd463d1c91501';

  constructor(private httpClient: HttpClient) { }
  
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.API}`)
  }

  // Error handling
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
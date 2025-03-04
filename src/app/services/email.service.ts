import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmailService {

  private apiUrl = 'http://localhost:3000/send';

  constructor(private http: HttpClient) {}

  sendEmail(emailData: any): Observable<any> {

    return this.http.post(this.apiUrl, emailData);
  }

}
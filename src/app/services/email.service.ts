import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmailService {

  private apiUrl = 'http://localhost:3000/emails';
  private authorizationToken = 'Bearer re_S6gmwkst_91dzT8KnPnQpncoNorEtwifz';

  constructor(private http: HttpClient) {}

  sendEmail(emailData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': this.authorizationToken,
      'Content-Type': 'application/json',
    });

    return this.http.post(this.apiUrl, emailData, { headers });
  }

}
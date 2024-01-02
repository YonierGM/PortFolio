import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

import Swal from 'sweetalert2'

import { EmailService } from './../../services/email.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import Notiflix from 'notiflix';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgOptimizedImage, HttpClientModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  datos: FormGroup;

  constructor(
    private emailService: EmailService,
    private httpClient: HttpClient

    ){
      this.datos = new FormGroup({
        email: new FormControl('',[Validators.required, Validators.email]),
        mensaje: new FormControl('',[Validators.required]),
      })
    }

  sendEmail(): void {
    Notiflix.Loading.circle('Enviando...');

    let params = {
      email: this.datos.value.email,
      mensaje:this.datos.value.mensaje
    }

    console.log(params)

    this.httpClient.post('http://localhost:3000/envio',params).subscribe({
      next(value) { 
        console.log('Email enviado: ' + value)

        Notiflix.Loading.remove();
        Notiflix.Notify.success('Tu Mensaje fue enviado')
      },
      error(err) {
        Notiflix.Loading.remove();
        Notiflix.Notify.failure('Error al enviar');
      },
      complete() {
        console.log('Observable emitted the complete notification')
      } 
    });

  //   const emailData = {
  //     from: 'this.email',
  //     to: 'yoniermosquera55@gmail.com',
  //     subject: 'this.mensaje',
  //     html: '<strong>it works!</strong>',
  //   };

  //   this.emailService.sendEmail(emailData).subscribe({
  //     next(res) { console.log('Email sent successfully:', res); },
  //     error(err)  { console.error('Error sending email:', err); },
  //     complete()  { console.log('Observable emitted the complete notification'); }
  //   });
  // }
  }
}
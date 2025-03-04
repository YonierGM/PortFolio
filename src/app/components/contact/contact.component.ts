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
  imports: [HttpClientModule, FormsModule, ReactiveFormsModule],
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
    
      // Extraer solo los valores del formulario
      const emailData = this.datos.value;
    
      this.emailService.sendEmail(emailData).subscribe({
        next(value) { 
          console.log('Email enviado:', value);
          Notiflix.Loading.remove();
          Notiflix.Notify.success('Tu Mensaje fue enviado');
        },
        error(err) {
          Notiflix.Loading.remove();
          Notiflix.Notify.failure('Error al enviar: ' + err);
          console.log('Error al enviar:', err);
        },
        complete() {
          console.log('Observable completed');
        } 
      });
    }
    
}
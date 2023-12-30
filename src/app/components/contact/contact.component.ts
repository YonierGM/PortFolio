import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

import Swal from 'sweetalert2'


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  constructor(){}

  contact(){

    Swal.fire({
      title: 'Lo siento!',
      text: 'No disponible',
      icon: 'info',
      confirmButtonText: 'Volver'
    })
   
  }
}

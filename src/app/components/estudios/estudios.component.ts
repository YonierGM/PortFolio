import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-estudios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estudios.component.html',
  styleUrl: './estudios.component.css'
})
export class EstudiosComponent {
  altura1 = false;
  altura2 = false;
  altura3 = false;
  altura4 = false;
  altura5 = false;
  altura6 = false;

  cambiarAltura1(){
    this.altura1 = !this.altura1;
  }
  cambiarAltura2(){
    this.altura2 = !this.altura2;
  }
  cambiarAltura3(){
    this.altura3 = !this.altura3;
  }
  cambiarAltura4(){
    this.altura4 = !this.altura4;
  }
  cambiarAltura5(){
    this.altura5 = !this.altura5;
  }
  cambiarAltura6(){
    this.altura6 = !this.altura6;
  }


}

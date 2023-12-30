import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, ContactComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  altura1 = false;
  altura2 = false;
  altura3 = false;
  altura4 = false;
  altura5 = false;

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

  ver1 = false;
  ver2= false;
  ver3 = false;
  mostrarInfo1(){
    this.ver1 = this.ver1 = true;
  }

  quitarInfo1(){
    this.ver1 = this.ver1 = false;
  }



  mostrarInfo2(){
    this.ver2 = this.ver2 = true;
  }

  quitarInfo2(){
    this.ver2 = this.ver2 = false;
  }



  mostrarInfo3(){
    this.ver3 = this.ver3 = true;
  }

  quitarInfo3(){
    this.ver3 = this.ver3 = false;
  }

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  visible = false;
  verLista = false;

  menu(){
    this.visible = !this.visible;
  }

  mostrarMenu(){
    this.verLista = !this.verLista;
  }

}

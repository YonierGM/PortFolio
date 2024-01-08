import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  visible = false;
  verLista = false;
  scroll = false;

  menu(){
    this.visible = !this.visible;
  }

  mostrarMenu(){
    this.verLista = !this.verLista;
  }

  @HostListener("document:scroll")
  Scroll(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      this.scroll = true;
    }else{
      this.scroll = false;
    }
  }
}

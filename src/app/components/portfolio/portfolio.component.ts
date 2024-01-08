import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

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

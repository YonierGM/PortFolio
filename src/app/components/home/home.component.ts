import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { ContactComponent } from '../contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from '../about/about.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { EstudiosComponent } from '../estudios/estudios.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, ContactComponent, AboutComponent, PortfolioComponent, EstudiosComponent, CommonModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

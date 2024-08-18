import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CartMenuComponent } from './cart-menu/cart-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CatalogComponent,CommonModule,NgOptimizedImage,LoginComponent,CartMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-ui';
  IsCatalog = true;
  
}

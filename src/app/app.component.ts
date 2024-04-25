import { Component } from '@angular/core';
<<<<<<< HEAD
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
=======
import { RouterOutlet } from '@angular/router';
>>>>>>> 992e074015fd8220ff157716f2519d66620b7887

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, NavbarComponent,FooterComponent,RouterModule],
=======
  imports: [RouterOutlet],
>>>>>>> 992e074015fd8220ff157716f2519d66620b7887
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto2';
}

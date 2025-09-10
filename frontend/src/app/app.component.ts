import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { MainmessageComponent } from './mainmessage/mainmessage.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NavbarComponent, MainmessageComponent]
})
export class AppComponent {}

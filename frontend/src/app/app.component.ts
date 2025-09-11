import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { MainmessageComponent } from './mainmessage/mainmessage.component';
import { TopshopComponent } from './topshop/topshop.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NavbarComponent, MainmessageComponent, TopshopComponent, FooterComponent]
})
export class AppComponent {}

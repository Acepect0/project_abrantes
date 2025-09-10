import { Component } from '@angular/core';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'app-navbar',
  imports: [MdbCollapseModule, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}

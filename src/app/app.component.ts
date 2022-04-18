import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vissaic_devchat';
  sidebarOpen = true;
  isLoggedIn = false;
  sidebarToggeler(){
    this.sidebarOpen = !this.sidebarOpen;
  }
}

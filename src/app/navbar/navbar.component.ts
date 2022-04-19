import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() toggleSidebar:EventEmitter<any> = new EventEmitter();
  constructor(protected login:LoginService) { }

  ngOnInit(): void {
  }

  toggleSidebarFunc(){
    this.toggleSidebar.emit();
  }
  onLogOut(){
    this.login.removeItems();
  }


  

}

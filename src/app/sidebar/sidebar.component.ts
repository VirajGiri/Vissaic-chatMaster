import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sidebarOpen = true;
  constructor() { }

  ngOnInit(): void {
  }
 
  sidebarToggeler(){
    this.sidebarOpen = !this.sidebarOpen;
  }
}

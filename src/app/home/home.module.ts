import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoComponent } from './to-do/to-do.component';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { ChatWindowComponent } from '../chat-window/chat-window.component';
import { AuthGuardService } from '../Services/auth-guard.service';


const routes: Routes = [
  {path:'',component:HomeComponent,
  children:[
    {path:'home',component:HomeComponent,canActivate:[AuthGuardService]},
    {path:'to-do', component:ToDoComponent,canActivate:[AuthGuardService]}
  ],
  canActivate:[AuthGuardService]},
];

@NgModule({
  declarations: [
    HomeComponent,
    ToDoComponent
  ],
  imports: [
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    CommonModule,
    RouterModule.forChild(routes)
   
  ],
  exports: [RouterModule],
  providers:[AuthGuardService]
})
export class HomeModule { }

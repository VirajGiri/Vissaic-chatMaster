import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatWindowComponent } from '../chat-window/chat-window.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from './sidebar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { HomeModule } from '../home/home.module';
import { AuthGuardService } from '../Services/auth-guard.service';

const routes: Routes = [
  {path:'',
  component:SidebarComponent,
  children:[
    {path:'home',
    loadChildren: () => import('../home/home.module').then(m => m.HomeModule)},
   {path:'chat-window',
   component:ChatWindowComponent,
   canActivate:[AuthGuardService]}
  ],
  
  canActivate:[AuthGuardService]
  }];

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    ChatWindowComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],
  providers:[AuthGuardService]
})
export class SidebarModule { }

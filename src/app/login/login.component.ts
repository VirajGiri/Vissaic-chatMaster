import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GenralServiceService } from '../Services/genral-service.service';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private genralService: GenralServiceService,private loginService:LoginService) {
   }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm.value);
    this.genralService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(res =>{
      console.log("login res",res);
      this.loginService.setToken(res.token);
      this.loginService.login(res.data);
     
    })
  }
}

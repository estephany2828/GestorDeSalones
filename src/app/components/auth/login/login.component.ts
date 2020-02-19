import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  // tslint:disable-next-line: member-ordering
  username: string;
  passwrd: string;

  ngOnInit() {
  }

  login(): void {
    if (this.username === 'admin' && this.passwrd === 'admin'){
     this.router.navigate(['home']);
    } else {
      alert('Credenciales Invalidas');
    }
  }

}

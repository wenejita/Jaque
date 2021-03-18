import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { usuario } from '../../../shared/usuario.interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
public usuario='jaque@email.com';
public contraseña='jaque';

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private router: Router) { }
  ngOnInit() {}

  onLogin(form: usuario) {
if (form.email== this.usuario){
        console.log('Successfully');
        localStorage.setItem("datas", JSON.stringify(form));

        this.router.navigate(['/']);
      }
        else {
          console.log('Error');
        }

  }

}

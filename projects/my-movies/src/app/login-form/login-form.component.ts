import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../moviedb/authentication.service';
import { user } from '../moviedb/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(private fb: FormBuilder, private authenService: AuthenticationService) { }

  ngOnInit(): void {
  }

  login() {
    this.authenService.request_token().subscribe(ob => {
      window.location.href = `https://www.themoviedb.org/authenticate/${ob.request_token}?redirect_to=http://localhost:4200/login`
    })
  }

}

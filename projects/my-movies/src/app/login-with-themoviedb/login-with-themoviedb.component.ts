import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../moviedb/authentication.service';

@Component({
  selector: 'app-login-with-themoviedb',
  templateUrl: './login-with-themoviedb.component.html',
  styleUrls: ['./login-with-themoviedb.component.sass']
})
export class LoginWithThemoviedbComponent implements OnInit {
  approved: boolean = false;
  request_token?: string;
  login_state: boolean = true;

  constructor(private authenService: AuthenticationService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.approved = params['approved']
      this.request_token = params['request_token']
    })

    if (this.approved && this.request_token) {
      this.login_state = false;
      this.get_session(this.request_token);
    }
  }

  login() {
    this.authenService.request_token().subscribe(ob => {
      window.location.href = `https://www.themoviedb.org/authenticate/${ob.request_token}?redirect_to=http://localhost:4200/login`
    })
  }

  get_session(request_token: string) {
    this.authenService.create_session(request_token).subscribe((sess) => {
      localStorage.setItem("ssid", sess.session_id);
      this.router.navigateByUrl('/');
    })
  }
}

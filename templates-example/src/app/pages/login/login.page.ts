import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthBooleanService } from 'src/app/services/auth-boolean.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isLoggedIn: boolean = false;
  private subscriptions = new Subscription();
  

  constructor(
     private authService: AuthBooleanService,
  ) { }

  ngOnInit() {
    this.subscriptions.add(
      this.authService.isUserAuthenticated()
        .subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn)
    );
  }

  logServiceAction() {
    this.isLoggedIn ? this.authService.logout() : this.authService.login();
    console.log('Service action executed:', this.isLoggedIn);
  }
}

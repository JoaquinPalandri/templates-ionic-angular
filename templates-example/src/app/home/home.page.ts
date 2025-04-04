import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScreenSizeService } from '../services/screen-size.service';
import { AuthBooleanService } from '../services/auth-boolean.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit, OnDestroy {
  isMobile: boolean = false;
  isLoggedIn: boolean = false;
  private subscriptions = new Subscription();

  constructor(
    private screenSizeService: ScreenSizeService,
    private authService: AuthBooleanService
  ) {}

  ngOnInit() {
    // Suscribirse al tamaño de pantalla
    this.subscriptions.add(
      this.screenSizeService.getIsMobileObservable()
        .subscribe(isMobile => this.isMobile = isMobile)
    );

    // Suscribirse al estado de autenticación
    this.subscriptions.add(
      this.authService.isUserAuthenticated()
        .subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn)
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  logServiceAction() {
    this.isLoggedIn ? this.authService.logout() : this.authService.login();
    console.log('Service action executed:', this.isLoggedIn);
  }
}
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthBooleanService } from 'src/app/services/auth-boolean.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ScreenSizeService } from 'src/app/services/screen-size.service';

@Component({
  selector: 'app-template-services',
  templateUrl: './template-services.page.html',
  styleUrls: ['./template-services.page.scss'],
})
export class TemplateServicesPage implements OnInit {

  isMobile: boolean = false;
  isLoggedIn: boolean = false;
  private subscriptions = new Subscription();

  constructor(
    private screenSizeService: ScreenSizeService,
    private authService: AuthBooleanService,
    private localStorage: LocalStorageService
  ) { }

  ngOnInit() {
    //SUSCRIPCIÓN AL SERVICIO DE TAMAÑO DE PANTALLA
    // Se suscribe al observable de tamaño de pantalla para actualizar el estado de isMobile
    // cuando cambie el tamaño de la ventana.
    // Esto permite que la aplicación responda a cambios en el tamaño de la pantalla,
    this.subscriptions.add(
      this.screenSizeService.getIsMobileObservable()
        .subscribe(isMobile => this.isMobile = isMobile)
    );

    // SUSCRIPCIÓN AL SERVICIO DE AUTENTICACIÓN
    // Se suscribe al observable de autenticación para actualizar el estado de isLoggedIn
    // cuando cambie el estado de autenticación del usuario.
    this.subscriptions.add(
      this.authService.isUserAuthenticated()
        .subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn)
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  /*
  Método para manejar el login/logout
  Este método alterna el estado de autenticación del usuario
  y registra la acción en la consola.
  Si el usuario está autenticado, se cierra sesión; de lo contrario, se inicia sesión.
  Esto es útil para simular el inicio y cierre de sesión en una aplicación.
  */
  logServiceAction() {
    this.isLoggedIn ? this.authService.logout() : this.authService.login();
    console.log('Service action executed:', this.isLoggedIn);
  }

  // Métodos para manejar el localStorage
  // Estos métodos son ejemplos de cómo interactuar con el servicio de localStorage
  guardarEnLocalStorage() {
    this.localStorage.setItem('usuario', 'admin');
    console.log('Usuario guardado en localStorage');
  }

  leerDeLocalStorage() {
    const usuario = this.localStorage.getItem('usuario');
    console.log('Usuario desde localStorage:', usuario);
  }

  borrarDeLocalStorage() {
    this.localStorage.removeItem('usuario');
    console.log('Usuario eliminado de localStorage');
  }
}

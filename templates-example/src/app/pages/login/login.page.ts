import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthBooleanService } from 'src/app/services/auth-boolean.service';
import { NativeBiometric, BiometryType } from "@capgo/capacitor-native-biometric";
import { Capacitor } from '@capacitor/core';

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

  async ngOnInit() {
    this.subscriptions.add(
      this.authService.isUserAuthenticated()
        .subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn)
    );

    // if (Capacitor.isNativePlatform()) {
    //   try {
    //     const available = await NativeBiometric.isAvailable();
    //     console.log('Biométrico disponible:', available);

    //     // Guarda una credencial demo
    //     await NativeBiometric.setCredentials({
    //       username: 'usuario_demo',
    //       password: '123456',
    //       server: 'mi_app'
    //     });

    //     // Intenta autenticarse
    //     const result = await NativeBiometric.verifyIdentity({
    //       reason: "Autenticarse para ingresar",
    //       title: "Biometría requerida",
    //     });

    //     console.log('Autenticado correctamente:', result);

    //     // Obtiene la credencial
    //     const credentials = await NativeBiometric.getCredentials({
    //       server: 'mi_app'
    //     });

    //     console.log('Credenciales guardadas:', credentials);
    //   } catch (err) {
    //     console.error('Error biométrico:', err);
    //   }
    // } else {
    //   console.warn('Estás en el navegador. El biométrico no está disponible aquí.');
    // }
  }

  logServiceAction() {
    this.isLoggedIn ? this.authService.logout() : this.authService.login();
    console.log('Service action executed:', this.isLoggedIn);
  }
  recibirDatos(data: { email: string; password: string }) {
    console.log('Datos recibidos del hijo:', data);
  
    // Ejemplo: podrías llamar a un servicio de autenticación
    // this.authService.login(data.email, data.password);
  }
  async performBiometricVerification(){
    const result = await NativeBiometric.isAvailable();
  
    if(!result.isAvailable) {
      alert('Biometría no disponible');
      return;
    }
  
    const verified = await NativeBiometric.verifyIdentity({
      reason: "Ingresá con tu huella",
      title: "Verificación requerida",
    })
    .then(() => true)
    .catch(() => false);
  
    if(verified){
      alert('✅ Biometric verification successful');
    } else {
      alert('❌ Verificación fallida o cancelada');
    }
  }
  
}

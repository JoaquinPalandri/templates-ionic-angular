import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NativeBiometric, BiometryType } from "@capgo/capacitor-native-biometric";
@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
})
export class FormLoginComponent implements OnInit {
  usuario: FormGroup;
  @Output() loginData = new EventEmitter<{ email: string; password: string }>();
  
  constructor(private fb: FormBuilder) {
    this.usuario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {}

  enviarDatos() {
    if (this.usuario.valid) {
      console.log('Formulario válido, datos:', this.usuario.value);
      this.loginData.emit(this.usuario.value); // Emitimos los datos al padre
    } else {
      console.log('Formulario inválido');
    }
  }

  private passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { notMatching: true };
  }
  accesoBiometrico(){
console.log('Acceso biométrico activado');  
  }


async performBiometricVerification(){
  const result = await NativeBiometric.isAvailable();

  if(result.isAvailable) {
    alert('Biometric authentication is not available'); }

  const verified = await NativeBiometric.verifyIdentity()
    .then(() => true)
    .catch(() => false);

  if(!verified) return;
}
}

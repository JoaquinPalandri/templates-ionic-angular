import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
})
export class FormLoginComponent  implements OnInit {
 usuario: FormGroup;

   constructor(private fb: FormBuilder) {
      this.usuario = this.fb.group({
        email: ['', [Validators.required, Validators.email]],     
        password: ['', [Validators.required, Validators.minLength(6)]],     
      }, { });
    }
    guardarDatos() {
      if (this.usuario.valid) {
        console.log('Formulario válido, datos:', this.usuario.value);
      } else {
        console.log('Formulario inválido');
      }
    }
  
  
    private passwordMatchValidator(form: FormGroup) {
      const password = form.get('password')?.value;
      const confirmPassword = form.get('confirmPassword')?.value;
      return password === confirmPassword ? null : { notMatching: true };
    }
  ngOnInit() {}

}

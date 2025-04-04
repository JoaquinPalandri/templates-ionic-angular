import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.scss'],
})
export class FormTemplateComponent implements OnInit {
  usuario: FormGroup;
  showPassword = false;

  constructor(private fb: FormBuilder) {
    this.usuario = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      fechaNacimiento: [''],
      genero: [''],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: [''],
      terminos: [false, Validators.requiredTrue],
    }, { validator: this.passwordMatchValidator });
  }

  ngOnInit() {}

  guardarDatos() {
    if (this.usuario.valid) {
      console.log('Formulario válido, datos:', this.usuario.value);
    } else {
      console.log('Formulario inválido');
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  private passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { notMatching: true };
  }
}

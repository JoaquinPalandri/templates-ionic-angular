import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormTemplateComponent } from './form-template/form-template.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormLoginComponent } from './form-login/form-login.component';



@NgModule({
  declarations: [FormTemplateComponent,FormLoginComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [FormTemplateComponent,FormLoginComponent],
})
export class FormulariosModule { }

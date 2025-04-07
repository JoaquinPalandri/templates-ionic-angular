import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterLink

  ],
  exports: [NavBarComponent],
})
export class NavBarModule { }

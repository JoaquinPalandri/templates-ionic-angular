import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemplateServicesPageRoutingModule } from './template-services-routing.module';

import { TemplateServicesPage } from './template-services.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemplateServicesPageRoutingModule
  ],
  declarations: [TemplateServicesPage]
})
export class TemplateServicesPageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateServicesPage } from './template-services.page';

const routes: Routes = [
  {
    path: '',
    component: TemplateServicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemplateServicesPageRoutingModule {}

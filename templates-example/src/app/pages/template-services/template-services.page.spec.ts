import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemplateServicesPage } from './template-services.page';

describe('TemplateServicesPage', () => {
  let component: TemplateServicesPage;
  let fixture: ComponentFixture<TemplateServicesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateServicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

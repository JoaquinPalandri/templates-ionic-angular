import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {
  private isMobile$ = new BehaviorSubject<boolean>(this.checkIfMobile());

  constructor() {
    window.addEventListener('resize', () => {
      this.isMobile$.next(this.checkIfMobile());
    });
  }

  private checkIfMobile(): boolean {
    return window.innerWidth < 768; // Menos de 768px es móvil
  }

  getIsMobileObservable() {
    return this.isMobile$.asObservable();
  }
}

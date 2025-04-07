import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * Servicio para gestionar el estado de autenticación del usuario utilizando un indicador booleano.
 * Proporciona métodos para iniciar sesión, cerrar sesión y observar el estado de autenticación.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthBooleanService {

  /**
   * Emite el estado actual de autenticación como un booleano.
   * `true` indica que el usuario está autenticado, `false` en caso contrario.
   */
  private isAuthenticated$ = new BehaviorSubject<boolean>(false);

  /**
   * Marca al usuario como autenticado estableciendo el estado de autenticación en `true`.
   */
  login() {
    this.isAuthenticated$.next(true);
  }

  /**
   * Marca al usuario como no autenticado estableciendo el estado de autenticación en `false`.
   */
  logout() {
    this.isAuthenticated$.next(false);
  }

  /**
   * Devuelve un observable del estado de autenticación del usuario.
   * Los suscriptores pueden escuchar los cambios en el estado de autenticación.
   * 
   * @returns Observable<boolean> - Emite `true` si el usuario está autenticado, `false` en caso contrario.
   */
  isUserAuthenticated() {
    return this.isAuthenticated$.asObservable();
  }
}

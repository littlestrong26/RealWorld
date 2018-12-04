import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  @Output()
  getLoginStatus = new EventEmitter();

  login = false;
  constructor() { }

  getLogin() {
    return this.login;
  }

  setLogin(status: boolean) {
    this.login = true;
    this.getLoginStatus.emit(this.login);
  }

}

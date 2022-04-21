import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  navbarOpened = false;

  navbarOpened$ = new Subject<boolean>();

  constructor() {}

  toggleNavigation() {
    this.navbarOpened = !this.navbarOpened;
    this.navbarOpened$.next(this.navbarOpened);
  }
}

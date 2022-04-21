import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('fly_navbar', [
      state('show', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        animate(
          400,
          keyframes([
            style({ transform: 'translateX(-300px)', offset: 0 }),
            style({ transform: 'translateX(0)', offset: 1.0 }),
          ])
        ),
      ]),
      transition('* => void', [
        animate(
          400,
          keyframes([
            style({ transform: 'translateX(0)', offset: 0 }),
            style({ transform: 'translateX(-300px)', offset: 1.0 }),
          ])
        ),
      ]),
    ]),
  ],
})
export class NavbarComponent implements OnInit {
  navigations = [
    { path: '/', name: 'Home' },
    { path: '/bookcase', name: 'Bookcase' },
    { path: '/help', name: 'Help' },
  ];

  opened$ = this.layoutService.navbarOpened$;

  constructor(private layoutService: LayoutService) {}

  ngOnInit(): void {}

  toggleNavigation() {
    this.layoutService.toggleNavigation();
  }
}

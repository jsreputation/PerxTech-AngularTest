import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navigations = [
    { path: '/', name: 'Home' },
    { path: '/bookcase', name: 'Bookcase' },
    { path: '/help', name: 'Help' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

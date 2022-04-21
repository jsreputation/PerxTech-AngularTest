import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  currentRoute = null;

  constructor(private router: Router) {
    router.events.pipe(filter((event: any) => event instanceof NavigationEnd)).subscribe((event: any) => {
      if (event.url !== '/') {
        this.currentRoute = event.url;
      } else {
        this.currentRoute = null;
      }
      // console.log(this.currentRoute);
    });
  }

  ngOnInit(): void {}
}

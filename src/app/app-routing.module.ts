import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      // Do not lazyload home page, for the best practice, the first page shouldn't be lazyloaded to improve the loading speed
      { path: '', component: HomeComponent },
      {
        path: 'bookcase',
        loadChildren: () => import('./pages/bookcase/bookcase.module').then((m) => m.BookcaseModule),
      },
      {
        path: 'help',
        loadChildren: () => import('./pages/help/help.module').then((m) => m.HelpModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

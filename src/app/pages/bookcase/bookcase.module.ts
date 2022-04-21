import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookcaseRoutingModule } from './bookcase-routing.module';
import { BookcaseComponent } from './bookcase.component';


@NgModule({
  declarations: [
    BookcaseComponent
  ],
  imports: [
    CommonModule,
    BookcaseRoutingModule
  ]
})
export class BookcaseModule { }

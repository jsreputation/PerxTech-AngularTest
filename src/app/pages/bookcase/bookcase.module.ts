import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BookcaseRoutingModule } from './bookcase-routing.module';
import { BookcaseComponent } from './bookcase.component';

@NgModule({
  declarations: [BookcaseComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, BookcaseRoutingModule],
})
export class BookcaseModule {}

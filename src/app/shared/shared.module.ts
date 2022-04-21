import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeTextDirective } from './change-text.directive';

@NgModule({
  declarations: [ChangeTextDirective],
  imports: [CommonModule],
  exports: [ChangeTextDirective],
})
export class SharedModule {}

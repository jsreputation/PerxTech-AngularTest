import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeText]',
})
export class ChangeTextDirective {
  clicked = 0;

  constructor(private el: ElementRef) {}

  @HostListener('click', ['$event']) onClick($event: any) {
    this.clicked += 1;
    this.el.nativeElement.innerText = `You changed my text to something different! Clicked ${this.clicked} times`;
  }
}

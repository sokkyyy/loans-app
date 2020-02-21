import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appMoveDown]'
})
export class MoveDownDirective {

  constructor(private elem:ElementRef) { }

  moveDown(){
    window.scrollTo({
      top:500,
      behavior:'smooth',
    });
  }

  @HostListener('click') onClicks(){
    this.moveDown();
    console.log('ray')
  }

}

import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appNavbarScroll]'
})
export class NavbarScrollDirective {

  constructor(private elem:ElementRef) { }

  @HostListener('window:scroll',['$event'])
  onWindowScroll(e){
    if(window.pageYOffset > 200) {
      this.elem.nativeElement.style.display='block';
    }
  }

}

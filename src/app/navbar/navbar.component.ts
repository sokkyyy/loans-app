import { Component, OnInit,ElementRef,HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private elem:ElementRef) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll',['$event'])
  onWindowScroll(e){
    if(window.pageYOffset < 300) {
      this.elem.nativeElement.style.display='none';
    }
  }

}

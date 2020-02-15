import { Component, OnInit } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  faAngleDown = faAngleDown;

  scrollDown(){
    document.body.scrollTop = 0;
  }
  constructor() { }

  ngOnInit(): void {
  }


}

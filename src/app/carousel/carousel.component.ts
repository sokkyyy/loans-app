import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgbCarouselConfig]

})
export class CarouselComponent implements OnInit {

  showNavigationIndicators = false; 

  constructor(config: NgbCarouselConfig) {
    config.showNavigationIndicators = false;
  }

  ngOnInit(): void {
  }

}

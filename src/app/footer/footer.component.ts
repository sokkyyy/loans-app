import { Component, OnInit } from '@angular/core';
import { faTwitter,faFacebookSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faTwitter = faTwitter;
  faFacebookSquare = faFacebookSquare;
  faLinkedinIn = faLinkedinIn;
  
  constructor() { }

  ngOnInit(): void {
  }

}

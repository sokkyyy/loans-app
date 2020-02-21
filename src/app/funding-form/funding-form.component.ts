import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { faBuilding, faMapMarkerAlt,faShareAlt } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-funding-form',
  templateUrl: './funding-form.component.html',
  styleUrls: ['./funding-form.component.css']
})
export class FundingFormComponent implements OnInit {

  faBuilding = faBuilding;

  @Output() next = new EventEmitter();
  @Output() prev = new EventEmitter();

  movePrev(){
    this.prev.emit();
  }
  moveNext(){
    this.next.emit();
  }  
  constructor() { }

  ngOnInit(): void {
  }

}

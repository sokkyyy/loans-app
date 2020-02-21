import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { faBuilding, faMapMarkerAlt,faShareAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-business-info-form',
  templateUrl: './business-info-form.component.html',
  styleUrls: ['./business-info-form.component.css']
})
export class BusinessInfoFormComponent implements OnInit {

  faBuilding = faBuilding;
  faMapMarkerAlt = faMapMarkerAlt;
  faShareAlt = faShareAlt;

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

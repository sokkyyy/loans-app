import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { faUserEdit, faIdCard,faMobile, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Personaldetails } from '../personaldetails';


@Component({
  selector: 'app-personal-details-form',
  templateUrl: './personal-details-form.component.html',
  styleUrls: ['./personal-details-form.component.css']
})
export class PersonalDetailsFormComponent implements OnInit {

  faUserEdit = faUserEdit;
  faIdCard = faIdCard;
  faMobile = faMobile;
  faEnvelope = faEnvelope;


  @Output() next = new EventEmitter();

  moveNext(){
    this.next.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}

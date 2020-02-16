import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {
  step = 1;

  moveNext(){
    this.step = this.step + 1;
  }

  movePrev(){
    this.step = this.step - 1;
  }
  constructor() {
  }

  ngOnInit(): void {
  }

}

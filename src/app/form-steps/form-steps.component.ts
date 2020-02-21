import { Component, OnInit, Input } from '@angular/core';
import { faUser,faBuilding, faHandHoldingUsd,faFileSignature } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-form-steps',
  templateUrl: './form-steps.component.html',
  styleUrls: ['./form-steps.component.sass']
})
export class FormStepsComponent implements OnInit {

  @Input() step;
  faUser = faUser;
  faBuilding = faBuilding;
  faHandHoldingUsd = faHandHoldingUsd;
  faCheckCircle = faCheckCircle;
  faFileSignature = faFileSignature;

  constructor() { }

  ngOnInit(): void {
  }

}

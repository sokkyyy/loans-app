import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { LoanBenefitsComponent } from './loan-benefits/loan-benefits.component';
import { FooterComponent } from './footer/footer.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { FormStepsComponent } from './form-steps/form-steps.component';
import { PersonalDetailsFormComponent } from './personal-details-form/personal-details-form.component';
import { BusinessInfoFormComponent } from './business-info-form/business-info-form.component';
import { FundingFormComponent } from './funding-form/funding-form.component';
import { FormsModule } from '@angular/forms';
import { NavbarScrollDirective } from './navbar-scroll.directive';
import { MoveDownDirective } from './move-down.directive';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    CarouselComponent,
    HowItWorksComponent,
    LoanBenefitsComponent,
    FooterComponent,
    ApplicationFormComponent,
    FormStepsComponent,
    PersonalDetailsFormComponent,
    BusinessInfoFormComponent,
    FundingFormComponent,
    NavbarScrollDirective,
    MoveDownDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent,CarouselComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: '', component:LandingComponent},
  { path:'apply', component:ApplicationFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

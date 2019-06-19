import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StartComponent } from './start/start.component';
import { Question1Component } from './question1/question1.component';
import { Question2Component } from './question2/question2.component';
import { Question3Component } from './question3/question3.component';
import { Question4Component } from './question4/question4.component';
import { Question5Component } from './question5/question5.component';

const routes: Routes = [
  { path: 'start', component: StartComponent },
  { path: 'question1', component: Question1Component },
  { path: 'question2', component: Question2Component },
  { path: 'question3', component: Question3Component },
  { path: 'question4', component: Question4Component },
  { path: 'question5', component: Question5Component }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routing } from './home.routing';

import { HomeComponent } from './comp/home.component';
import { NavComponent } from '../../navigation/nav.component';


@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    Routing
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }

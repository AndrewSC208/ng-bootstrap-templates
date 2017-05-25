import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routing } from './starter.routing';
import { StarterComponent } from './comp/starter.component';
import { NavComponent } from '../../navigation/nav.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    Routing,
  ],
  declarations: [StarterComponent]
})
export class StarterModule { }

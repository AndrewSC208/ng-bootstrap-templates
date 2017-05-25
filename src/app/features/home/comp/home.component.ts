import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../../../navigation/nav.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	title: String = "Home";
  	
  	constructor() { }

  	ngOnInit() {
 	
 	}

}


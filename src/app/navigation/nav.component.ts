import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

	routes: Object[] = [
		{text: 'Home', route: '/home', icon: 'placeholder'},
		{text: 'Starter', route: '/starter', icon: 'placeholder'}
	]

  constructor() { }

  ngOnInit() {
  }

}

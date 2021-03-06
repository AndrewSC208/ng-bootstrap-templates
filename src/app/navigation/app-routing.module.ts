import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
  	{ path: 'home', loadChildren: '../features/home/home.module#HomeModule' },
  	{ path: 'starter', loadChildren: '../features/starter/starter.module#StarterModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

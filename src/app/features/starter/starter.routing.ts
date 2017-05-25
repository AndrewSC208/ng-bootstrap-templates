import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StarterComponent } from './comp/starter.component';

const routes: Routes = [
  { path: '', component: StarterComponent }
];

export const Routing: ModuleWithProviders = RouterModule.forChild(routes);
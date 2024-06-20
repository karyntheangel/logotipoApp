import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AuthComponent } from '@layouts/auth/auth.component';
import { DashboardComponent } from '@layouts/dashboard/dashboard.component';
import { PagesComponent } from '@layouts/pages/pages.component';

const routes: Routes = [
  {path: 'login', component: AuthComponent, data: { titulo: 'Login', nombre: 'description' } },
  {
    path: '',
    canActivate: [],
    component: PagesComponent,
    loadChildren: () => import('./layouts/pages/pages.module').then(m => m.PagesModule),
  },
  {
    path: 'dashboard',
    canActivate: [],
    component: DashboardComponent,
    loadChildren: () => import('./layouts/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'login',
    canActivate: [],
    component: AuthComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './general/general.component';

// Components

const dashboardRouter: Routes = [
  {
      path: 'dashboard',
      component:GeneralComponent,
      data: {
        titulo: 'Dashboard',
        sub_titulo: ['principal'],
        nombre: 'descripción',
      },
    },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forChild(dashboardRouter)],
    exports: [RouterModule],
  })

export class DashboardRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Component
import { HomeComponent } from './home/home.component';

// Components

const pagesRouter: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        data: {
          titulo: 'Inicio',
          sub_titulo: ['Inicio'],
          nombre: 'descripción',
        },
      },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forChild(pagesRouter)],
    exports: [RouterModule],
  })

export class PagesRoutingModule { }
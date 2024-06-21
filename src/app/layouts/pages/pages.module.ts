import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { PagesComponent } from './pages.component';

// Modules
import { SharedModule } from '@shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { DemoVideoComponent } from './demo-video/demo-video.component';


@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    DemoVideoComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
  ]
})
export class PagesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

//Configuration PrimeNG
import { Footer, PrimeNGConfig } from 'primeng/api';
import { configPrimeNG } from '@shared/primeng/primeng.config'
import {BreadcrumbModule} from "primeng/breadcrumb";

// Modules
import { PrimengModule } from './primeng/primeng.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
    HeaderComponent,
    FooterComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        BreadcrumbModule,
        PrimengModule,
        ReactiveFormsModule,
    ],
    exports: [
        PrimengModule,
        HeaderComponent,
        FooterComponent
    ],
  })
  export class SharedModule {
    constructor(private primengConfig: PrimeNGConfig) {
      configPrimeNG(this.primengConfig);
    }
   }
  
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '@shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { GeneralComponent } from './general/general.component';



@NgModule({
    declarations: [
        DashboardComponent,
        GeneralComponent
    ],
    imports: [
        DashboardRoutingModule,
        CommonModule,
        SharedModule,
    ]
})
export class DashboardModule { }

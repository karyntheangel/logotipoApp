import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Modules
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '@shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { GeneralComponent } from './general/general.component';
import { ClientFormComponent } from './client-form/client-form.component';



@NgModule({
    declarations: [
        DashboardComponent,
        GeneralComponent,
        ClientFormComponent
    ],
    imports: [
        DashboardRoutingModule,
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class DashboardModule { }

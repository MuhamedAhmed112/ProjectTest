import { HomeComponent } from './layout/pages/home/home.component';
import { MedicinesComponent } from './layout/pages/medicines/medicines.component';
import { CareersComponent } from './layout/pages/careers/careers.component';
import { NotfoundComponent } from './layout/additions/notfound/notfound.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'medicines', component: MedicinesComponent},
    { path: 'careers', component: CareersComponent},
    { path: '**', component:NotfoundComponent  }
];

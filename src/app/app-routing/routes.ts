import { Routes } from '@angular/router';


import { HomeComponent } from '../home/home.component';
import { ProjetosComponent } from '../projetos/projetos.component';

export const routes : Routes = [
    { path: 'home' , component: HomeComponent },
    { path: 'projetos' , component: ProjetosComponent},
    { path: '',          redirectTo: 'home', pathMatch: 'full' }
]
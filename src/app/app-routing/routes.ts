import { Routes } from '@angular/router';


import { HomeComponent } from '../home/home.component';
import { ProjetosComponent } from '../projetos/projetos.component';
import { ProjetoCriaComponent } from '../projeto-cria/projeto-cria.component';

import { CanvasProjetoComponent } from '../canvas-projeto/canvas-projeto.component';
import { CanvasMvpComponent } from '../canvas-mvp/canvas-mvp.component';


export const routes : Routes = [
    { path: 'home' , component: HomeComponent },

    { path: 'mvpCanvas/:id' , component: CanvasMvpComponent },
    { path: 'projetoCanvas/:id' , component: CanvasProjetoComponent },
    { path: 'projetos' , component: ProjetosComponent},
    { path: 'projetos/insere' , component: ProjetoCriaComponent},
    { path: '',          redirectTo: 'home', pathMatch: 'full' }
]
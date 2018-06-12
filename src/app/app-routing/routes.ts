import { Routes } from '@angular/router';


import { HomeComponent } from '../home/home.component';
import { ProjetosComponent } from '../projetos/projetos.component';
import { ProjetoCriaComponent } from '../projeto-cria/projeto-cria.component';

import { CanvasProjetoComponent } from '../canvas-projeto/canvas-projeto.component';
import { CanvasMvpComponent } from '../canvas-mvp/canvas-mvp.component';
import { CanvasPropostaValorComponent } from '../canvas-proposta-valor/canvas-proposta-valor.component';
import { CanvasDorGanhoComponent } from '../canvas-dor-ganho/canvas-dor-ganho.component';

export const routes : Routes = [
    { path: 'home' , component: HomeComponent },

    { path: 'dorGanhoCanvas/:id' , component: CanvasDorGanhoComponent },
    { path: 'valorCanvas/:id' , component: CanvasPropostaValorComponent },
    { path: 'mvpCanvas/:id' , component: CanvasMvpComponent },
    { path: 'projetoCanvas/:id' , component: CanvasProjetoComponent },
    { path: 'projetos' , component: ProjetosComponent},
    { path: 'projetos/insere' , component: ProjetoCriaComponent},
    { path: '',          redirectTo: 'home', pathMatch: 'full' }
]
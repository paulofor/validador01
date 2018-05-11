import { Routes } from '@angular/router';


import { HomeComponent } from '../home/home.component';
import { ProjetosComponent } from '../projetos/projetos.component';
import { ProjetoCriaComponent } from '../projeto-cria/projeto-cria.component';
import { ExemploCanvasComponent } from '../exemplo-canvas/exemplo-canvas.component';
import { CanvasProjetoComponent } from '../canvas-projeto/canvas-projeto.component';
import { CanvasProjeto2Component } from '../canvas-projeto-2/canvas-projeto-2.component';

export const routes : Routes = [
    { path: 'home' , component: HomeComponent },
    { path: 'exemploCanvas' , component: ExemploCanvasComponent },
    { path: 'projetoCanvas' , component: CanvasProjetoComponent },
    { path: 'projetoCanvas/:id' , component: CanvasProjetoComponent },
    { path: 'projetos' , component: ProjetosComponent},
    { path: 'projetos/insere' , component: ProjetoCriaComponent},
    { path: '',          redirectTo: 'home', pathMatch: 'full' }
]
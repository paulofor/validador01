import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { ProjetosComponent } from './projetos/projetos.component';

/* Coloquei manualmente */
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ProjetoCriaComponent } from './projeto-cria/projeto-cria.component';
import { ProjetoEditaComponent } from './projeto-edita/projeto-edita.component';
import { ProjetoExibeComponent } from './projeto-exibe/projeto-exibe.component'
import { FormsModule } from '@angular/forms';
import { ExemploCanvasComponent } from './exemplo-canvas/exemplo-canvas.component';
import { CanvasProjetoComponent } from './canvas-projeto/canvas-projeto.component'; 

import { ProjetoService } from './servicos/projeto.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    ProjetosComponent,
    ProjetoCriaComponent,
    ProjetoEditaComponent,
    ProjetoExibeComponent,
    ExemploCanvasComponent,
    CanvasProjetoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ProjetoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

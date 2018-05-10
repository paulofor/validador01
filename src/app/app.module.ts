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
import { ProjetoApi } from './shared/sdk/services/custom/Projeto';
import { HttpClient, HttpResponse, HttpClientModule } from '@angular/common/http';
import { SocketConnection } from './shared/sdk/sockets/socket.connections';
import { SocketDriver } from './shared/sdk/sockets/socket.driver';
import { SDKModels } from './shared/sdk/services/custom/SDKModels';
import { LoopBackAuth } from './shared/sdk/services/core/auth.service';
import { InternalStorage } from './shared/sdk/storage/storage.swaps';
import { ProjetoCanvasCriaComponent } from './projeto-canvas-cria/projeto-canvas-cria.component';

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
    CanvasProjetoComponent,
    ProjetoCanvasCriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [
    ProjetoService,
    ProjetoApi,
    HttpClient,
    SocketConnection,
    SocketDriver,
    SDKModels,
    LoopBackAuth,
    InternalStorage

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

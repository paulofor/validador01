import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive } from '@angular/core';


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

import { CanvasProjetoComponent } from './canvas-projeto/canvas-projeto.component'; 

import { ProjetoService } from './servicos/projeto.service';
import { ProjetoApi, GanhoDorCanvasMySqlApi, ItemValidacaoPaginaApi } from './shared/sdk/services/custom';
import { ProjetoCanvasApi } from './shared/sdk/services/custom/ProjetoCanvas';
import { ProjetoMySqlApi } from './shared/sdk/services/custom/ProjetoMySql';
import { ProjetoCanvasMySqlApi } from './shared/sdk/services/custom/ProjetoCanvasMySql';
import { MvpCanvasMySqlApi } from './shared/sdk/services/custom/MvpCanvasMySql';

import { ContainerApi } from './shared/sdk/services/custom';

import { HttpClient, HttpResponse, HttpClientModule } from '@angular/common/http';
import { SocketConnection } from './shared/sdk/sockets/socket.connections';
import { SocketDriver } from './shared/sdk/sockets/socket.driver';
import { SDKModels } from './shared/sdk/services/custom/SDKModels';
import { LoopBackAuth } from './shared/sdk/services/core/auth.service';
import { InternalStorage } from './shared/sdk/storage/storage.swaps';
import { ProjetoCanvasCriaComponent } from './projeto-canvas-cria/projeto-canvas-cria.component';

import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { ProjetoCanvasEditaComponent } from './projeto-canvas-edita/projeto-canvas-edita.component';
import { CanvasMvpComponent } from './canvas-mvp/canvas-mvp.component';
import { MvpCanvasCriaComponent } from './mvp-canvas-cria/mvp-canvas-cria.component';
import { MvpCanvasEditaComponent } from './mvp-canvas-edita/mvp-canvas-edita.component';
import { CanvasPropostaValorComponent } from './canvas-proposta-valor/canvas-proposta-valor.component';
import { CanvasDorGanhoComponent } from './canvas-dor-ganho/canvas-dor-ganho.component';
import { DorGanhoCanvasCriaComponent } from './dor-ganho-canvas-cria/dor-ganho-canvas-cria.component';
import { DorGanhoCanvasEditaComponent } from './dor-ganho-canvas-edita/dor-ganho-canvas-edita.component';
import { PropostaValorComponent } from './proposta-valor/proposta-valor.component';
import { DetalheValorComponent } from './detalhe-valor/detalhe-valor.component';
import { ReceitaProjetoComponent } from './receita-projeto/receita-projeto.component';
import { ReceitaEditaComponent } from './receita-edita/receita-edita.component';
import { ImageTesteComponent } from './image-teste/image-teste.component';

import { NgxImgModule } from 'ngx-img';


import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { FileUploadNg2FileUploadComponent } from './file-upload-ng2-file-upload/file-upload-ng2-file-upload.component';
import { FileUploadNgxFileDropComponent } from './file-upload-ngx-file-drop/file-upload-ngx-file-drop.component';

import { FileDropModule } from 'ngx-file-drop';
import { UploadModule } from './upload/upload.module';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    ProjetosComponent,
    ProjetoCriaComponent,
    ProjetoEditaComponent,
    ProjetoExibeComponent,
    CanvasProjetoComponent,
    ProjetoCanvasCriaComponent,
    ProjetoCanvasEditaComponent,
    CanvasMvpComponent,
    MvpCanvasCriaComponent,
    MvpCanvasEditaComponent,
    CanvasPropostaValorComponent,
    CanvasDorGanhoComponent,
    DorGanhoCanvasCriaComponent,
    DorGanhoCanvasEditaComponent,
    PropostaValorComponent,
    DetalheValorComponent,
    ReceitaProjetoComponent,
    ReceitaEditaComponent,
    ImageTesteComponent,
    //ArquivosComponent,
    FileSelectDirective,
    FileUploadNg2FileUploadComponent,
    FileUploadNgxFileDropComponent
  ],
  entryComponents: [
    ProjetoCanvasCriaComponent,
    ProjetoCanvasEditaComponent,
    MvpCanvasCriaComponent,
    MvpCanvasEditaComponent,
    DorGanhoCanvasCriaComponent,
    DorGanhoCanvasEditaComponent,
    //ArquivosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule ,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgxImgModule.forRoot(),
    FileDropModule,
    UploadModule
  ],
  providers: [
    ProjetoService,
    ProjetoApi,
    ProjetoCanvasApi,
    HttpClient, 
    SocketConnection  , 
    SocketDriver,
    SDKModels,
    LoopBackAuth,
    InternalStorage,
    ProjetoMySqlApi,
    ProjetoCanvasMySqlApi,
    MvpCanvasMySqlApi,
    GanhoDorCanvasMySqlApi,
    ItemValidacaoPaginaApi,
    ContainerApi

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

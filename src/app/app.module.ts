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

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    ProjetosComponent,
    ProjetoCriaComponent,
    ProjetoEditaComponent,
    ProjetoExibeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

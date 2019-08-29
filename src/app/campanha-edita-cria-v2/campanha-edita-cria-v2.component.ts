import { Component, OnInit } from '@angular/core';
import { CampanhaAds, PaginaValidacaoWeb, CampanhaAdsApi, ProjetoMySqlApi, SetupCampanha, SetupCampanhaApi, PaginaInstalacaoApp, AnuncioAplicativo, AnuncioAplicativoApi, VersaoApp, VersaoAppApi, PresencaLojaApi, PresencaLoja } from '../shared/sdk';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CampanhaEditaCriaComponent } from '../campanha-edita-cria/campanha-edita-cria.component';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-campanha-edita-cria-v2',
  templateUrl: './campanha-edita-cria-v2.component.html',
  styleUrls: ['./campanha-edita-cria-v2.component.scss']
})
export class CampanhaEditaCriaV2Component implements OnInit {


  private item: CampanhaAds;
  private listaPagina: PaginaValidacaoWeb[];
  private listaPaginaInstalacao: PaginaInstalacaoApp[];
  private listaAnuncioApp: AnuncioAplicativo[];
  private listaVersaoApp: VersaoApp[];
  private listaPresencaLoja: PresencaLoja[];

  private listaSetup: SetupCampanha[];
  private idProjeto: number;

  constructor(public dialogRef: MatDialogRef<CampanhaEditaCriaComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any, private campanhaSrv: CampanhaAdsApi,
    private projetoSrv: ProjetoMySqlApi, private setupCampanhaSrv: SetupCampanhaApi, private versaoAppSrv: VersaoAppApi,
    private anuncioAppSrv: AnuncioAplicativoApi, private presencaLojaSrv:PresencaLojaApi) { }


  carregaListaPaginaInstalacao() {
    this.projetoSrv.getPaginaInstalacaoApps(this.idProjeto)
      .subscribe((resultado: PaginaInstalacaoApp[]) => {
        this.listaPaginaInstalacao = resultado;
      })
  }

  carregaListaPagina() {
    this.projetoSrv.getPaginaValidacaoWebs(this.idProjeto)
      .subscribe((resultado: PaginaValidacaoWeb[]) => {
        this.listaPagina = resultado;
      })
  }

  carregaVersaoApp() {
    this.projetoSrv.getVersaoApps(this.idProjeto)
      .subscribe((resultado: VersaoApp[]) => {
        this.listaVersaoApp = resultado;
      })
  }

  carregaListaAnuncioAplicativo() {
    console.log('ProjetoId:' , this.idProjeto)
    
    let filtro = { 'where': { 'projetoMySqlId': this.idProjeto } };
    console.log('Filtro:' , filtro);
    this.anuncioAppSrv.find(filtro)
      .subscribe((resultado: AnuncioAplicativo[]) => {
        console.log('ListaAnuncio:' , resultado);
        this.listaAnuncioApp = resultado;
      })
  }

  carregaListaSetup() {
    this.setupCampanhaSrv.find()
      .subscribe((resultado: SetupCampanha[]) => {
        this.listaSetup = resultado;
      })
  }


  carregaListaPresencaLoja() {
    this.projetoSrv.getPresencaLojas(this.idProjeto)
      .subscribe((resultado: PresencaLoja[]) => {
        this.listaPresencaLoja = resultado;
      })
  }

  ngOnInit() {
    console.log("Parametro entrada", this.data);
    this.idProjeto = this.data.idProjeto;
    if (!this.data.campanha) {
      this.item = new CampanhaAds();
    } else {
      this.item = this.data.campanha;
    }
    this.carregaListaPagina();
    this.carregaListaPaginaInstalacao();
    this.carregaListaSetup();
    this.carregaListaAnuncioAplicativo();
    this.carregaVersaoApp();
    this.carregaListaPresencaLoja();
  }

  onSubmit() {
    console.log('Model: ' + JSON.stringify(this.item));
    if (!this.item.id) {
      this.campanhaSrv.CriaNova(this.item, (err, obj) => {
        console.log("Erro:" + err.message);
      }).subscribe((e: any) => {
        console.log(JSON.stringify(e));
        this.closeDialog();
      });
    } else {
      this.campanhaSrv.updateAttributes(this.item.id, this.item, (err, obj) => {
        console.log("Erro:" + err.message);
      }).subscribe((e: any) => {
        console.log(JSON.stringify(e));
        this.closeDialog();
      });
    }
  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }

}

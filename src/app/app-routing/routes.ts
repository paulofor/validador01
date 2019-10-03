import { Routes } from '@angular/router';


import { HomeComponent } from '../home/home.component';
import { ProjetosComponent } from '../projetos/projetos.component';
import { ProjetoCriaComponent } from '../projeto-cria/projeto-cria.component';

import { CanvasProjetoComponent } from '../canvas-projeto/canvas-projeto.component';
import { CanvasMvpComponent } from '../canvas-mvp/canvas-mvp.component';
import { CanvasPropostaValorComponent } from '../canvas-proposta-valor/canvas-proposta-valor.component';
import { CanvasDorGanhoComponent } from '../canvas-dor-ganho/canvas-dor-ganho.component';
import { PropostaValorComponent } from '../proposta-valor/proposta-valor.component';
import { DetalheValorComponent } from '../detalhe-valor/detalhe-valor.component';
import { ReceitaProjetoComponent } from '../receita-projeto/receita-projeto.component';
import { ImageTesteComponent } from '../image-teste/image-teste.component';
import { FileUploadNg2FileUploadComponent } from '../file-upload-ng2-file-upload/file-upload-ng2-file-upload.component';
import { FileUploadNgxFileDropComponent } from '../file-upload-ngx-file-drop/file-upload-ngx-file-drop.component';
import { DialogComponent } from '../upload/dialog/dialog.component';
import { Angular2ImageUploadComponent } from '../angular2-image-upload/angular2-image-upload.component';
import { ListaProjetoValorComponent } from '../lista-projeto-valor/lista-projeto-valor.component';
import { DetalheProjetoValorComponent } from '../detalhe-projeto-valor/detalhe-projeto-valor.component';
import { EdicaoItemValidacaoComponent } from '../edicao-item-validacao/edicao-item-validacao.component';
import { ListaPaginaValidacaoPorProjetoComponent } from '../lista-pagina-validacao-por-projeto/lista-pagina-validacao-por-projeto.component';
import { EdicaoPaginaValidacaoComponent } from '../edicao-pagina-validacao/edicao-pagina-validacao.component';
import { ProjetoAplicacaoComponent } from '../projeto-aplicacao/projeto-aplicacao.component';
import { ResumoAplicacaoComponent } from '../resumo-aplicacao/resumo-aplicacao.component';
import { ListaCampanhaPorPaginaComponent } from '../lista-campanha-por-pagina/lista-campanha-por-pagina.component';
import { EntidadeResumoComponent } from '../entidade-resumo/entidade-resumo.component';
import { PalavraChaveRaizComponent } from '../palavra-chave-raiz/palavra-chave-raiz.component';
import { PalavraChaveRaizDetalheComponent } from '../palavra-chave-raiz-detalhe/palavra-chave-raiz-detalhe.component';
import { MelhoresPalavrasListaGeralComponent } from '../melhores-palavras-lista-geral/melhores-palavras-lista-geral.component';
import { PalavraChaveRaizDetalheCompletaComponent } from '../palavra-chave-raiz-detalhe-completa/palavra-chave-raiz-detalhe-completa.component';
import { EtapaProjetoEditaComponent } from '../etapa-projeto-edita/etapa-projeto-edita.component';
import { EtapaProjetoListaComponent } from '../etapa-projeto-lista/etapa-projeto-lista.component';
import { ProcessoNegocioEditaComponent } from '../processo-negocio-edita/processo-negocio-edita.component';
import { ProcessoNegocioListaComponent } from '../processo-negocio-lista/processo-negocio-lista.component';
import { NavegadorPalavrasComponent } from '../navegador-palavras/navegador-palavras.component';
import { TipoComponenteWebListaComponent } from '../tipo-componente-web-lista/tipo-componente-web-lista.component';
import { TipoComponenteWebEditaComponent } from '../tipo-componente-web-edita/tipo-componente-web-edita.component';
import { TipoExperienciaListaComponent } from '../tipo-experiencia-lista/tipo-experiencia-lista.component';
import { TipoExperienciaEditaComponent } from '../tipo-experiencia-edita/tipo-experiencia-edita.component';
import { TelaDetalheComponent } from '../tela-detalhe/tela-detalhe.component';
import { RespostaMercadoEditaComponent } from '../resposta-mercado-edita/resposta-mercado-edita.component';
import { RespostaMercadoListaComponent } from '../resposta-mercado-lista/resposta-mercado-lista.component';
import { ProjetoEtapaValorComponent } from '../projeto-etapa-valor/projeto-etapa-valor.component';
import { ProjetoValorTelaComponent } from '../projeto-valor-tela/projeto-valor-tela.component';
import { ProjetoConceitoProdutoComponent } from '../projeto-conceito-produto/projeto-conceito-produto.component';
import { ProjetosFaseAnuncioComponent } from '../projetos-fase-anuncio/projetos-fase-anuncio.component';
import { ProjetoGerenciaAnuncioComponent } from '../projeto-gerencia-anuncio/projeto-gerencia-anuncio.component';
import { PaginaValidacaoGerenciadorComponent } from '../pagina-validacao-gerenciador/pagina-validacao-gerenciador.component';
import { ItemValidacaoGerenciadorComponent } from '../item-validacao-gerenciador/item-validacao-gerenciador.component';
import { ProjetoFaseValidacaoComponent } from '../projeto-fase-validacao/projeto-fase-validacao.component';
import { TelaAppDetalheComponent } from '../tela-app-detalhe/tela-app-detalhe.component';
import { ListaCampanhaPorProjetoComponent } from '../lista-campanha-por-projeto/lista-campanha-por-projeto.component';
import { ListaCampanhaConceitoAtivoPorProjetoComponent } from '../lista-campanha-conceito-ativo-por-projeto/lista-campanha-conceito-ativo-por-projeto.component';
import { DetalheCampanhaComponent } from '../detalhe-campanha/detalhe-campanha.component';
import { ListaSetupCampanhaComponent } from '../lista-setup-campanha/lista-setup-campanha.component';
import { DetalheCampanhaParaFechamentoComponent } from '../detalhe-campanha-para-fechamento/detalhe-campanha-para-fechamento.component';
import { ListaCadProjetoComponent } from '../lista-cad-projeto/lista-cad-projeto.component';
import { MelhoresPalavrasBaixoCustoComponent } from '../melhores-palavras-baixo-custo/melhores-palavras-baixo-custo.component';
import { PlanejamentoExecucaoComponent } from '../planejamento-execucao/planejamento-execucao.component';
import { ExecucaoDiariaComponent } from '../execucao-diaria/execucao-diaria.component';
import { ListaItemValidacaoProjetoComponent } from '../lista-item-validacao-projeto/lista-item-validacao-projeto.component';
import { ListaPaletaCorComponent } from '../lista-paleta-cor/lista-paleta-cor.component';
import { ProjetoPalavraChaveComponent } from '../projeto-palavra-chave/projeto-palavra-chave.component';
import { ProjetoPalavraChaveDetalheComponent } from '../projeto-palavra-chave-detalhe/projeto-palavra-chave-detalhe.component';
import { ProjetoFaseInstalacaoComponent } from '../projeto-fase-instalacao/projeto-fase-instalacao.component';
import { PaginaInstalacaoGerenciadorComponent } from '../pagina-instalacao-gerenciador/pagina-instalacao-gerenciador.component';
import { EdicaoPaginaInstalacaoAppComponent } from '../edicao-pagina-instalacao-app/edicao-pagina-instalacao-app.component';
import { VisitantesPorPaginaValidacaoWebComponent } from '../visitantes-por-pagina-validacao-web/visitantes-por-pagina-validacao-web.component';
import { VisitantesPorPaginaInstalacaoAppComponent } from '../visitantes-por-pagina-instalacao-app/visitantes-por-pagina-instalacao-app.component';
import { AnuncioAppGerenciadorComponent } from '../anuncio-app-gerenciador/anuncio-app-gerenciador.component';
import { VersaoAppListaComponent } from '../versao-app-lista/versao-app-lista.component';
import { VisitantePorVersaoAppComponent } from '../visitante-por-versao-app/visitante-por-versao-app.component';
import { PresencaLojaListaComponent } from '../presenca-loja-lista/presenca-loja-lista.component';
import { PresencaLojaDetalheComponent } from '../presenca-loja-detalhe/presenca-loja-detalhe.component';
import { DisplayPresencaLojaComponent } from '../display-presenca-loja/display-presenca-loja.component';
import { VersaoAppDetalheComponent } from '../versao-app-detalhe/versao-app-detalhe.component';
import { ListaItemValorPorProjetoComponent } from '../lista-item-valor-por-projeto/lista-item-valor-por-projeto.component';
import { ListaProjetoFinanceiroGeralComponent } from '../lista-projeto-financeiro-geral/lista-projeto-financeiro-geral.component';
import { CustoAnoComponent } from '../custo-ano/custo-ano.component';


export const routes : Routes = [
    { path: 'home' , component: HomeComponent },
    { path: 'imagem' , component: ImageTesteComponent},
    { path: 'arquivos' , component: FileUploadNgxFileDropComponent},
    { path: 'upload' , component: DialogComponent},
    { path: 'imagemUpload', component: Angular2ImageUploadComponent},

    { path: 'receita/:id' , component: ReceitaProjetoComponent },
    { path: 'dorGanhoCanvas/:id' , component: CanvasDorGanhoComponent },
    { path: 'valorCanvas/:id' , component: CanvasPropostaValorComponent },
    { path: 'mvpCanvas/:id' , component: CanvasMvpComponent },
    { path: 'projetoCanvas/:id' , component: CanvasProjetoComponent },
    { path: 'detalheValorCanvas/:id' , component: DetalheValorComponent },
    { path: 'projetos' , component: ProjetosComponent},
    { path: 'propostaValor' , component: PropostaValorComponent},
    { path: 'projetos/insere' , component: ProjetoCriaComponent},

    { path: 'projetosValor' , component: ListaProjetoValorComponent},
    { path: 'projetosValor/:id' , component: DetalheProjetoValorComponent},

    { path: 'adicionaItemValidacaoPorItem/:id' , component: EdicaoItemValidacaoComponent} ,
    { path: 'editaItemValidacao/:id' , component : EdicaoItemValidacaoComponent },

    { path: 'paginaValidacaoPorProjeto/:id' , component: ListaPaginaValidacaoPorProjetoComponent },
    { path: 'editaPaginaValidacaoWeb/:id' , component: EdicaoPaginaValidacaoComponent},
    { path: 'editaPaginaInstalacaoApp/:id' , component: EdicaoPaginaInstalacaoAppComponent},
    { path: 'adicionaPaginaValidacaoWebParaProjeto/:id', component: EdicaoPaginaValidacaoComponent  },

    { path: 'projetoAplicacao' , component: ProjetoAplicacaoComponent },
    { path: 'projetoAplicacao/:id' , component: ResumoAplicacaoComponent },

    { path: 'listaCampanhaPorPaginaValidacao/:id' , component: ListaCampanhaPorPaginaComponent},

    { path: 'entidadeResumo/:id' , component : EntidadeResumoComponent },

    { path: 'palavraChaveRaiz' , component : PalavraChaveRaizComponent },
    { path: 'palavraChaveRaiz/:id' , component : NavegadorPalavrasComponent }, 
    { path: 'palavraChaveRaizCompleta/:id' , component : PalavraChaveRaizDetalheCompletaComponent },
    //{ path: 'palavraMelhores' , component: MelhoresPalavrasListaGeralComponent },
    { path: 'palavraMelhores' , component: NavegadorPalavrasComponent },

    { path: 'etapaProjeto' , component: EtapaProjetoListaComponent },
    { path: 'etapaProjeto/:id' , component: EtapaProjetoEditaComponent },
    
    { path: 'processoNegocio' , component: ProcessoNegocioListaComponent },
    { path: 'processoNegocio/:id' , component: ProcessoNegocioEditaComponent },

    { path: 'tipoComponenteWeb' , component: TipoComponenteWebListaComponent },
    { path: 'tipoComponenteWeb/:id' , component: TipoComponenteWebEditaComponent },

    { path: 'tipoExperiencia' , component: TipoExperienciaListaComponent },
    { path: 'tipoExperiencia/:id' , component: TipoExperienciaEditaComponent },

    { path: 'respostaMercado' , component: RespostaMercadoListaComponent },
    { path: 'respostaMercado/:id' , component: RespostaMercadoEditaComponent },

    { path: 'telaWebResumo/:id' , component: TelaDetalheComponent },


    { path: 'projetosFaseValor' , component: ProjetoEtapaValorComponent},
    { path: 'projetosFaseAnuncio' , component: ProjetosFaseAnuncioComponent},
     

    { path: 'projetoConceitoProduto/:id' , component: ProjetoConceitoProdutoComponent},
    { path: 'projetoValorTela/:id' , component: ProjetoValorTelaComponent},

    { path: 'projetoGerenciaAnuncio/:id', component: ProjetoGerenciaAnuncioComponent},
    { path: 'paginaValidacaoGerenciador/:id', component: PaginaValidacaoGerenciadorComponent},
    { path: 'paginaInstalacaoGerenciador/:id', component: PaginaInstalacaoGerenciadorComponent},

    { path: 'itemValidacaoGerenciador/:id' , component : ItemValidacaoGerenciadorComponent },
    { path: 'itemValidacaoProjeto/:id' , component : ListaItemValidacaoProjetoComponent },

    { path: 'projetosFaseValidacao' , component: ProjetoFaseValidacaoComponent },
    { path: 'projetosFaseInstalacao' , component: ProjetoFaseInstalacaoComponent },

    { path: 'detalheTelaApp/:id' , component: TelaAppDetalheComponent },

    { path: 'listaCampanhaPorProjeto/:id' , component: ListaCampanhaPorProjetoComponent},
    { path: 'listaCampanhaConceitoAtivoPorProjeto/:id' , component: ListaCampanhaConceitoAtivoPorProjetoComponent},

    { path: 'detalheCampanha/:id' , component: DetalheCampanhaComponent },

    { path: 'listaSetupCampanha', component: ListaSetupCampanhaComponent },

    { path: 'detalheCampanhaParaFechamento/:id' , component: DetalheCampanhaParaFechamentoComponent }, 

    { path: 'projetosCadastro' , component: ListaCadProjetoComponent },

    { path : 'melhoresPalavrasBaixoCusto' , component: NavegadorPalavrasComponent},

    { path : 'planejamentoExecucao/:id' , component: PlanejamentoExecucaoComponent },

    { path : 'execucaoDiaria/:id' , component: ExecucaoDiariaComponent },

    { path : 'listaPaletaCor' , component : ListaPaletaCorComponent} ,

    { path: 'projetoPalavraChave' , component : ProjetoPalavraChaveComponent },
    { path: 'projetoPalavraChave/:id' , component : ProjetoPalavraChaveDetalheComponent },

    { path: 'visitantesPorPaginaInstalacao/:id' , component: VisitantesPorPaginaInstalacaoAppComponent } ,
    { path: 'visitantesPorPaginaValidacao/:id' , component: VisitantesPorPaginaValidacaoWebComponent } ,

    { path: 'anuncioAppGerenciador/:id' , component: AnuncioAppGerenciadorComponent },

    { path : 'versaoAppLista/:id' , component : VersaoAppListaComponent },
    { path: 'visitantePorVersaoApp/:id' , component: VisitantePorVersaoAppComponent},

  
    { path: 'presencaLojaDetalhe/:id' , component : DisplayPresencaLojaComponent },
    { path: 'presencaLojaProjeto/:id' , component : PresencaLojaListaComponent },

    { path: 'versaoAppDetalhe/:id' , component : VersaoAppDetalheComponent },

    { path: 'listaItemValorProjeto/:id' , component : ListaItemValorPorProjetoComponent },

    { path: 'financeiroGeralProjeto' , component : ListaProjetoFinanceiroGeralComponent },
    { path: 'custoAno/:id' , component: CustoAnoComponent },

    { path: '',          redirectTo: 'home', pathMatch: 'full' }
]
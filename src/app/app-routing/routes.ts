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

    { path: 'itemValidacaoGerenciador/:id' , component : ItemValidacaoGerenciadorComponent },

    { path: 'projetosFaseValidacao' , component: ProjetoFaseValidacaoComponent },
    { path: 'detalheTelaApp/:id' , component: TelaAppDetalheComponent },

    { path: 'listaCampanhaPorProjeto/:id' , component: ListaCampanhaPorProjetoComponent},
    { path: 'listaCampanhaConceitoAtivoPorProjeto/:id' , component: ListaCampanhaConceitoAtivoPorProjetoComponent},

    { path: 'detalheCampanha/:id' , component: DetalheCampanhaComponent },

    { path: 'listaSetupCampanha', component: ListaSetupCampanhaComponent },

    { path: 'detalheCampanhaParaFechamento/:id' , component: DetalheCampanhaParaFechamentoComponent }, 

    { path: 'projetosCadastro' , component: ListaCadProjetoComponent },

    { path : 'melhoresPalavrasBaixoCusto' , component: NavegadorPalavrasComponent},

    { path : 'planejamentoExecucao' , component: PlanejamentoExecucaoComponent },

    { path : 'execucaoDiaria' , component: ExecucaoDiariaComponent },

    { path: '',          redirectTo: 'home', pathMatch: 'full' }
]
/* tslint:disable */
import {
  ConceitoProduto,
  ProjetoMySql,
  Visitante,
  CampanhaAds,
  TelaApp,
  RespostaVersao,
  ClienteExperimental,
  DispositivoUsuario,
  ValorVersao,
  ValorEtapaFunilVersaoApp,
  VersaoTelaApp
} from '../index';

declare var Object: any;
export interface VersaoAppInterface {
  "nome"?: string;
  "objetivo"?: string;
  "codigoVersao"?: string;
  "permiteEdicao"?: number;
  "pacoteApp"?: string;
  "analise"?: string;
  "id"?: number;
  "conceitoProdutoId"?: number;
  "projetoMySqlId"?: number;
  "telaAppInicialId"?: number;
  conceitoProduto?: ConceitoProduto;
  projetoMySql?: ProjetoMySql;
  visitantes?: Visitante[];
  campanhaAds?: CampanhaAds[];
  telaAppInicial?: TelaApp;
  respostaVersaos?: RespostaVersao[];
  clienteExperimentals?: ClienteExperimental[];
  dispositivoUsuarios?: DispositivoUsuario[];
  valorVersaos?: ValorVersao[];
  valorEtapaFunilVersaoApps?: ValorEtapaFunilVersaoApp[];
  versaoTelaApps?: VersaoTelaApp[];
}

export class VersaoApp implements VersaoAppInterface {
  "nome": string;
  "objetivo": string;
  "codigoVersao": string;
  "permiteEdicao": number;
  "pacoteApp": string;
  "analise": string;
  "id": number;
  "conceitoProdutoId": number;
  "projetoMySqlId": number;
  "telaAppInicialId": number;
  conceitoProduto: ConceitoProduto;
  projetoMySql: ProjetoMySql;
  visitantes: Visitante[];
  campanhaAds: CampanhaAds[];
  telaAppInicial: TelaApp;
  respostaVersaos: RespostaVersao[];
  clienteExperimentals: ClienteExperimental[];
  dispositivoUsuarios: DispositivoUsuario[];
  valorVersaos: ValorVersao[];
  valorEtapaFunilVersaoApps: ValorEtapaFunilVersaoApp[];
  versaoTelaApps: VersaoTelaApp[];
  constructor(data?: VersaoAppInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `VersaoApp`.
   */
  public static getModelName() {
    return "VersaoApp";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of VersaoApp for dynamic purposes.
  **/
  public static factory(data: VersaoAppInterface): VersaoApp{
    return new VersaoApp(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'VersaoApp',
      plural: 'VersaoApps',
      path: 'VersaoApps',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "objetivo": {
          name: 'objetivo',
          type: 'string'
        },
        "codigoVersao": {
          name: 'codigoVersao',
          type: 'string'
        },
        "permiteEdicao": {
          name: 'permiteEdicao',
          type: 'number'
        },
        "pacoteApp": {
          name: 'pacoteApp',
          type: 'string'
        },
        "analise": {
          name: 'analise',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "conceitoProdutoId": {
          name: 'conceitoProdutoId',
          type: 'number'
        },
        "projetoMySqlId": {
          name: 'projetoMySqlId',
          type: 'number'
        },
        "telaAppInicialId": {
          name: 'telaAppInicialId',
          type: 'number'
        },
      },
      relations: {
        conceitoProduto: {
          name: 'conceitoProduto',
          type: 'ConceitoProduto',
          model: 'ConceitoProduto',
          relationType: 'belongsTo',
                  keyFrom: 'conceitoProdutoId',
          keyTo: 'id'
        },
        projetoMySql: {
          name: 'projetoMySql',
          type: 'ProjetoMySql',
          model: 'ProjetoMySql',
          relationType: 'belongsTo',
                  keyFrom: 'projetoMySqlId',
          keyTo: 'id'
        },
        visitantes: {
          name: 'visitantes',
          type: 'Visitante[]',
          model: 'Visitante',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'versaoAppId'
        },
        campanhaAds: {
          name: 'campanhaAds',
          type: 'CampanhaAds[]',
          model: 'CampanhaAds',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'versaoAppId'
        },
        telaAppInicial: {
          name: 'telaAppInicial',
          type: 'TelaApp',
          model: 'TelaApp',
          relationType: 'belongsTo',
                  keyFrom: 'telaAppInicialId',
          keyTo: 'id'
        },
        respostaVersaos: {
          name: 'respostaVersaos',
          type: 'RespostaVersao[]',
          model: 'RespostaVersao',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'versaoAppId'
        },
        clienteExperimentals: {
          name: 'clienteExperimentals',
          type: 'ClienteExperimental[]',
          model: 'ClienteExperimental',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'versaoAppId'
        },
        dispositivoUsuarios: {
          name: 'dispositivoUsuarios',
          type: 'DispositivoUsuario[]',
          model: 'DispositivoUsuario',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'versaoAppId'
        },
        valorVersaos: {
          name: 'valorVersaos',
          type: 'ValorVersao[]',
          model: 'ValorVersao',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'versaoAppId'
        },
        valorEtapaFunilVersaoApps: {
          name: 'valorEtapaFunilVersaoApps',
          type: 'ValorEtapaFunilVersaoApp[]',
          model: 'ValorEtapaFunilVersaoApp',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'versaoAppId'
        },
        versaoTelaApps: {
          name: 'versaoTelaApps',
          type: 'VersaoTelaApp[]',
          model: 'VersaoTelaApp',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'versaoAppId'
        },
      }
    }
  }
}

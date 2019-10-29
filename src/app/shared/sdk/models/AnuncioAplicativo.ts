/* tslint:disable */
import {
  GrupoAnuncioAplicativo,
  ClienteExperimental,
  AnuncioAplicacaoResultado
} from '../index';

declare var Object: any;
export interface AnuncioAplicativoInterface {
  "titulo1"?: string;
  "titulo2"?: string;
  "titulo3"?: string;
  "titulo4"?: string;
  "pacoteApp"?: string;
  "permiteEdicao"?: number;
  "mediaCtr"?: number;
  "mediaConversao"?: number;
  "mediaCustoConversao"?: number;
  "mediaInstalacao"?: number;
  "mediaCustoInstalacao"?: number;
  "mediaTaxaInstalacao"?: number;
  "mediaImpressao"?: number;
  "mediaClique"?: number;
  "quantidadeCampanha"?: number;
  "mediaCpc"?: number;
  "id"?: number;
  "projetoMySqlId"?: number;
  "conceitoProdutoId"?: number;
  grupoAnuncioAplicativos?: GrupoAnuncioAplicativo[];
  clienteExperimentals?: ClienteExperimental[];
  anuncioAplicacaoResultados?: AnuncioAplicacaoResultado[];
}

export class AnuncioAplicativo implements AnuncioAplicativoInterface {
  "titulo1": string;
  "titulo2": string;
  "titulo3": string;
  "titulo4": string;
  "pacoteApp": string;
  "permiteEdicao": number;
  "mediaCtr": number;
  "mediaConversao": number;
  "mediaCustoConversao": number;
  "mediaInstalacao": number;
  "mediaCustoInstalacao": number;
  "mediaTaxaInstalacao": number;
  "mediaImpressao": number;
  "mediaClique": number;
  "quantidadeCampanha": number;
  "mediaCpc": number;
  "id": number;
  "projetoMySqlId": number;
  "conceitoProdutoId": number;
  grupoAnuncioAplicativos: GrupoAnuncioAplicativo[];
  clienteExperimentals: ClienteExperimental[];
  anuncioAplicacaoResultados: AnuncioAplicacaoResultado[];
  constructor(data?: AnuncioAplicativoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `AnuncioAplicativo`.
   */
  public static getModelName() {
    return "AnuncioAplicativo";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of AnuncioAplicativo for dynamic purposes.
  **/
  public static factory(data: AnuncioAplicativoInterface): AnuncioAplicativo{
    return new AnuncioAplicativo(data);
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
      name: 'AnuncioAplicativo',
      plural: 'AnuncioAplicativos',
      path: 'AnuncioAplicativos',
      idName: 'id',
      properties: {
        "titulo1": {
          name: 'titulo1',
          type: 'string'
        },
        "titulo2": {
          name: 'titulo2',
          type: 'string'
        },
        "titulo3": {
          name: 'titulo3',
          type: 'string'
        },
        "titulo4": {
          name: 'titulo4',
          type: 'string'
        },
        "pacoteApp": {
          name: 'pacoteApp',
          type: 'string'
        },
        "permiteEdicao": {
          name: 'permiteEdicao',
          type: 'number'
        },
        "mediaCtr": {
          name: 'mediaCtr',
          type: 'number'
        },
        "mediaConversao": {
          name: 'mediaConversao',
          type: 'number'
        },
        "mediaCustoConversao": {
          name: 'mediaCustoConversao',
          type: 'number'
        },
        "mediaInstalacao": {
          name: 'mediaInstalacao',
          type: 'number'
        },
        "mediaCustoInstalacao": {
          name: 'mediaCustoInstalacao',
          type: 'number'
        },
        "mediaTaxaInstalacao": {
          name: 'mediaTaxaInstalacao',
          type: 'number'
        },
        "mediaImpressao": {
          name: 'mediaImpressao',
          type: 'number'
        },
        "mediaClique": {
          name: 'mediaClique',
          type: 'number'
        },
        "quantidadeCampanha": {
          name: 'quantidadeCampanha',
          type: 'number'
        },
        "mediaCpc": {
          name: 'mediaCpc',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "projetoMySqlId": {
          name: 'projetoMySqlId',
          type: 'number'
        },
        "conceitoProdutoId": {
          name: 'conceitoProdutoId',
          type: 'number'
        },
      },
      relations: {
        grupoAnuncioAplicativos: {
          name: 'grupoAnuncioAplicativos',
          type: 'GrupoAnuncioAplicativo[]',
          model: 'GrupoAnuncioAplicativo',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'anuncioAplicativoId'
        },
        clienteExperimentals: {
          name: 'clienteExperimentals',
          type: 'ClienteExperimental[]',
          model: 'ClienteExperimental',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'anuncioAplicativoId'
        },
        anuncioAplicacaoResultados: {
          name: 'anuncioAplicacaoResultados',
          type: 'AnuncioAplicacaoResultado[]',
          model: 'AnuncioAplicacaoResultado',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'anuncioAplicativoId'
        },
      }
    }
  }
}

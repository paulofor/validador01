/* tslint:disable */
import {
  AnuncioAds,
  ModeloCampanhaAds
} from '../index';

declare var Object: any;
export interface CampanhaAdsInterface {
  "id"?: number;
  "idAds"?: string;
  "nome"?: string;
  "dataInicial"?: Date;
  "dataFinal"?: Date;
  "quantidadeImpressao"?: number;
  "quantidadeClique"?: number;
  "quantidadeConversao"?: number;
  "orcamentoDia"?: number;
  "orcamentoTotalPlanejado"?: number;
  "orcamentoTotalExecutado"?: number;
  "paginaValidacaoWebId"?: number;
  "modeloCampanhaAdsId"?: number;
  anuncioAds?: AnuncioAds[];
  modeloCampanhaAds?: ModeloCampanhaAds;
}

export class CampanhaAds implements CampanhaAdsInterface {
  "id": number;
  "idAds": string;
  "nome": string;
  "dataInicial": Date;
  "dataFinal": Date;
  "quantidadeImpressao": number;
  "quantidadeClique": number;
  "quantidadeConversao": number;
  "orcamentoDia": number;
  "orcamentoTotalPlanejado": number;
  "orcamentoTotalExecutado": number;
  "paginaValidacaoWebId": number;
  "modeloCampanhaAdsId": number;
  anuncioAds: AnuncioAds[];
  modeloCampanhaAds: ModeloCampanhaAds;
  constructor(data?: CampanhaAdsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `CampanhaAds`.
   */
  public static getModelName() {
    return "CampanhaAds";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of CampanhaAds for dynamic purposes.
  **/
  public static factory(data: CampanhaAdsInterface): CampanhaAds{
    return new CampanhaAds(data);
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
      name: 'CampanhaAds',
      plural: 'CampanhaAds',
      path: 'CampanhaAds',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "idAds": {
          name: 'idAds',
          type: 'string'
        },
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "dataInicial": {
          name: 'dataInicial',
          type: 'Date'
        },
        "dataFinal": {
          name: 'dataFinal',
          type: 'Date'
        },
        "quantidadeImpressao": {
          name: 'quantidadeImpressao',
          type: 'number'
        },
        "quantidadeClique": {
          name: 'quantidadeClique',
          type: 'number'
        },
        "quantidadeConversao": {
          name: 'quantidadeConversao',
          type: 'number'
        },
        "orcamentoDia": {
          name: 'orcamentoDia',
          type: 'number'
        },
        "orcamentoTotalPlanejado": {
          name: 'orcamentoTotalPlanejado',
          type: 'number'
        },
        "orcamentoTotalExecutado": {
          name: 'orcamentoTotalExecutado',
          type: 'number'
        },
        "paginaValidacaoWebId": {
          name: 'paginaValidacaoWebId',
          type: 'number'
        },
        "modeloCampanhaAdsId": {
          name: 'modeloCampanhaAdsId',
          type: 'number'
        },
      },
      relations: {
        anuncioAds: {
          name: 'anuncioAds',
          type: 'AnuncioAds[]',
          model: 'AnuncioAds',
          relationType: 'hasMany',
          modelThrough: 'CampanhaAdsAnuncioAds',
          keyThrough: 'anuncioAdsId',
          keyFrom: 'id',
          keyTo: 'campanhaAdsId'
        },
        modeloCampanhaAds: {
          name: 'modeloCampanhaAds',
          type: 'ModeloCampanhaAds',
          model: 'ModeloCampanhaAds',
          relationType: 'belongsTo',
                  keyFrom: 'modeloCampanhaAdsId',
          keyTo: 'id'
        },
      }
    }
  }
}

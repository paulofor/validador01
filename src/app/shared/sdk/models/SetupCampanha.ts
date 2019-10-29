/* tslint:disable */
import {
  CampanhaAds
} from '../index';

declare var Object: any;
export interface SetupCampanhaInterface {
  "nome": string;
  "budgetDiario": number;
  "estrategia"?: string;
  "diaSemanaInicio"?: string;
  "diaSemanaFinal"?: string;
  "plataforma"?: string;
  "matchPalavra"?: string;
  "rotacaoAnuncio"?: string;
  "permiteEdicao"?: number;
  "maxCpcGrupoAnuncio"?: number;
  "custoTotal"?: number;
  "cliqueTotal"?: number;
  "tipoCampanha"?: string;
  "custoInstalacao"?: number;
  "totalInstalacao"?: number;
  "mediaCtr"?: number;
  "mediaConversao"?: number;
  "mediaCustoConversao"?: number;
  "mediaInstalacao"?: number;
  "mediaCustoInstalacao"?: number;
  "mediaTaxaInstalacao"?: number;
  "mediaImpressao"?: number;
  "mediaClique"?: number;
  "quantidadeCampanha"?: number;
  "id"?: number;
  campanhaAds?: CampanhaAds[];
}

export class SetupCampanha implements SetupCampanhaInterface {
  "nome": string;
  "budgetDiario": number;
  "estrategia": string;
  "diaSemanaInicio": string;
  "diaSemanaFinal": string;
  "plataforma": string;
  "matchPalavra": string;
  "rotacaoAnuncio": string;
  "permiteEdicao": number;
  "maxCpcGrupoAnuncio": number;
  "custoTotal": number;
  "cliqueTotal": number;
  "tipoCampanha": string;
  "custoInstalacao": number;
  "totalInstalacao": number;
  "mediaCtr": number;
  "mediaConversao": number;
  "mediaCustoConversao": number;
  "mediaInstalacao": number;
  "mediaCustoInstalacao": number;
  "mediaTaxaInstalacao": number;
  "mediaImpressao": number;
  "mediaClique": number;
  "quantidadeCampanha": number;
  "id": number;
  campanhaAds: CampanhaAds[];
  constructor(data?: SetupCampanhaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `SetupCampanha`.
   */
  public static getModelName() {
    return "SetupCampanha";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of SetupCampanha for dynamic purposes.
  **/
  public static factory(data: SetupCampanhaInterface): SetupCampanha{
    return new SetupCampanha(data);
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
      name: 'SetupCampanha',
      plural: 'SetupCampanhas',
      path: 'SetupCampanhas',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "budgetDiario": {
          name: 'budgetDiario',
          type: 'number'
        },
        "estrategia": {
          name: 'estrategia',
          type: 'string'
        },
        "diaSemanaInicio": {
          name: 'diaSemanaInicio',
          type: 'string'
        },
        "diaSemanaFinal": {
          name: 'diaSemanaFinal',
          type: 'string'
        },
        "plataforma": {
          name: 'plataforma',
          type: 'string'
        },
        "matchPalavra": {
          name: 'matchPalavra',
          type: 'string'
        },
        "rotacaoAnuncio": {
          name: 'rotacaoAnuncio',
          type: 'string'
        },
        "permiteEdicao": {
          name: 'permiteEdicao',
          type: 'number'
        },
        "maxCpcGrupoAnuncio": {
          name: 'maxCpcGrupoAnuncio',
          type: 'number'
        },
        "custoTotal": {
          name: 'custoTotal',
          type: 'number'
        },
        "cliqueTotal": {
          name: 'cliqueTotal',
          type: 'number'
        },
        "tipoCampanha": {
          name: 'tipoCampanha',
          type: 'string'
        },
        "custoInstalacao": {
          name: 'custoInstalacao',
          type: 'number'
        },
        "totalInstalacao": {
          name: 'totalInstalacao',
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
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        campanhaAds: {
          name: 'campanhaAds',
          type: 'CampanhaAds[]',
          model: 'CampanhaAds',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'setupCampanhaId'
        },
      }
    }
  }
}

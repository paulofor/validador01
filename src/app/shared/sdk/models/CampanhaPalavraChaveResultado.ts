/* tslint:disable */
import {
  PalavraChaveAds,
  CampanhaAds
} from '../index';

declare var Object: any;
export interface CampanhaPalavraChaveResultadoInterface {
  "idAds"?: string;
  "quantidadeImpressao"?: number;
  "quantidadeClique"?: number;
  "custo"?: number;
  "id"?: number;
  "palavraChaveAdsId"?: number;
  "campanhaAdsId"?: number;
  palavraChaveAds?: PalavraChaveAds;
  campanhaAds?: CampanhaAds;
}

export class CampanhaPalavraChaveResultado implements CampanhaPalavraChaveResultadoInterface {
  "idAds": string;
  "quantidadeImpressao": number;
  "quantidadeClique": number;
  "custo": number;
  "id": number;
  "palavraChaveAdsId": number;
  "campanhaAdsId": number;
  palavraChaveAds: PalavraChaveAds;
  campanhaAds: CampanhaAds;
  constructor(data?: CampanhaPalavraChaveResultadoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `CampanhaPalavraChaveResultado`.
   */
  public static getModelName() {
    return "CampanhaPalavraChaveResultado";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of CampanhaPalavraChaveResultado for dynamic purposes.
  **/
  public static factory(data: CampanhaPalavraChaveResultadoInterface): CampanhaPalavraChaveResultado{
    return new CampanhaPalavraChaveResultado(data);
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
      name: 'CampanhaPalavraChaveResultado',
      plural: 'CampanhaPalavraChaveResultados',
      path: 'CampanhaPalavraChaveResultados',
      idName: 'id',
      properties: {
        "idAds": {
          name: 'idAds',
          type: 'string'
        },
        "quantidadeImpressao": {
          name: 'quantidadeImpressao',
          type: 'number'
        },
        "quantidadeClique": {
          name: 'quantidadeClique',
          type: 'number'
        },
        "custo": {
          name: 'custo',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "palavraChaveAdsId": {
          name: 'palavraChaveAdsId',
          type: 'number'
        },
        "campanhaAdsId": {
          name: 'campanhaAdsId',
          type: 'number'
        },
      },
      relations: {
        palavraChaveAds: {
          name: 'palavraChaveAds',
          type: 'PalavraChaveAds',
          model: 'PalavraChaveAds',
          relationType: 'belongsTo',
                  keyFrom: 'palavraChaveAdsId',
          keyTo: 'id'
        },
        campanhaAds: {
          name: 'campanhaAds',
          type: 'CampanhaAds',
          model: 'CampanhaAds',
          relationType: 'belongsTo',
                  keyFrom: 'campanhaAdsId',
          keyTo: 'id'
        },
      }
    }
  }
}

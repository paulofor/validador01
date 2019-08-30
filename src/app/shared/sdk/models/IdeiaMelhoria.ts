/* tslint:disable */
import {
  ProjetoMySql,
  ConceitoProduto,
  CampanhaAds
} from '../index';

declare var Object: any;
export interface IdeiaMelhoriaInterface {
  "descricaoBreve"?: string;
  "descricaoCompleta"?: string;
  "dataCriacao"?: Date;
  "dataPlanejadaImplementacao"?: Date;
  "dataImplementacao"?: Date;
  "tempoConsumido"?: Date;
  "ativa"?: number;
  "id"?: number;
  "projetoMySqlId"?: number;
  "conceitoProdutoId"?: number;
  "campanhaAdsOrigemId"?: number;
  projetoMySql?: ProjetoMySql;
  conceitoProduto?: ConceitoProduto;
  campanhaAdsOrigem?: CampanhaAds;
}

export class IdeiaMelhoria implements IdeiaMelhoriaInterface {
  "descricaoBreve": string;
  "descricaoCompleta": string;
  "dataCriacao": Date;
  "dataPlanejadaImplementacao": Date;
  "dataImplementacao": Date;
  "tempoConsumido": Date;
  "ativa": number;
  "id": number;
  "projetoMySqlId": number;
  "conceitoProdutoId": number;
  "campanhaAdsOrigemId": number;
  projetoMySql: ProjetoMySql;
  conceitoProduto: ConceitoProduto;
  campanhaAdsOrigem: CampanhaAds;
  constructor(data?: IdeiaMelhoriaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `IdeiaMelhoria`.
   */
  public static getModelName() {
    return "IdeiaMelhoria";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of IdeiaMelhoria for dynamic purposes.
  **/
  public static factory(data: IdeiaMelhoriaInterface): IdeiaMelhoria{
    return new IdeiaMelhoria(data);
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
      name: 'IdeiaMelhoria',
      plural: 'IdeiaMelhoria',
      path: 'IdeiaMelhoria',
      idName: 'id',
      properties: {
        "descricaoBreve": {
          name: 'descricaoBreve',
          type: 'string'
        },
        "descricaoCompleta": {
          name: 'descricaoCompleta',
          type: 'string'
        },
        "dataCriacao": {
          name: 'dataCriacao',
          type: 'Date'
        },
        "dataPlanejadaImplementacao": {
          name: 'dataPlanejadaImplementacao',
          type: 'Date'
        },
        "dataImplementacao": {
          name: 'dataImplementacao',
          type: 'Date'
        },
        "tempoConsumido": {
          name: 'tempoConsumido',
          type: 'Date'
        },
        "ativa": {
          name: 'ativa',
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
        "campanhaAdsOrigemId": {
          name: 'campanhaAdsOrigemId',
          type: 'number'
        },
      },
      relations: {
        projetoMySql: {
          name: 'projetoMySql',
          type: 'ProjetoMySql',
          model: 'ProjetoMySql',
          relationType: 'belongsTo',
                  keyFrom: 'projetoMySqlId',
          keyTo: 'id'
        },
        conceitoProduto: {
          name: 'conceitoProduto',
          type: 'ConceitoProduto',
          model: 'ConceitoProduto',
          relationType: 'belongsTo',
                  keyFrom: 'conceitoProdutoId',
          keyTo: 'id'
        },
        campanhaAdsOrigem: {
          name: 'campanhaAdsOrigem',
          type: 'CampanhaAds',
          model: 'CampanhaAds',
          relationType: 'belongsTo',
                  keyFrom: 'campanhaAdsOrigemId',
          keyTo: 'id'
        },
      }
    }
  }
}

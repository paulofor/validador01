/* tslint:disable */
import {
  ValorVersao
} from '../index';

declare var Object: any;
export interface ItemValorAppInterface {
  "nome"?: string;
  "descricao"?: string;
  "dataCriacao"?: Date;
  "imagem1"?: string;
  "id"?: number;
  "projetoMySqlId"?: number;
  valorVersaos?: ValorVersao[];
}

export class ItemValorApp implements ItemValorAppInterface {
  "nome": string;
  "descricao": string;
  "dataCriacao": Date;
  "imagem1": string;
  "id": number;
  "projetoMySqlId": number;
  valorVersaos: ValorVersao[];
  constructor(data?: ItemValorAppInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ItemValorApp`.
   */
  public static getModelName() {
    return "ItemValorApp";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ItemValorApp for dynamic purposes.
  **/
  public static factory(data: ItemValorAppInterface): ItemValorApp{
    return new ItemValorApp(data);
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
      name: 'ItemValorApp',
      plural: 'ItemValorApps',
      path: 'ItemValorApps',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "descricao": {
          name: 'descricao',
          type: 'string'
        },
        "dataCriacao": {
          name: 'dataCriacao',
          type: 'Date'
        },
        "imagem1": {
          name: 'imagem1',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "projetoMySqlId": {
          name: 'projetoMySqlId',
          type: 'number'
        },
      },
      relations: {
        valorVersaos: {
          name: 'valorVersaos',
          type: 'ValorVersao[]',
          model: 'ValorVersao',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'itemValorAppId'
        },
      }
    }
  }
}

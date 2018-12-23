/* tslint:disable */
import {
  Entidade,
  ItemValidacaoPagina
} from '../index';

declare var Object: any;
export interface TelaAppInterface {
  "nome"?: string;
  "tipo"?: string;
  "id"?: number;
  "entidadeId"?: number;
  "conceitoProdutoId"?: number;
  entidades?: Entidade;
  itemValidacaoPaginas?: ItemValidacaoPagina[];
  entidade?: Entidade;
}

export class TelaApp implements TelaAppInterface {
  "nome": string;
  "tipo": string;
  "id": number;
  "entidadeId": number;
  "conceitoProdutoId": number;
  entidades: Entidade;
  itemValidacaoPaginas: ItemValidacaoPagina[];
  entidade: Entidade;
  constructor(data?: TelaAppInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TelaApp`.
   */
  public static getModelName() {
    return "TelaApp";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TelaApp for dynamic purposes.
  **/
  public static factory(data: TelaAppInterface): TelaApp{
    return new TelaApp(data);
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
      name: 'TelaApp',
      plural: 'TelaApps',
      path: 'TelaApps',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "tipo": {
          name: 'tipo',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "entidadeId": {
          name: 'entidadeId',
          type: 'number'
        },
        "conceitoProdutoId": {
          name: 'conceitoProdutoId',
          type: 'number'
        },
      },
      relations: {
        entidades: {
          name: 'entidades',
          type: 'Entidade',
          model: 'Entidade',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'telaAppId'
        },
        itemValidacaoPaginas: {
          name: 'itemValidacaoPaginas',
          type: 'ItemValidacaoPagina[]',
          model: 'ItemValidacaoPagina',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'telaAppId'
        },
        entidade: {
          name: 'entidade',
          type: 'Entidade',
          model: 'Entidade',
          relationType: 'belongsTo',
                  keyFrom: 'entidadeId',
          keyTo: 'id_entidade'
        },
      }
    }
  }
}

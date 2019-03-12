/* tslint:disable */
import {
  ItemValidacaoPagina,
  Entidade,
  ConceitoProduto,
  ModeloTelaApp
} from '../index';

declare var Object: any;
export interface TelaAppInterface {
  "nome"?: string;
  "tipo"?: string;
  "id"?: number;
  "entidadeId"?: number;
  "aplicacaoId"?: number;
  "conceitoProdutoId"?: number;
  "modeloTelaAppId"?: number;
  itemValidacaoPaginas?: ItemValidacaoPagina[];
  entidade?: Entidade;
  conceitoProduto?: ConceitoProduto;
  modeloTelaApp?: ModeloTelaApp;
}

export class TelaApp implements TelaAppInterface {
  "nome": string;
  "tipo": string;
  "id": number;
  "entidadeId": number;
  "aplicacaoId": number;
  "conceitoProdutoId": number;
  "modeloTelaAppId": number;
  itemValidacaoPaginas: ItemValidacaoPagina[];
  entidade: Entidade;
  conceitoProduto: ConceitoProduto;
  modeloTelaApp: ModeloTelaApp;
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
        "aplicacaoId": {
          name: 'aplicacaoId',
          type: 'number'
        },
        "conceitoProdutoId": {
          name: 'conceitoProdutoId',
          type: 'number'
        },
        "modeloTelaAppId": {
          name: 'modeloTelaAppId',
          type: 'number'
        },
      },
      relations: {
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
        conceitoProduto: {
          name: 'conceitoProduto',
          type: 'ConceitoProduto',
          model: 'ConceitoProduto',
          relationType: 'belongsTo',
                  keyFrom: 'conceitoProdutoId',
          keyTo: 'id'
        },
        modeloTelaApp: {
          name: 'modeloTelaApp',
          type: 'ModeloTelaApp',
          model: 'ModeloTelaApp',
          relationType: 'belongsTo',
                  keyFrom: 'modeloTelaAppId',
          keyTo: 'id'
        },
      }
    }
  }
}

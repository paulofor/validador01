/* tslint:disable */
import {
  ValorConceito
} from '../index';

declare var Object: any;
export interface ConceitoProdutoInterface {
  "descricao"?: string;
  "titulo"?: string;
  "id"?: number;
  "projetoMySqlId"?: number;
  valorConceitos?: ValorConceito[];
}

export class ConceitoProduto implements ConceitoProdutoInterface {
  "descricao": string;
  "titulo": string;
  "id": number;
  "projetoMySqlId": number;
  valorConceitos: ValorConceito[];
  constructor(data?: ConceitoProdutoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ConceitoProduto`.
   */
  public static getModelName() {
    return "ConceitoProduto";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ConceitoProduto for dynamic purposes.
  **/
  public static factory(data: ConceitoProdutoInterface): ConceitoProduto{
    return new ConceitoProduto(data);
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
      name: 'ConceitoProduto',
      plural: 'ConceitoProdutos',
      path: 'ConceitoProdutos',
      idName: 'id',
      properties: {
        "descricao": {
          name: 'descricao',
          type: 'string'
        },
        "titulo": {
          name: 'titulo',
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
        valorConceitos: {
          name: 'valorConceitos',
          type: 'ValorConceito[]',
          model: 'ValorConceito',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'conceitoProdutoId'
        },
      }
    }
  }
}

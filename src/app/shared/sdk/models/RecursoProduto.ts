/* tslint:disable */

declare var Object: any;
export interface RecursoProdutoInterface {
  "nome": string;
  "id"?: number;
}

export class RecursoProduto implements RecursoProdutoInterface {
  "nome": string;
  "id": number;
  constructor(data?: RecursoProdutoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `RecursoProduto`.
   */
  public static getModelName() {
    return "RecursoProduto";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of RecursoProduto for dynamic purposes.
  **/
  public static factory(data: RecursoProdutoInterface): RecursoProduto{
    return new RecursoProduto(data);
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
      name: 'RecursoProduto',
      plural: 'RecursoProdutos',
      path: 'RecursoProdutos',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}

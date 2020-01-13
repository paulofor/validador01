/* tslint:disable */

declare var Object: any;
export interface IndicadorProdutoInterface {
  "nome"?: string;
  "descricao"?: string;
  "formula"?: string;
  "id"?: number;
}

export class IndicadorProduto implements IndicadorProdutoInterface {
  "nome": string;
  "descricao": string;
  "formula": string;
  "id": number;
  constructor(data?: IndicadorProdutoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `IndicadorProduto`.
   */
  public static getModelName() {
    return "IndicadorProduto";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of IndicadorProduto for dynamic purposes.
  **/
  public static factory(data: IndicadorProdutoInterface): IndicadorProduto{
    return new IndicadorProduto(data);
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
      name: 'IndicadorProduto',
      plural: 'IndicadorProdutos',
      path: 'IndicadorProdutos',
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
        "formula": {
          name: 'formula',
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

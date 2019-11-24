/* tslint:disable */
import {
  LojaVirtual
} from '../index';

declare var Object: any;
export interface ContagemProdutoInterface {
  "id"?: number;
  "quantidade"?: number;
  "data"?: Date;
  "percentualDiferenca"?: number;
  "possibilidadeErro"?: number;
  "idNaturezaProduto"?: number;
  "id_loja_virtual_ra"?: number;
  lojaVirtual?: LojaVirtual;
}

export class ContagemProduto implements ContagemProdutoInterface {
  "id": number;
  "quantidade": number;
  "data": Date;
  "percentualDiferenca": number;
  "possibilidadeErro": number;
  "idNaturezaProduto": number;
  "id_loja_virtual_ra": number;
  lojaVirtual: LojaVirtual;
  constructor(data?: ContagemProdutoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ContagemProduto`.
   */
  public static getModelName() {
    return "ContagemProduto";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ContagemProduto for dynamic purposes.
  **/
  public static factory(data: ContagemProdutoInterface): ContagemProduto{
    return new ContagemProduto(data);
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
      name: 'ContagemProduto',
      plural: 'ContagemProdutos',
      path: 'ContagemProdutos',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "quantidade": {
          name: 'quantidade',
          type: 'number'
        },
        "data": {
          name: 'data',
          type: 'Date'
        },
        "percentualDiferenca": {
          name: 'percentualDiferenca',
          type: 'number'
        },
        "possibilidadeErro": {
          name: 'possibilidadeErro',
          type: 'number'
        },
        "idNaturezaProduto": {
          name: 'idNaturezaProduto',
          type: 'number'
        },
        "id_loja_virtual_ra": {
          name: 'id_loja_virtual_ra',
          type: 'number'
        },
      },
      relations: {
        lojaVirtual: {
          name: 'lojaVirtual',
          type: 'LojaVirtual',
          model: 'LojaVirtual',
          relationType: 'belongsTo',
                  keyFrom: 'id_loja_virtual_ra',
          keyTo: 'id'
        },
      }
    }
  }
}

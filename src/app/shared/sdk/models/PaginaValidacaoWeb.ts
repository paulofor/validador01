/* tslint:disable */
import {
  ItemValidacaoPagina
} from '../index';

declare var Object: any;
export interface PaginaValidacaoWebInterface {
  "id"?: number;
  "nome"?: string;
  itemValidacaoPaginas?: ItemValidacaoPagina[];
}

export class PaginaValidacaoWeb implements PaginaValidacaoWebInterface {
  "id": number;
  "nome": string;
  itemValidacaoPaginas: ItemValidacaoPagina[];
  constructor(data?: PaginaValidacaoWebInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PaginaValidacaoWeb`.
   */
  public static getModelName() {
    return "PaginaValidacaoWeb";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PaginaValidacaoWeb for dynamic purposes.
  **/
  public static factory(data: PaginaValidacaoWebInterface): PaginaValidacaoWeb{
    return new PaginaValidacaoWeb(data);
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
      name: 'PaginaValidacaoWeb',
      plural: 'PaginaValidacaoWebs',
      path: 'PaginaValidacaoWebs',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "nome": {
          name: 'nome',
          type: 'string'
        },
      },
      relations: {
        itemValidacaoPaginas: {
          name: 'itemValidacaoPaginas',
          type: 'ItemValidacaoPagina[]',
          model: 'ItemValidacaoPagina',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'paginaValidacaoWebId'
        },
      }
    }
  }
}

/* tslint:disable */
import {
  EtapaCliente
} from '../index';

declare var Object: any;
export interface FunilNegocioInterface {
  "nome"?: string;
  "id"?: number;
  etapaClientes?: EtapaCliente[];
}

export class FunilNegocio implements FunilNegocioInterface {
  "nome": string;
  "id": number;
  etapaClientes: EtapaCliente[];
  constructor(data?: FunilNegocioInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `FunilNegocio`.
   */
  public static getModelName() {
    return "FunilNegocio";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of FunilNegocio for dynamic purposes.
  **/
  public static factory(data: FunilNegocioInterface): FunilNegocio{
    return new FunilNegocio(data);
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
      name: 'FunilNegocio',
      plural: 'FunilNegocios',
      path: 'FunilNegocios',
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
        etapaClientes: {
          name: 'etapaClientes',
          type: 'EtapaCliente[]',
          model: 'EtapaCliente',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'funilNegocioId'
        },
      }
    }
  }
}

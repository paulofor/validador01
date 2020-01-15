/* tslint:disable */

declare var Object: any;
export interface EtapaClienteInterface {
  "nome"?: string;
  "posicao"?: number;
  "id"?: number;
  "funilNegocioId"?: number;
}

export class EtapaCliente implements EtapaClienteInterface {
  "nome": string;
  "posicao": number;
  "id": number;
  "funilNegocioId": number;
  constructor(data?: EtapaClienteInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `EtapaCliente`.
   */
  public static getModelName() {
    return "EtapaCliente";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of EtapaCliente for dynamic purposes.
  **/
  public static factory(data: EtapaClienteInterface): EtapaCliente{
    return new EtapaCliente(data);
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
      name: 'EtapaCliente',
      plural: 'EtapaClientes',
      path: 'EtapaClientes',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "posicao": {
          name: 'posicao',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "funilNegocioId": {
          name: 'funilNegocioId',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}

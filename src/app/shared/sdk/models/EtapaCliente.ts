/* tslint:disable */
import {
  ValorMetricaEtapa
} from '../index';

declare var Object: any;
export interface EtapaClienteInterface {
  "nome"?: string;
  "posicao"?: number;
  "descricao"?: string;
  "formula"?: string;
  "sql"?: string;
  "id"?: number;
  "funilNegocioId"?: number;
  valorMetricaEtapas?: ValorMetricaEtapa[];
}

export class EtapaCliente implements EtapaClienteInterface {
  "nome": string;
  "posicao": number;
  "descricao": string;
  "formula": string;
  "sql": string;
  "id": number;
  "funilNegocioId": number;
  valorMetricaEtapas: ValorMetricaEtapa[];
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
        "descricao": {
          name: 'descricao',
          type: 'string'
        },
        "formula": {
          name: 'formula',
          type: 'string'
        },
        "sql": {
          name: 'sql',
          type: 'string'
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
        valorMetricaEtapas: {
          name: 'valorMetricaEtapas',
          type: 'ValorMetricaEtapa[]',
          model: 'ValorMetricaEtapa',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'etapaClienteId'
        },
      }
    }
  }
}

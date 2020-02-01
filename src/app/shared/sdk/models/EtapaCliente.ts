/* tslint:disable */
import {
  FunilNegocio,
  ValorMetricaEtapa,
  ValorEtapaFunilDia,
  ValorEtapaFunilCampanha
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
  "etapaClienteId"?: number;
  funilNegocio?: FunilNegocio;
  etapaCliente?: EtapaCliente;
  valorMetricaEtapas?: ValorMetricaEtapa[];
  valorEtapaFunilDia?: ValorEtapaFunilDia[];
  valorEtapaFunilCampanhas?: ValorEtapaFunilCampanha[];
}

export class EtapaCliente implements EtapaClienteInterface {
  "nome": string;
  "posicao": number;
  "descricao": string;
  "formula": string;
  "sql": string;
  "id": number;
  "funilNegocioId": number;
  "etapaClienteId": number;
  funilNegocio: FunilNegocio;
  etapaCliente: EtapaCliente;
  valorMetricaEtapas: ValorMetricaEtapa[];
  valorEtapaFunilDia: ValorEtapaFunilDia[];
  valorEtapaFunilCampanhas: ValorEtapaFunilCampanha[];
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
        "etapaClienteId": {
          name: 'etapaClienteId',
          type: 'number'
        },
      },
      relations: {
        funilNegocio: {
          name: 'funilNegocio',
          type: 'FunilNegocio',
          model: 'FunilNegocio',
          relationType: 'belongsTo',
                  keyFrom: 'funilNegocioId',
          keyTo: 'id'
        },
        etapaCliente: {
          name: 'etapaCliente',
          type: 'EtapaCliente',
          model: 'EtapaCliente',
          relationType: 'belongsTo',
                  keyFrom: 'etapaClienteId',
          keyTo: 'id'
        },
        valorMetricaEtapas: {
          name: 'valorMetricaEtapas',
          type: 'ValorMetricaEtapa[]',
          model: 'ValorMetricaEtapa',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'etapaClienteId'
        },
        valorEtapaFunilDia: {
          name: 'valorEtapaFunilDia',
          type: 'ValorEtapaFunilDia[]',
          model: 'ValorEtapaFunilDia',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'etapaClienteId'
        },
        valorEtapaFunilCampanhas: {
          name: 'valorEtapaFunilCampanhas',
          type: 'ValorEtapaFunilCampanha[]',
          model: 'ValorEtapaFunilCampanha',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'etapaClienteId'
        },
      }
    }
  }
}

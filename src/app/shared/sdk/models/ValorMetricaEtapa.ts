/* tslint:disable */

declare var Object: any;
export interface ValorMetricaEtapaInterface {
  "quantidade"?: number;
  "taxa"?: number;
  "custo"?: number;
  "id"?: number;
  "projetoMySqlId"?: number;
  "semanaId"?: number;
  "etapaClienteId"?: number;
}

export class ValorMetricaEtapa implements ValorMetricaEtapaInterface {
  "quantidade": number;
  "taxa": number;
  "custo": number;
  "id": number;
  "projetoMySqlId": number;
  "semanaId": number;
  "etapaClienteId": number;
  constructor(data?: ValorMetricaEtapaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ValorMetricaEtapa`.
   */
  public static getModelName() {
    return "ValorMetricaEtapa";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ValorMetricaEtapa for dynamic purposes.
  **/
  public static factory(data: ValorMetricaEtapaInterface): ValorMetricaEtapa{
    return new ValorMetricaEtapa(data);
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
      name: 'ValorMetricaEtapa',
      plural: 'ValorMetricaEtapas',
      path: 'ValorMetricaEtapas',
      idName: 'id',
      properties: {
        "quantidade": {
          name: 'quantidade',
          type: 'number'
        },
        "taxa": {
          name: 'taxa',
          type: 'number'
        },
        "custo": {
          name: 'custo',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "projetoMySqlId": {
          name: 'projetoMySqlId',
          type: 'number'
        },
        "semanaId": {
          name: 'semanaId',
          type: 'number'
        },
        "etapaClienteId": {
          name: 'etapaClienteId',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}

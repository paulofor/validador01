/* tslint:disable */

declare var Object: any;
export interface PeriodoMetricaInterface {
  "tipo"?: string;
  "rotulo"?: string;
  "dataInicio"?: string;
  "dataFim"?: string;
  "ano"?: number;
  "id"?: number;
}

export class PeriodoMetrica implements PeriodoMetricaInterface {
  "tipo": string;
  "rotulo": string;
  "dataInicio": string;
  "dataFim": string;
  "ano": number;
  "id": number;
  constructor(data?: PeriodoMetricaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PeriodoMetrica`.
   */
  public static getModelName() {
    return "PeriodoMetrica";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PeriodoMetrica for dynamic purposes.
  **/
  public static factory(data: PeriodoMetricaInterface): PeriodoMetrica{
    return new PeriodoMetrica(data);
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
      name: 'PeriodoMetrica',
      plural: 'PeriodoMetricas',
      path: 'PeriodoMetricas',
      idName: 'id',
      properties: {
        "tipo": {
          name: 'tipo',
          type: 'string'
        },
        "rotulo": {
          name: 'rotulo',
          type: 'string'
        },
        "dataInicio": {
          name: 'dataInicio',
          type: 'string'
        },
        "dataFim": {
          name: 'dataFim',
          type: 'string'
        },
        "ano": {
          name: 'ano',
          type: 'number'
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

/* tslint:disable */
import {
  PeriodoMetrica
} from '../index';

declare var Object: any;
export interface VersaoTelaAppMetricaInterface {
  "versaoTelaAppId"?: number;
  "periodoMetricaId"?: number;
  "quantidadeTotal"?: number;
  "quantidadeSessao"?: number;
  "quantidadeUsuario"?: number;
  periodoMetrica?: PeriodoMetrica;
}

export class VersaoTelaAppMetrica implements VersaoTelaAppMetricaInterface {
  "versaoTelaAppId": number;
  "periodoMetricaId": number;
  "quantidadeTotal": number;
  "quantidadeSessao": number;
  "quantidadeUsuario": number;
  periodoMetrica: PeriodoMetrica;
  constructor(data?: VersaoTelaAppMetricaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `VersaoTelaAppMetrica`.
   */
  public static getModelName() {
    return "VersaoTelaAppMetrica";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of VersaoTelaAppMetrica for dynamic purposes.
  **/
  public static factory(data: VersaoTelaAppMetricaInterface): VersaoTelaAppMetrica{
    return new VersaoTelaAppMetrica(data);
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
      name: 'VersaoTelaAppMetrica',
      plural: 'VersaoTelaAppMetricas',
      path: 'VersaoTelaAppMetricas',
      idName: 'versaoTelaAppId',
      properties: {
        "versaoTelaAppId": {
          name: 'versaoTelaAppId',
          type: 'number'
        },
        "periodoMetricaId": {
          name: 'periodoMetricaId',
          type: 'number'
        },
        "quantidadeTotal": {
          name: 'quantidadeTotal',
          type: 'number'
        },
        "quantidadeSessao": {
          name: 'quantidadeSessao',
          type: 'number'
        },
        "quantidadeUsuario": {
          name: 'quantidadeUsuario',
          type: 'number'
        },
      },
      relations: {
        periodoMetrica: {
          name: 'periodoMetrica',
          type: 'PeriodoMetrica',
          model: 'PeriodoMetrica',
          relationType: 'belongsTo',
                  keyFrom: 'periodoMetricaId',
          keyTo: 'id'
        },
      }
    }
  }
}

/* tslint:disable */
import {
  TelaApp,
  VersaoTelaAppMetrica
} from '../index';

declare var Object: any;
export interface VersaoTelaAppInterface {
  "versaoAppId"?: number;
  "telaAppId"?: number;
  "descricao"?: string;
  "codigo"?: string;
  "fonteCss"?: string;
  "fonteTs"?: string;
  "fonteHtml"?: string;
  "imagem1"?: string;
  "id"?: number;
  telaApp?: TelaApp;
  versaoTelaAppMetricas?: VersaoTelaAppMetrica[];
}

export class VersaoTelaApp implements VersaoTelaAppInterface {
  "versaoAppId": number;
  "telaAppId": number;
  "descricao": string;
  "codigo": string;
  "fonteCss": string;
  "fonteTs": string;
  "fonteHtml": string;
  "imagem1": string;
  "id": number;
  telaApp: TelaApp;
  versaoTelaAppMetricas: VersaoTelaAppMetrica[];
  constructor(data?: VersaoTelaAppInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `VersaoTelaApp`.
   */
  public static getModelName() {
    return "VersaoTelaApp";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of VersaoTelaApp for dynamic purposes.
  **/
  public static factory(data: VersaoTelaAppInterface): VersaoTelaApp{
    return new VersaoTelaApp(data);
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
      name: 'VersaoTelaApp',
      plural: 'VersaoTelaApps',
      path: 'VersaoTelaApps',
      idName: 'id',
      properties: {
        "versaoAppId": {
          name: 'versaoAppId',
          type: 'number'
        },
        "telaAppId": {
          name: 'telaAppId',
          type: 'number'
        },
        "descricao": {
          name: 'descricao',
          type: 'string'
        },
        "codigo": {
          name: 'codigo',
          type: 'string'
        },
        "fonteCss": {
          name: 'fonteCss',
          type: 'string'
        },
        "fonteTs": {
          name: 'fonteTs',
          type: 'string'
        },
        "fonteHtml": {
          name: 'fonteHtml',
          type: 'string'
        },
        "imagem1": {
          name: 'imagem1',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        telaApp: {
          name: 'telaApp',
          type: 'TelaApp',
          model: 'TelaApp',
          relationType: 'belongsTo',
                  keyFrom: 'telaAppId',
          keyTo: 'id'
        },
        versaoTelaAppMetricas: {
          name: 'versaoTelaAppMetricas',
          type: 'VersaoTelaAppMetrica[]',
          model: 'VersaoTelaAppMetrica',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'versaoTelaAppId'
        },
      }
    }
  }
}

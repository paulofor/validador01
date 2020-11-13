/* tslint:disable */
import {
  TelaApp
} from '../index';

declare var Object: any;
export interface VersaoTelaAppInterface {
  "descricao"?: string;
  "codigo"?: string;
  "fonteCss"?: string;
  "fonteTs"?: string;
  "fonteHtml"?: string;
  "id"?: number;
  "telaAppId"?: number;
  "versaoAppId"?: number;
  telaApp?: TelaApp;
}

export class VersaoTelaApp implements VersaoTelaAppInterface {
  "descricao": string;
  "codigo": string;
  "fonteCss": string;
  "fonteTs": string;
  "fonteHtml": string;
  "id": number;
  "telaAppId": number;
  "versaoAppId": number;
  telaApp: TelaApp;
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
        "id": {
          name: 'id',
          type: 'number'
        },
        "telaAppId": {
          name: 'telaAppId',
          type: 'number'
        },
        "versaoAppId": {
          name: 'versaoAppId',
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
      }
    }
  }
}

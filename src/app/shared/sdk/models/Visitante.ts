/* tslint:disable */
import {
  PaginaValidacaoWeb,
  PaginaInstalacaoApp,
  VersaoApp,
  RespostaVersao,
  ClienteExperimental
} from '../index';

declare var Object: any;
export interface VisitanteInterface {
  "codigoCookie"?: string;
  "dataHora"?: Date;
  "id"?: number;
  "dispositivo"?: string;
  "fcmToken"?: string;
  "dataHoraNotificacao"?: Date;
  "paginaValidacaoWebId"?: number;
  "paginaInstalacaoAppId"?: number;
  "versaoAppId"?: number;
  "clienteExperimentalId"?: number;
  paginaValidacaoWeb?: PaginaValidacaoWeb;
  paginaInstalacaoApp?: PaginaInstalacaoApp;
  versaoApp?: VersaoApp;
  respostaVersaos?: RespostaVersao[];
  clienteExperimental?: ClienteExperimental;
}

export class Visitante implements VisitanteInterface {
  "codigoCookie": string;
  "dataHora": Date;
  "id": number;
  "dispositivo": string;
  "fcmToken": string;
  "dataHoraNotificacao": Date;
  "paginaValidacaoWebId": number;
  "paginaInstalacaoAppId": number;
  "versaoAppId": number;
  "clienteExperimentalId": number;
  paginaValidacaoWeb: PaginaValidacaoWeb;
  paginaInstalacaoApp: PaginaInstalacaoApp;
  versaoApp: VersaoApp;
  respostaVersaos: RespostaVersao[];
  clienteExperimental: ClienteExperimental;
  constructor(data?: VisitanteInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Visitante`.
   */
  public static getModelName() {
    return "Visitante";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Visitante for dynamic purposes.
  **/
  public static factory(data: VisitanteInterface): Visitante{
    return new Visitante(data);
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
      name: 'Visitante',
      plural: 'Visitantes',
      path: 'Visitantes',
      idName: 'id',
      properties: {
        "codigoCookie": {
          name: 'codigoCookie',
          type: 'string'
        },
        "dataHora": {
          name: 'dataHora',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "dispositivo": {
          name: 'dispositivo',
          type: 'string'
        },
        "fcmToken": {
          name: 'fcmToken',
          type: 'string'
        },
        "dataHoraNotificacao": {
          name: 'dataHoraNotificacao',
          type: 'Date'
        },
        "paginaValidacaoWebId": {
          name: 'paginaValidacaoWebId',
          type: 'number'
        },
        "paginaInstalacaoAppId": {
          name: 'paginaInstalacaoAppId',
          type: 'number'
        },
        "versaoAppId": {
          name: 'versaoAppId',
          type: 'number'
        },
        "clienteExperimentalId": {
          name: 'clienteExperimentalId',
          type: 'number'
        },
      },
      relations: {
        paginaValidacaoWeb: {
          name: 'paginaValidacaoWeb',
          type: 'PaginaValidacaoWeb',
          model: 'PaginaValidacaoWeb',
          relationType: 'belongsTo',
                  keyFrom: 'paginaValidacaoWebId',
          keyTo: 'id'
        },
        paginaInstalacaoApp: {
          name: 'paginaInstalacaoApp',
          type: 'PaginaInstalacaoApp',
          model: 'PaginaInstalacaoApp',
          relationType: 'belongsTo',
                  keyFrom: 'paginaInstalacaoAppId',
          keyTo: 'id'
        },
        versaoApp: {
          name: 'versaoApp',
          type: 'VersaoApp',
          model: 'VersaoApp',
          relationType: 'belongsTo',
                  keyFrom: 'versaoAppId',
          keyTo: 'id'
        },
        respostaVersaos: {
          name: 'respostaVersaos',
          type: 'RespostaVersao[]',
          model: 'RespostaVersao',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'visitanteId'
        },
        clienteExperimental: {
          name: 'clienteExperimental',
          type: 'ClienteExperimental',
          model: 'ClienteExperimental',
          relationType: 'belongsTo',
                  keyFrom: 'clienteExperimentalId',
          keyTo: 'id'
        },
      }
    }
  }
}

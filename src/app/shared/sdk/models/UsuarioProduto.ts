/* tslint:disable */
import {
  DispositivoUsuario,
  VisitaApp,
  NotificacaoApp
} from '../index';

declare var Object: any;
export interface UsuarioProdutoInterface {
  "nome"?: string;
  "senha"?: string;
  "chave"?: string;
  "dataHoraCriacao"?: Date;
  "dataUltimoAcesso"?: Date;
  "codigoPagSeguro"?: string;
  "dataPagSeguro"?: Date;
  "email"?: string;
  "naoEnviaEmail"?: number;
  "id"?: number;
  "projetoMySqlId"?: number;
  dispositivoUsuarios?: DispositivoUsuario[];
  visitaApps?: VisitaApp[];
  notificacaoApps?: NotificacaoApp[];
}

export class UsuarioProduto implements UsuarioProdutoInterface {
  "nome": string;
  "senha": string;
  "chave": string;
  "dataHoraCriacao": Date;
  "dataUltimoAcesso": Date;
  "codigoPagSeguro": string;
  "dataPagSeguro": Date;
  "email": string;
  "naoEnviaEmail": number;
  "id": number;
  "projetoMySqlId": number;
  dispositivoUsuarios: DispositivoUsuario[];
  visitaApps: VisitaApp[];
  notificacaoApps: NotificacaoApp[];
  constructor(data?: UsuarioProdutoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `UsuarioProduto`.
   */
  public static getModelName() {
    return "UsuarioProduto";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of UsuarioProduto for dynamic purposes.
  **/
  public static factory(data: UsuarioProdutoInterface): UsuarioProduto{
    return new UsuarioProduto(data);
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
      name: 'UsuarioProduto',
      plural: 'UsuarioProdutos',
      path: 'UsuarioProdutos',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "senha": {
          name: 'senha',
          type: 'string'
        },
        "chave": {
          name: 'chave',
          type: 'string'
        },
        "dataHoraCriacao": {
          name: 'dataHoraCriacao',
          type: 'Date'
        },
        "dataUltimoAcesso": {
          name: 'dataUltimoAcesso',
          type: 'Date'
        },
        "codigoPagSeguro": {
          name: 'codigoPagSeguro',
          type: 'string'
        },
        "dataPagSeguro": {
          name: 'dataPagSeguro',
          type: 'Date'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "naoEnviaEmail": {
          name: 'naoEnviaEmail',
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
      },
      relations: {
        dispositivoUsuarios: {
          name: 'dispositivoUsuarios',
          type: 'DispositivoUsuario[]',
          model: 'DispositivoUsuario',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'usuarioProdutoId'
        },
        visitaApps: {
          name: 'visitaApps',
          type: 'VisitaApp[]',
          model: 'VisitaApp',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'usuarioProdutoId'
        },
        notificacaoApps: {
          name: 'notificacaoApps',
          type: 'NotificacaoApp[]',
          model: 'NotificacaoApp',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'usuarioProdutoId'
        },
      }
    }
  }
}

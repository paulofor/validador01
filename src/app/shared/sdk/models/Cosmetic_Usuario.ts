/* tslint:disable */
import {
  Cosmetic_Acao
} from '../index';

declare var Object: any;
export interface Cosmetic_UsuarioInterface {
  "id"?: string;
  "nome"?: string;
  "senha"?: string;
  "email"?: string;
  "dataHoraCriacao"?: Date;
  "dataHoraUltimoAcesso"?: Date;
  "codigoPagamento"?: string;
  "statusPagamento"?: string;
  listaAcao?: Cosmetic_Acao[];
}

export class Cosmetic_Usuario implements Cosmetic_UsuarioInterface {
  "id": string;
  "nome": string;
  "senha": string;
  "email": string;
  "dataHoraCriacao": Date;
  "dataHoraUltimoAcesso": Date;
  "codigoPagamento": string;
  "statusPagamento": string;
  listaAcao: Cosmetic_Acao[];
  constructor(data?: Cosmetic_UsuarioInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Cosmetic_Usuario`.
   */
  public static getModelName() {
    return "Cosmetic_Usuario";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Cosmetic_Usuario for dynamic purposes.
  **/
  public static factory(data: Cosmetic_UsuarioInterface): Cosmetic_Usuario{
    return new Cosmetic_Usuario(data);
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
      name: 'Cosmetic_Usuario',
      plural: 'Cosmetic_Usuarios',
      path: 'Cosmetic_Usuarios',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "senha": {
          name: 'senha',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "dataHoraCriacao": {
          name: 'dataHoraCriacao',
          type: 'Date'
        },
        "dataHoraUltimoAcesso": {
          name: 'dataHoraUltimoAcesso',
          type: 'Date'
        },
        "codigoPagamento": {
          name: 'codigoPagamento',
          type: 'string'
        },
        "statusPagamento": {
          name: 'statusPagamento',
          type: 'string'
        },
      },
      relations: {
        listaAcao: {
          name: 'listaAcao',
          type: 'Cosmetic_Acao[]',
          model: 'Cosmetic_Acao',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'usuarioId'
        },
      }
    }
  }
}

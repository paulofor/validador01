/* tslint:disable */
import {
  DispositivoUsuario
} from '../index';

declare var Object: any;
export interface UsuarioProdutoInterface {
  "nome"?: string;
  "senha"?: string;
  "chave"?: string;
  "id"?: number;
  "projetoMySqlId"?: number;
  dispositivoUsuarios?: DispositivoUsuario[];
}

export class UsuarioProduto implements UsuarioProdutoInterface {
  "nome": string;
  "senha": string;
  "chave": string;
  "id": number;
  "projetoMySqlId": number;
  dispositivoUsuarios: DispositivoUsuario[];
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
      }
    }
  }
}
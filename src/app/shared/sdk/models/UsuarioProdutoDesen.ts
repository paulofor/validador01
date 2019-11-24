/* tslint:disable */
import {
  DispositivoUsuarioDesen
} from '../index';

declare var Object: any;
export interface UsuarioProdutoDesenInterface {
  "nome"?: string;
  "senha"?: string;
  "chave"?: string;
  "dataHoraCriacao"?: Date;
  "dataUltimoAcesso"?: Date;
  "id"?: number;
  dispositivoUsuarios?: DispositivoUsuarioDesen[];
}

export class UsuarioProdutoDesen implements UsuarioProdutoDesenInterface {
  "nome": string;
  "senha": string;
  "chave": string;
  "dataHoraCriacao": Date;
  "dataUltimoAcesso": Date;
  "id": number;
  dispositivoUsuarios: DispositivoUsuarioDesen[];
  constructor(data?: UsuarioProdutoDesenInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `UsuarioProdutoDesen`.
   */
  public static getModelName() {
    return "UsuarioProdutoDesen";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of UsuarioProdutoDesen for dynamic purposes.
  **/
  public static factory(data: UsuarioProdutoDesenInterface): UsuarioProdutoDesen{
    return new UsuarioProdutoDesen(data);
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
      name: 'UsuarioProdutoDesen',
      plural: 'UsuarioProdutoDesens',
      path: 'UsuarioProdutoDesens',
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
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        dispositivoUsuarios: {
          name: 'dispositivoUsuarios',
          type: 'DispositivoUsuarioDesen[]',
          model: 'DispositivoUsuarioDesen',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'usuarioProdutoDesenId'
        },
      }
    }
  }
}

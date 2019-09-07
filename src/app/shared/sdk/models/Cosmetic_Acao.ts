/* tslint:disable */
import {
  Cosmetic_Usuario
} from '../index';

declare var Object: any;
export interface Cosmetic_AcaoInterface {
  "nome"?: string;
  "dataHora"?: Date;
  "objeto"?: string;
  "id"?: string;
  "telaAppId"?: number;
  "usuarioId"?: string;
  usuario?: Cosmetic_Usuario;
}

export class Cosmetic_Acao implements Cosmetic_AcaoInterface {
  "nome": string;
  "dataHora": Date;
  "objeto": string;
  "id": string;
  "telaAppId": number;
  "usuarioId": string;
  usuario: Cosmetic_Usuario;
  constructor(data?: Cosmetic_AcaoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Cosmetic_Acao`.
   */
  public static getModelName() {
    return "Cosmetic_Acao";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Cosmetic_Acao for dynamic purposes.
  **/
  public static factory(data: Cosmetic_AcaoInterface): Cosmetic_Acao{
    return new Cosmetic_Acao(data);
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
      name: 'Cosmetic_Acao',
      plural: 'Cosmetic_Acaos',
      path: 'Cosmetic_Acaos',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "dataHora": {
          name: 'dataHora',
          type: 'Date'
        },
        "objeto": {
          name: 'objeto',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'string'
        },
        "telaAppId": {
          name: 'telaAppId',
          type: 'number'
        },
        "usuarioId": {
          name: 'usuarioId',
          type: 'string'
        },
      },
      relations: {
        usuario: {
          name: 'usuario',
          type: 'Cosmetic_Usuario',
          model: 'Cosmetic_Usuario',
          relationType: 'belongsTo',
                  keyFrom: 'usuarioId',
          keyTo: 'id'
        },
      }
    }
  }
}

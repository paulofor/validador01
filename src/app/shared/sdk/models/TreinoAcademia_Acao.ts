/* tslint:disable */
import {
  TreinoAcademia_Usuario
} from '../index';

declare var Object: any;
export interface TreinoAcademia_AcaoInterface {
  "nome"?: string;
  "dataHora"?: Date;
  "objeto"?: string;
  "id"?: string;
  "telaAppId"?: number;
  "usuarioId"?: string;
  usuario?: TreinoAcademia_Usuario;
}

export class TreinoAcademia_Acao implements TreinoAcademia_AcaoInterface {
  "nome": string;
  "dataHora": Date;
  "objeto": string;
  "id": string;
  "telaAppId": number;
  "usuarioId": string;
  usuario: TreinoAcademia_Usuario;
  constructor(data?: TreinoAcademia_AcaoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TreinoAcademia_Acao`.
   */
  public static getModelName() {
    return "TreinoAcademia_Acao";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TreinoAcademia_Acao for dynamic purposes.
  **/
  public static factory(data: TreinoAcademia_AcaoInterface): TreinoAcademia_Acao{
    return new TreinoAcademia_Acao(data);
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
      name: 'TreinoAcademia_Acao',
      plural: 'TreinoAcademia_Acaos',
      path: 'TreinoAcademia_Acaos',
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
          type: 'TreinoAcademia_Usuario',
          model: 'TreinoAcademia_Usuario',
          relationType: 'belongsTo',
                  keyFrom: 'usuarioId',
          keyTo: 'id'
        },
      }
    }
  }
}

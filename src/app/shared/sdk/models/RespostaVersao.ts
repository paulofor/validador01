/* tslint:disable */

declare var Object: any;
export interface RespostaVersaoInterface {
  "pergunta"?: string;
  "resposta"?: string;
  "dataHora"?: Date;
  "id"?: number;
  "visitanteId"?: number;
  "versaoAppId"?: number;
}

export class RespostaVersao implements RespostaVersaoInterface {
  "pergunta": string;
  "resposta": string;
  "dataHora": Date;
  "id": number;
  "visitanteId": number;
  "versaoAppId": number;
  constructor(data?: RespostaVersaoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `RespostaVersao`.
   */
  public static getModelName() {
    return "RespostaVersao";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of RespostaVersao for dynamic purposes.
  **/
  public static factory(data: RespostaVersaoInterface): RespostaVersao{
    return new RespostaVersao(data);
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
      name: 'RespostaVersao',
      plural: 'RespostaVersaos',
      path: 'RespostaVersaos',
      idName: 'id',
      properties: {
        "pergunta": {
          name: 'pergunta',
          type: 'string'
        },
        "resposta": {
          name: 'resposta',
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
        "visitanteId": {
          name: 'visitanteId',
          type: 'number'
        },
        "versaoAppId": {
          name: 'versaoAppId',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}

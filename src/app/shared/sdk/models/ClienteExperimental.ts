/* tslint:disable */

declare var Object: any;
export interface ClienteExperimentalInterface {
  "nome"?: string;
  "email"?: string;
  "instagram"?: string;
  "whatsapp"?: string;
  "faixaEtaria"?: string;
  "tempoDisponivel"?: string;
  "id"?: number;
  "projetoMySqlId"?: number;
  "campanhaAdsId"?: number;
  "anuncioAplicativoId"?: number;
  "versaoAppId"?: number;
  "presencaLojaId"?: number;
}

export class ClienteExperimental implements ClienteExperimentalInterface {
  "nome": string;
  "email": string;
  "instagram": string;
  "whatsapp": string;
  "faixaEtaria": string;
  "tempoDisponivel": string;
  "id": number;
  "projetoMySqlId": number;
  "campanhaAdsId": number;
  "anuncioAplicativoId": number;
  "versaoAppId": number;
  "presencaLojaId": number;
  constructor(data?: ClienteExperimentalInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ClienteExperimental`.
   */
  public static getModelName() {
    return "ClienteExperimental";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ClienteExperimental for dynamic purposes.
  **/
  public static factory(data: ClienteExperimentalInterface): ClienteExperimental{
    return new ClienteExperimental(data);
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
      name: 'ClienteExperimental',
      plural: 'ClienteExperimentals',
      path: 'ClienteExperimentals',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "instagram": {
          name: 'instagram',
          type: 'string'
        },
        "whatsapp": {
          name: 'whatsapp',
          type: 'string'
        },
        "faixaEtaria": {
          name: 'faixaEtaria',
          type: 'string'
        },
        "tempoDisponivel": {
          name: 'tempoDisponivel',
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
        "campanhaAdsId": {
          name: 'campanhaAdsId',
          type: 'number'
        },
        "anuncioAplicativoId": {
          name: 'anuncioAplicativoId',
          type: 'number'
        },
        "versaoAppId": {
          name: 'versaoAppId',
          type: 'number'
        },
        "presencaLojaId": {
          name: 'presencaLojaId',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}

/* tslint:disable */
import {
  PalavraChaveAds
} from '../index';

declare var Object: any;
export interface GrupoPalavraChaveInterface {
  "fechada"?: boolean;
  "id"?: number;
  "projetoCanvasMySqlId"?: number;
  palavraChaveAds?: PalavraChaveAds[];
}

export class GrupoPalavraChave implements GrupoPalavraChaveInterface {
  "fechada": boolean;
  "id": number;
  "projetoCanvasMySqlId": number;
  palavraChaveAds: PalavraChaveAds[];
  constructor(data?: GrupoPalavraChaveInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GrupoPalavraChave`.
   */
  public static getModelName() {
    return "GrupoPalavraChave";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of GrupoPalavraChave for dynamic purposes.
  **/
  public static factory(data: GrupoPalavraChaveInterface): GrupoPalavraChave{
    return new GrupoPalavraChave(data);
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
      name: 'GrupoPalavraChave',
      plural: 'GrupoPalavraChaves',
      path: 'GrupoPalavraChaves',
      idName: 'id',
      properties: {
        "fechada": {
          name: 'fechada',
          type: 'boolean'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "projetoCanvasMySqlId": {
          name: 'projetoCanvasMySqlId',
          type: 'number'
        },
      },
      relations: {
        palavraChaveAds: {
          name: 'palavraChaveAds',
          type: 'PalavraChaveAds[]',
          model: 'PalavraChaveAds',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'grupoPalavraChaveId'
        },
      }
    }
  }
}

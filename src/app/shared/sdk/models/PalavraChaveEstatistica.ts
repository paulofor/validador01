/* tslint:disable */
import {
  PalavraChaveRaiz,
  PalavraChaveGoogle
} from '../index';

declare var Object: any;
export interface PalavraChaveEstatisticaInterface {
  "DataConsulta"?: Date;
  "MediaCpc"?: number;
  "VolumePesquisa"?: number;
  "IndiceCompeticao"?: number;
  "id"?: number;
  "palavraChaveRaizId"?: number;
  "palavraChaveGoogleId"?: string;
  palavraChaveRaiz?: PalavraChaveRaiz;
  palavraChaveGoogle?: PalavraChaveGoogle;
}

export class PalavraChaveEstatistica implements PalavraChaveEstatisticaInterface {
  "DataConsulta": Date;
  "MediaCpc": number;
  "VolumePesquisa": number;
  "IndiceCompeticao": number;
  "id": number;
  "palavraChaveRaizId": number;
  "palavraChaveGoogleId": string;
  palavraChaveRaiz: PalavraChaveRaiz;
  palavraChaveGoogle: PalavraChaveGoogle;
  constructor(data?: PalavraChaveEstatisticaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PalavraChaveEstatistica`.
   */
  public static getModelName() {
    return "PalavraChaveEstatistica";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PalavraChaveEstatistica for dynamic purposes.
  **/
  public static factory(data: PalavraChaveEstatisticaInterface): PalavraChaveEstatistica{
    return new PalavraChaveEstatistica(data);
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
      name: 'PalavraChaveEstatistica',
      plural: 'PalavraChaveEstatisticas',
      path: 'PalavraChaveEstatisticas',
      idName: 'id',
      properties: {
        "DataConsulta": {
          name: 'DataConsulta',
          type: 'Date'
        },
        "MediaCpc": {
          name: 'MediaCpc',
          type: 'number'
        },
        "VolumePesquisa": {
          name: 'VolumePesquisa',
          type: 'number'
        },
        "IndiceCompeticao": {
          name: 'IndiceCompeticao',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "palavraChaveRaizId": {
          name: 'palavraChaveRaizId',
          type: 'number'
        },
        "palavraChaveGoogleId": {
          name: 'palavraChaveGoogleId',
          type: 'string'
        },
      },
      relations: {
        palavraChaveRaiz: {
          name: 'palavraChaveRaiz',
          type: 'PalavraChaveRaiz',
          model: 'PalavraChaveRaiz',
          relationType: 'belongsTo',
                  keyFrom: 'palavraChaveRaizId',
          keyTo: 'id'
        },
        palavraChaveGoogle: {
          name: 'palavraChaveGoogle',
          type: 'PalavraChaveGoogle',
          model: 'PalavraChaveGoogle',
          relationType: 'belongsTo',
                  keyFrom: 'palavraChaveGoogleId',
          keyTo: 'palavra'
        },
      }
    }
  }
}

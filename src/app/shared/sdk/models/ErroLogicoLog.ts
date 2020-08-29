/* tslint:disable */

declare var Object: any;
export interface ErroLogicoLogInterface {
  "descricao"?: string;
  "recomendacao"?: string;
  "local"?: string;
  "dataHora"?: Date;
  "id"?: number;
}

export class ErroLogicoLog implements ErroLogicoLogInterface {
  "descricao": string;
  "recomendacao": string;
  "local": string;
  "dataHora": Date;
  "id": number;
  constructor(data?: ErroLogicoLogInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ErroLogicoLog`.
   */
  public static getModelName() {
    return "ErroLogicoLog";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ErroLogicoLog for dynamic purposes.
  **/
  public static factory(data: ErroLogicoLogInterface): ErroLogicoLog{
    return new ErroLogicoLog(data);
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
      name: 'ErroLogicoLog',
      plural: 'ErroLogicoLogs',
      path: 'ErroLogicoLogs',
      idName: 'id',
      properties: {
        "descricao": {
          name: 'descricao',
          type: 'string'
        },
        "recomendacao": {
          name: 'recomendacao',
          type: 'string'
        },
        "local": {
          name: 'local',
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
      },
      relations: {
      }
    }
  }
}

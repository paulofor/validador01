/* tslint:disable */

declare var Object: any;
export interface ProjetoCanvasMySqlInterface {
  "id"?: number;
  "descricao": string;
  "tipo": string;
  "projetoMySqlId"?: number;
}

export class ProjetoCanvasMySql implements ProjetoCanvasMySqlInterface {
  "id": number;
  "descricao": string;
  "tipo": string;
  "projetoMySqlId": number;
  constructor(data?: ProjetoCanvasMySqlInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ProjetoCanvasMySql`.
   */
  public static getModelName() {
    return "ProjetoCanvasMySql";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ProjetoCanvasMySql for dynamic purposes.
  **/
  public static factory(data: ProjetoCanvasMySqlInterface): ProjetoCanvasMySql{
    return new ProjetoCanvasMySql(data);
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
      name: 'ProjetoCanvasMySql',
      plural: 'ProjetoCanvasMySqls',
      path: 'ProjetoCanvasMySqls',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "descricao": {
          name: 'descricao',
          type: 'string'
        },
        "tipo": {
          name: 'tipo',
          type: 'string'
        },
        "projetoMySqlId": {
          name: 'projetoMySqlId',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}

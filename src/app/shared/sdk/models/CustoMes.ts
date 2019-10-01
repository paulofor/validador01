/* tslint:disable */

declare var Object: any;
export interface CustoMesInterface {
  "ano"?: number;
  "mes"?: number;
  "valorCampanha"?: number;
  "orcamentoCampanha"?: number;
  "data"?: Date;
  "id"?: number;
  "projetoMySqlId"?: number;
}

export class CustoMes implements CustoMesInterface {
  "ano": number;
  "mes": number;
  "valorCampanha": number;
  "orcamentoCampanha": number;
  "data": Date;
  "id": number;
  "projetoMySqlId": number;
  constructor(data?: CustoMesInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `CustoMes`.
   */
  public static getModelName() {
    return "CustoMes";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of CustoMes for dynamic purposes.
  **/
  public static factory(data: CustoMesInterface): CustoMes{
    return new CustoMes(data);
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
      name: 'CustoMes',
      plural: 'CustoMes',
      path: 'CustoMes',
      idName: 'id',
      properties: {
        "ano": {
          name: 'ano',
          type: 'number'
        },
        "mes": {
          name: 'mes',
          type: 'number'
        },
        "valorCampanha": {
          name: 'valorCampanha',
          type: 'number'
        },
        "orcamentoCampanha": {
          name: 'orcamentoCampanha',
          type: 'number'
        },
        "data": {
          name: 'data',
          type: 'Date'
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
      }
    }
  }
}

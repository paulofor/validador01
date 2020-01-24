/* tslint:disable */

declare var Object: any;
export interface ValorEtapaFunilDiaInterface {
  "data"?: Date;
  "valor"?: number;
  "taxa"?: number;
  "custo"?: number;
  "id"?: number;
  "projetoMySqlId"?: number;
  "etapaClienteId"?: number;
}

export class ValorEtapaFunilDia implements ValorEtapaFunilDiaInterface {
  "data": Date;
  "valor": number;
  "taxa": number;
  "custo": number;
  "id": number;
  "projetoMySqlId": number;
  "etapaClienteId": number;
  constructor(data?: ValorEtapaFunilDiaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ValorEtapaFunilDia`.
   */
  public static getModelName() {
    return "ValorEtapaFunilDia";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ValorEtapaFunilDia for dynamic purposes.
  **/
  public static factory(data: ValorEtapaFunilDiaInterface): ValorEtapaFunilDia{
    return new ValorEtapaFunilDia(data);
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
      name: 'ValorEtapaFunilDia',
      plural: 'ValorEtapaFunilDia',
      path: 'ValorEtapaFunilDia',
      idName: 'id',
      properties: {
        "data": {
          name: 'data',
          type: 'Date'
        },
        "valor": {
          name: 'valor',
          type: 'number'
        },
        "taxa": {
          name: 'taxa',
          type: 'number'
        },
        "custo": {
          name: 'custo',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "projetoMySqlId": {
          name: 'projetoMySqlId',
          type: 'number'
        },
        "etapaClienteId": {
          name: 'etapaClienteId',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}

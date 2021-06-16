/* tslint:disable */

declare var Object: any;
export interface AcessoAssinaturaInterface {
  "chave"?: string;
  "dias"?: number;
  "dataHora"?: Date;
  "id"?: number;
}

export class AcessoAssinatura implements AcessoAssinaturaInterface {
  "chave": string;
  "dias": number;
  "dataHora": Date;
  "id": number;
  constructor(data?: AcessoAssinaturaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `AcessoAssinatura`.
   */
  public static getModelName() {
    return "AcessoAssinatura";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of AcessoAssinatura for dynamic purposes.
  **/
  public static factory(data: AcessoAssinaturaInterface): AcessoAssinatura{
    return new AcessoAssinatura(data);
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
      name: 'AcessoAssinatura',
      plural: 'AcessoAssinaturas',
      path: 'AcessoAssinaturas',
      idName: 'id',
      properties: {
        "chave": {
          name: 'chave',
          type: 'string'
        },
        "dias": {
          name: 'dias',
          type: 'number'
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

/* tslint:disable */

declare var Object: any;
export interface Cosmetic_VisitanteInterface {
  "codigoCookie"?: string;
  "dataHora"?: Date;
  "versaoAppId"?: number;
  "id"?: string;
}

export class Cosmetic_Visitante implements Cosmetic_VisitanteInterface {
  "codigoCookie": string;
  "dataHora": Date;
  "versaoAppId": number;
  "id": string;
  constructor(data?: Cosmetic_VisitanteInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Cosmetic_Visitante`.
   */
  public static getModelName() {
    return "Cosmetic_Visitante";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Cosmetic_Visitante for dynamic purposes.
  **/
  public static factory(data: Cosmetic_VisitanteInterface): Cosmetic_Visitante{
    return new Cosmetic_Visitante(data);
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
      name: 'Cosmetic_Visitante',
      plural: 'Cosmetic_Visitantes',
      path: 'Cosmetic_Visitantes',
      idName: 'id',
      properties: {
        "codigoCookie": {
          name: 'codigoCookie',
          type: 'string'
        },
        "dataHora": {
          name: 'dataHora',
          type: 'Date'
        },
        "versaoAppId": {
          name: 'versaoAppId',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}

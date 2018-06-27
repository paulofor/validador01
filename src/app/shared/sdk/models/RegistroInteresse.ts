/* tslint:disable */

declare var Object: any;
export interface RegistroInteresseInterface {
  "id"?: number;
  "nome"?: string;
  "data"?: Date;
  "email"?: string;
}

export class RegistroInteresse implements RegistroInteresseInterface {
  "id": number;
  "nome": string;
  "data": Date;
  "email": string;
  constructor(data?: RegistroInteresseInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `RegistroInteresse`.
   */
  public static getModelName() {
    return "RegistroInteresse";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of RegistroInteresse for dynamic purposes.
  **/
  public static factory(data: RegistroInteresseInterface): RegistroInteresse{
    return new RegistroInteresse(data);
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
      name: 'RegistroInteresse',
      plural: 'RegistroInteresses',
      path: 'RegistroInteresses',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "data": {
          name: 'data',
          type: 'Date'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}

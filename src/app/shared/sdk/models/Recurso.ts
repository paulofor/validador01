/* tslint:disable */

declare var Object: any;
export interface RecursoInterface {
  "nome"?: string;
  "id"?: number;
}

export class Recurso implements RecursoInterface {
  "nome": string;
  "id": number;
  constructor(data?: RecursoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Recurso`.
   */
  public static getModelName() {
    return "Recurso";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Recurso for dynamic purposes.
  **/
  public static factory(data: RecursoInterface): Recurso{
    return new Recurso(data);
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
      name: 'Recurso',
      plural: 'Recursos',
      path: 'Recursos',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
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

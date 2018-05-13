/* tslint:disable */

declare var Object: any;
export interface Projeto-CanvasInterface {
  "id"?: number;
  "descricao": string;
  "area": string;
  "projetoId"?: number;
}

export class Projeto-Canvas implements Projeto-CanvasInterface {
  "id": number;
  "descricao": string;
  "area": string;
  "projetoId": number;
  constructor(data?: Projeto-CanvasInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Projeto-Canvas`.
   */
  public static getModelName() {
    return "Projeto-Canvas";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Projeto-Canvas for dynamic purposes.
  **/
  public static factory(data: Projeto-CanvasInterface): Projeto-Canvas{
    return new Projeto-Canvas(data);
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
      name: 'Projeto-Canvas',
      plural: 'Projetos-Canvas',
      path: 'Projetos-Canvas',
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
        "area": {
          name: 'area',
          type: 'string'
        },
        "projetoId": {
          name: 'projetoId',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}

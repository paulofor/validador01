/* tslint:disable */

declare var Object: any;
export interface LojaVirtualInterface {
  "id"?: number;
  "nomeLojaVirtual"?: string;
  "urlInicial"?: string;
}

export class LojaVirtual implements LojaVirtualInterface {
  "id": number;
  "nomeLojaVirtual": string;
  "urlInicial": string;
  constructor(data?: LojaVirtualInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `LojaVirtual`.
   */
  public static getModelName() {
    return "LojaVirtual";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of LojaVirtual for dynamic purposes.
  **/
  public static factory(data: LojaVirtualInterface): LojaVirtual{
    return new LojaVirtual(data);
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
      name: 'LojaVirtual',
      plural: 'LojaVirtuals',
      path: 'LojaVirtuals',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "nomeLojaVirtual": {
          name: 'nomeLojaVirtual',
          type: 'string'
        },
        "urlInicial": {
          name: 'urlInicial',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}

/* tslint:disable */

declare var Object: any;
export interface SessaoAppInterface {
  "id"?: string;
  "dataHora"?: string;
}

export class SessaoApp implements SessaoAppInterface {
  "id": string;
  "dataHora": string;
  constructor(data?: SessaoAppInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `SessaoApp`.
   */
  public static getModelName() {
    return "SessaoApp";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of SessaoApp for dynamic purposes.
  **/
  public static factory(data: SessaoAppInterface): SessaoApp{
    return new SessaoApp(data);
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
      name: 'SessaoApp',
      plural: 'SessaoApps',
      path: 'SessaoApps',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "dataHora": {
          name: 'dataHora',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}

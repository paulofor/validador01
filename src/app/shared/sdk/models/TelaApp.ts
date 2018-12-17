/* tslint:disable */
import {
  Entidade
} from '../index';

declare var Object: any;
export interface TelaAppInterface {
  "nome"?: string;
  "id"?: number;
  entidades?: Entidade;
}

export class TelaApp implements TelaAppInterface {
  "nome": string;
  "id": number;
  entidades: Entidade;
  constructor(data?: TelaAppInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TelaApp`.
   */
  public static getModelName() {
    return "TelaApp";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TelaApp for dynamic purposes.
  **/
  public static factory(data: TelaAppInterface): TelaApp{
    return new TelaApp(data);
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
      name: 'TelaApp',
      plural: 'TelaApps',
      path: 'TelaApps',
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
        entidades: {
          name: 'entidades',
          type: 'Entidade',
          model: 'Entidade',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'telaAppId'
        },
      }
    }
  }
}

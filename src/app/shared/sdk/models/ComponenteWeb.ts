/* tslint:disable */
import {
  TipoComponenteWeb
} from '../index';

declare var Object: any;
export interface ComponenteWebInterface {
  "nome"?: string;
  "id"?: number;
  "aplicacaoId"?: number;
  tipoComponenteWebs?: TipoComponenteWeb;
}

export class ComponenteWeb implements ComponenteWebInterface {
  "nome": string;
  "id": number;
  "aplicacaoId": number;
  tipoComponenteWebs: TipoComponenteWeb;
  constructor(data?: ComponenteWebInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ComponenteWeb`.
   */
  public static getModelName() {
    return "ComponenteWeb";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ComponenteWeb for dynamic purposes.
  **/
  public static factory(data: ComponenteWebInterface): ComponenteWeb{
    return new ComponenteWeb(data);
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
      name: 'ComponenteWeb',
      plural: 'ComponenteWebs',
      path: 'ComponenteWebs',
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
        "aplicacaoId": {
          name: 'aplicacaoId',
          type: 'number'
        },
      },
      relations: {
        tipoComponenteWebs: {
          name: 'tipoComponenteWebs',
          type: 'TipoComponenteWeb',
          model: 'TipoComponenteWeb',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'componenteWebId'
        },
      }
    }
  }
}

/* tslint:disable */

declare var Object: any;
export interface VisitaAppLogInterface {
  "tipo"?: string;
  "chaveUsuario"?: string;
  "versaoApp"?: string;
  "chavePagina"?: string;
  "dataHora"?: Date;
  "id"?: number;
}

export class VisitaAppLog implements VisitaAppLogInterface {
  "tipo": string;
  "chaveUsuario": string;
  "versaoApp": string;
  "chavePagina": string;
  "dataHora": Date;
  "id": number;
  constructor(data?: VisitaAppLogInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `VisitaAppLog`.
   */
  public static getModelName() {
    return "VisitaAppLog";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of VisitaAppLog for dynamic purposes.
  **/
  public static factory(data: VisitaAppLogInterface): VisitaAppLog{
    return new VisitaAppLog(data);
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
      name: 'VisitaAppLog',
      plural: 'VisitaAppLogs',
      path: 'VisitaAppLogs',
      idName: 'id',
      properties: {
        "tipo": {
          name: 'tipo',
          type: 'string'
        },
        "chaveUsuario": {
          name: 'chaveUsuario',
          type: 'string'
        },
        "versaoApp": {
          name: 'versaoApp',
          type: 'string'
        },
        "chavePagina": {
          name: 'chavePagina',
          type: 'string'
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

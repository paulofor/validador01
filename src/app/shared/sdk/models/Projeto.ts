/* tslint:disable */
import {
  Projeto-Canvas
} from '../index';

declare var Object: any;
export interface ProjetoInterface {
  "nome": string;
  "valor"?: string;
  "mercado"?: string;
  "id"?: number;
  "dor"?: string;
  projeto-Canvases?: Projeto-Canvas[];
}

export class Projeto implements ProjetoInterface {
  "nome": string;
  "valor": string;
  "mercado": string;
  "id": number;
  "dor": string;
  projeto-Canvases: Projeto-Canvas[];
  constructor(data?: ProjetoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Projeto`.
   */
  public static getModelName() {
    return "Projeto";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Projeto for dynamic purposes.
  **/
  public static factory(data: ProjetoInterface): Projeto{
    return new Projeto(data);
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
      name: 'Projeto',
      plural: 'projetos',
      path: 'projetos',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "valor": {
          name: 'valor',
          type: 'string'
        },
        "mercado": {
          name: 'mercado',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "dor": {
          name: 'dor',
          type: 'string'
        },
      },
      relations: {
        projeto-Canvases: {
          name: 'projeto-Canvases',
          type: 'Projeto-Canvas[]',
          model: 'Projeto-Canvas',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'projetoId'
        },
      }
    }
  }
}

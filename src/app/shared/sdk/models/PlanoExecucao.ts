/* tslint:disable */
import {
  ProcessoNegocio,
  DiaSemana
} from '../index';

declare var Object: any;
export interface PlanoExecucaoInterface {
  "tempoEstimado": Date;
  "contexto"?: string;
  "id"?: number;
  "processoNegocioId"?: number;
  "diaSemanaId"?: number;
  processoNegocio?: ProcessoNegocio;
  diaSemana?: DiaSemana;
}

export class PlanoExecucao implements PlanoExecucaoInterface {
  "tempoEstimado": Date;
  "contexto": string;
  "id": number;
  "processoNegocioId": number;
  "diaSemanaId": number;
  processoNegocio: ProcessoNegocio;
  diaSemana: DiaSemana;
  constructor(data?: PlanoExecucaoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PlanoExecucao`.
   */
  public static getModelName() {
    return "PlanoExecucao";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PlanoExecucao for dynamic purposes.
  **/
  public static factory(data: PlanoExecucaoInterface): PlanoExecucao{
    return new PlanoExecucao(data);
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
      name: 'PlanoExecucao',
      plural: 'PlanoExecucaos',
      path: 'PlanoExecucaos',
      idName: 'id',
      properties: {
        "tempoEstimado": {
          name: 'tempoEstimado',
          type: 'Date'
        },
        "contexto": {
          name: 'contexto',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "processoNegocioId": {
          name: 'processoNegocioId',
          type: 'number'
        },
        "diaSemanaId": {
          name: 'diaSemanaId',
          type: 'number'
        },
      },
      relations: {
        processoNegocio: {
          name: 'processoNegocio',
          type: 'ProcessoNegocio',
          model: 'ProcessoNegocio',
          relationType: 'belongsTo',
                  keyFrom: 'processoNegocioId',
          keyTo: 'id'
        },
        diaSemana: {
          name: 'diaSemana',
          type: 'DiaSemana',
          model: 'DiaSemana',
          relationType: 'belongsTo',
                  keyFrom: 'diaSemanaId',
          keyTo: 'id'
        },
      }
    }
  }
}

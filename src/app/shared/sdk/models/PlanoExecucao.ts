/* tslint:disable */
import {
  ProcessoNegocio,
  Semana,
  DiaSemana,
  Contexto,
  VersaoRecurso
} from '../index';

declare var Object: any;
export interface PlanoExecucaoInterface {
  "tempoEstimado": Date;
  "tempoEstimadoStr"?: string;
  "tempoExecucao": Date;
  "tempoExecucaoStr"?: string;
  "id"?: number;
  "processoNegocioId"?: number;
  "semanaId"?: number;
  "diaSemanaId"?: number;
  "contextoId"?: number;
  "versaoRecursoId"?: number;
  processoNegocio?: ProcessoNegocio;
  semana?: Semana;
  diaSemana?: DiaSemana;
  contexto?: Contexto;
  versaoRecurso?: VersaoRecurso;
}

export class PlanoExecucao implements PlanoExecucaoInterface {
  "tempoEstimado": Date;
  "tempoEstimadoStr": string;
  "tempoExecucao": Date;
  "tempoExecucaoStr": string;
  "id": number;
  "processoNegocioId": number;
  "semanaId": number;
  "diaSemanaId": number;
  "contextoId": number;
  "versaoRecursoId": number;
  processoNegocio: ProcessoNegocio;
  semana: Semana;
  diaSemana: DiaSemana;
  contexto: Contexto;
  versaoRecurso: VersaoRecurso;
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
        "tempoEstimadoStr": {
          name: 'tempoEstimadoStr',
          type: 'string'
        },
        "tempoExecucao": {
          name: 'tempoExecucao',
          type: 'Date'
        },
        "tempoExecucaoStr": {
          name: 'tempoExecucaoStr',
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
        "semanaId": {
          name: 'semanaId',
          type: 'number'
        },
        "diaSemanaId": {
          name: 'diaSemanaId',
          type: 'number'
        },
        "contextoId": {
          name: 'contextoId',
          type: 'number'
        },
        "versaoRecursoId": {
          name: 'versaoRecursoId',
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
        semana: {
          name: 'semana',
          type: 'Semana',
          model: 'Semana',
          relationType: 'belongsTo',
                  keyFrom: 'semanaId',
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
        contexto: {
          name: 'contexto',
          type: 'Contexto',
          model: 'Contexto',
          relationType: 'belongsTo',
                  keyFrom: 'contextoId',
          keyTo: 'id'
        },
        versaoRecurso: {
          name: 'versaoRecurso',
          type: 'VersaoRecurso',
          model: 'VersaoRecurso',
          relationType: 'belongsTo',
                  keyFrom: 'versaoRecursoId',
          keyTo: 'id'
        },
      }
    }
  }
}

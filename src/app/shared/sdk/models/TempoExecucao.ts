/* tslint:disable */
import {
  ProjetoMySql,
  ProcessoNegocio,
  ConceitoProduto,
  Semana,
  DiaSemana
} from '../index';

declare var Object: any;
export interface TempoExecucaoInterface {
  "dataReferencia": Date;
  "horaInicio": Date;
  "horaTermino"?: Date;
  "contexto"?: string;
  "id"?: number;
  "projetoMySqlId"?: number;
  "processoNegocioId"?: number;
  "conceitoProdutoId"?: number;
  "semanaId"?: number;
  "diaSemanaId"?: number;
  projetoMySql?: ProjetoMySql;
  processoNegocio?: ProcessoNegocio;
  conceitoProduto?: ConceitoProduto;
  semana?: Semana;
  diaSemana?: DiaSemana;
}

export class TempoExecucao implements TempoExecucaoInterface {
  "dataReferencia": Date;
  "horaInicio": Date;
  "horaTermino": Date;
  "contexto": string;
  "id": number;
  "projetoMySqlId": number;
  "processoNegocioId": number;
  "conceitoProdutoId": number;
  "semanaId": number;
  "diaSemanaId": number;
  projetoMySql: ProjetoMySql;
  processoNegocio: ProcessoNegocio;
  conceitoProduto: ConceitoProduto;
  semana: Semana;
  diaSemana: DiaSemana;
  constructor(data?: TempoExecucaoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TempoExecucao`.
   */
  public static getModelName() {
    return "TempoExecucao";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TempoExecucao for dynamic purposes.
  **/
  public static factory(data: TempoExecucaoInterface): TempoExecucao{
    return new TempoExecucao(data);
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
      name: 'TempoExecucao',
      plural: 'TempoExecucaos',
      path: 'TempoExecucaos',
      idName: 'id',
      properties: {
        "dataReferencia": {
          name: 'dataReferencia',
          type: 'Date'
        },
        "horaInicio": {
          name: 'horaInicio',
          type: 'Date'
        },
        "horaTermino": {
          name: 'horaTermino',
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
        "projetoMySqlId": {
          name: 'projetoMySqlId',
          type: 'number'
        },
        "processoNegocioId": {
          name: 'processoNegocioId',
          type: 'number'
        },
        "conceitoProdutoId": {
          name: 'conceitoProdutoId',
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
      },
      relations: {
        projetoMySql: {
          name: 'projetoMySql',
          type: 'ProjetoMySql',
          model: 'ProjetoMySql',
          relationType: 'belongsTo',
                  keyFrom: 'projetoMySqlId',
          keyTo: 'id'
        },
        processoNegocio: {
          name: 'processoNegocio',
          type: 'ProcessoNegocio',
          model: 'ProcessoNegocio',
          relationType: 'belongsTo',
                  keyFrom: 'processoNegocioId',
          keyTo: 'id'
        },
        conceitoProduto: {
          name: 'conceitoProduto',
          type: 'ConceitoProduto',
          model: 'ConceitoProduto',
          relationType: 'belongsTo',
                  keyFrom: 'conceitoProdutoId',
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
      }
    }
  }
}

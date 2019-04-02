/* tslint:disable */
import {
  EtapaProjeto,
  PlanoExecucao
} from '../index';

declare var Object: any;
export interface ProcessoNegocioInterface {
  "nome"?: string;
  "descricao"?: string;
  "url"?: string;
  "permiteEditar"?: number;
  "ativo"?: number;
  "id"?: number;
  etapaProjetos?: EtapaProjeto[];
  planoExecucaos?: PlanoExecucao[];
}

export class ProcessoNegocio implements ProcessoNegocioInterface {
  "nome": string;
  "descricao": string;
  "url": string;
  "permiteEditar": number;
  "ativo": number;
  "id": number;
  etapaProjetos: EtapaProjeto[];
  planoExecucaos: PlanoExecucao[];
  constructor(data?: ProcessoNegocioInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ProcessoNegocio`.
   */
  public static getModelName() {
    return "ProcessoNegocio";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ProcessoNegocio for dynamic purposes.
  **/
  public static factory(data: ProcessoNegocioInterface): ProcessoNegocio{
    return new ProcessoNegocio(data);
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
      name: 'ProcessoNegocio',
      plural: 'ProcessoNegocios',
      path: 'ProcessoNegocios',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "descricao": {
          name: 'descricao',
          type: 'string'
        },
        "url": {
          name: 'url',
          type: 'string'
        },
        "permiteEditar": {
          name: 'permiteEditar',
          type: 'number'
        },
        "ativo": {
          name: 'ativo',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        etapaProjetos: {
          name: 'etapaProjetos',
          type: 'EtapaProjeto[]',
          model: 'EtapaProjeto',
          relationType: 'hasMany',
          modelThrough: 'ProcessoNegocioEtapaProjeto',
          keyThrough: 'etapaProjetoId',
          keyFrom: 'id',
          keyTo: 'processoNegocioId'
        },
        planoExecucaos: {
          name: 'planoExecucaos',
          type: 'PlanoExecucao[]',
          model: 'PlanoExecucao',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'processoNegocioId'
        },
      }
    }
  }
}

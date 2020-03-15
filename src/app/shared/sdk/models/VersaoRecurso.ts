/* tslint:disable */
import {
  PlanoExecucao,
  RecursoProduto
} from '../index';

declare var Object: any;
export interface VersaoRecursoInterface {
  "tempoConsumido"?: string;
  "tempoPlanejado"?: string;
  "tempoPlanejadoStr"?: string;
  "dataImplantacao"?: Date;
  "mediaIndicadorAntes"?: number;
  "mediaIndicadorDepois"?: number;
  "emExecucao"?: number;
  "nome"?: string;
  "descricao"?: string;
  "tempoPlanejadoSemana"?: string;
  "tempoRestantePlano"?: string;
  "dataPrevista"?: Date;
  "id"?: number;
  "recursoProdutoId"?: number;
  planoExecucaos?: PlanoExecucao[];
  recursoProduto?: RecursoProduto;
}

export class VersaoRecurso implements VersaoRecursoInterface {
  "tempoConsumido": string;
  "tempoPlanejado": string;
  "tempoPlanejadoStr": string;
  "dataImplantacao": Date;
  "mediaIndicadorAntes": number;
  "mediaIndicadorDepois": number;
  "emExecucao": number;
  "nome": string;
  "descricao": string;
  "tempoPlanejadoSemana": string;
  "tempoRestantePlano": string;
  "dataPrevista": Date;
  "id": number;
  "recursoProdutoId": number;
  planoExecucaos: PlanoExecucao[];
  recursoProduto: RecursoProduto;
  constructor(data?: VersaoRecursoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `VersaoRecurso`.
   */
  public static getModelName() {
    return "VersaoRecurso";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of VersaoRecurso for dynamic purposes.
  **/
  public static factory(data: VersaoRecursoInterface): VersaoRecurso{
    return new VersaoRecurso(data);
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
      name: 'VersaoRecurso',
      plural: 'VersaoRecursos',
      path: 'VersaoRecursos',
      idName: 'id',
      properties: {
        "tempoConsumido": {
          name: 'tempoConsumido',
          type: 'string'
        },
        "tempoPlanejado": {
          name: 'tempoPlanejado',
          type: 'string'
        },
        "tempoPlanejadoStr": {
          name: 'tempoPlanejadoStr',
          type: 'string'
        },
        "dataImplantacao": {
          name: 'dataImplantacao',
          type: 'Date'
        },
        "mediaIndicadorAntes": {
          name: 'mediaIndicadorAntes',
          type: 'number'
        },
        "mediaIndicadorDepois": {
          name: 'mediaIndicadorDepois',
          type: 'number'
        },
        "emExecucao": {
          name: 'emExecucao',
          type: 'number'
        },
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "descricao": {
          name: 'descricao',
          type: 'string'
        },
        "tempoPlanejadoSemana": {
          name: 'tempoPlanejadoSemana',
          type: 'string'
        },
        "tempoRestantePlano": {
          name: 'tempoRestantePlano',
          type: 'string'
        },
        "dataPrevista": {
          name: 'dataPrevista',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "recursoProdutoId": {
          name: 'recursoProdutoId',
          type: 'number'
        },
      },
      relations: {
        planoExecucaos: {
          name: 'planoExecucaos',
          type: 'PlanoExecucao[]',
          model: 'PlanoExecucao',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'versaoRecursoId'
        },
        recursoProduto: {
          name: 'recursoProduto',
          type: 'RecursoProduto',
          model: 'RecursoProduto',
          relationType: 'belongsTo',
                  keyFrom: 'recursoProdutoId',
          keyTo: 'id'
        },
      }
    }
  }
}

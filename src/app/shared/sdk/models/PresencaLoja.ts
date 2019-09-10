/* tslint:disable */
import {
  ProjetoMySql,
  ConceitoProduto,
  ClienteExperimental
} from '../index';

declare var Object: any;
export interface PresencaLojaInterface {
  "descricaoBreve"?: string;
  "descricaoCompleta"?: string;
  "tela1"?: string;
  "tela2"?: string;
  "tela3"?: string;
  "tela4"?: string;
  "tela5"?: string;
  "tela6"?: string;
  "tela7"?: string;
  "tela8"?: string;
  "icone512x512"?: string;
  "imagem1024x500"?: string;
  "printLoja"?: string;
  "comentarioPre"?: string;
  "comentarioPos"?: string;
  "dataPre"?: Date;
  "dataPos"?: Date;
  "quantidadeCampanha"?: number;
  "mediaConversao"?: number;
  "mediaTaxaConversao"?: number;
  "mediaCustoConversao"?: number;
  "id"?: number;
  "projetoMySqlId"?: number;
  "conceitoProdutoId"?: number;
  projetoMySql?: ProjetoMySql;
  conceitoProduto?: ConceitoProduto;
  clienteExperimentals?: ClienteExperimental[];
}

export class PresencaLoja implements PresencaLojaInterface {
  "descricaoBreve": string;
  "descricaoCompleta": string;
  "tela1": string;
  "tela2": string;
  "tela3": string;
  "tela4": string;
  "tela5": string;
  "tela6": string;
  "tela7": string;
  "tela8": string;
  "icone512x512": string;
  "imagem1024x500": string;
  "printLoja": string;
  "comentarioPre": string;
  "comentarioPos": string;
  "dataPre": Date;
  "dataPos": Date;
  "quantidadeCampanha": number;
  "mediaConversao": number;
  "mediaTaxaConversao": number;
  "mediaCustoConversao": number;
  "id": number;
  "projetoMySqlId": number;
  "conceitoProdutoId": number;
  projetoMySql: ProjetoMySql;
  conceitoProduto: ConceitoProduto;
  clienteExperimentals: ClienteExperimental[];
  constructor(data?: PresencaLojaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PresencaLoja`.
   */
  public static getModelName() {
    return "PresencaLoja";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PresencaLoja for dynamic purposes.
  **/
  public static factory(data: PresencaLojaInterface): PresencaLoja{
    return new PresencaLoja(data);
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
      name: 'PresencaLoja',
      plural: 'PresencaLojas',
      path: 'PresencaLojas',
      idName: 'id',
      properties: {
        "descricaoBreve": {
          name: 'descricaoBreve',
          type: 'string'
        },
        "descricaoCompleta": {
          name: 'descricaoCompleta',
          type: 'string'
        },
        "tela1": {
          name: 'tela1',
          type: 'string'
        },
        "tela2": {
          name: 'tela2',
          type: 'string'
        },
        "tela3": {
          name: 'tela3',
          type: 'string'
        },
        "tela4": {
          name: 'tela4',
          type: 'string'
        },
        "tela5": {
          name: 'tela5',
          type: 'string'
        },
        "tela6": {
          name: 'tela6',
          type: 'string'
        },
        "tela7": {
          name: 'tela7',
          type: 'string'
        },
        "tela8": {
          name: 'tela8',
          type: 'string'
        },
        "icone512x512": {
          name: 'icone512x512',
          type: 'string'
        },
        "imagem1024x500": {
          name: 'imagem1024x500',
          type: 'string'
        },
        "printLoja": {
          name: 'printLoja',
          type: 'string'
        },
        "comentarioPre": {
          name: 'comentarioPre',
          type: 'string'
        },
        "comentarioPos": {
          name: 'comentarioPos',
          type: 'string'
        },
        "dataPre": {
          name: 'dataPre',
          type: 'Date'
        },
        "dataPos": {
          name: 'dataPos',
          type: 'Date'
        },
        "quantidadeCampanha": {
          name: 'quantidadeCampanha',
          type: 'number'
        },
        "mediaConversao": {
          name: 'mediaConversao',
          type: 'number'
        },
        "mediaTaxaConversao": {
          name: 'mediaTaxaConversao',
          type: 'number'
        },
        "mediaCustoConversao": {
          name: 'mediaCustoConversao',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "projetoMySqlId": {
          name: 'projetoMySqlId',
          type: 'number'
        },
        "conceitoProdutoId": {
          name: 'conceitoProdutoId',
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
        conceitoProduto: {
          name: 'conceitoProduto',
          type: 'ConceitoProduto',
          model: 'ConceitoProduto',
          relationType: 'belongsTo',
                  keyFrom: 'conceitoProdutoId',
          keyTo: 'id'
        },
        clienteExperimentals: {
          name: 'clienteExperimentals',
          type: 'ClienteExperimental[]',
          model: 'ClienteExperimental',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'presencaLojaId'
        },
      }
    }
  }
}

/* tslint:disable */
import {
  ConceitoProduto,
  ProjetoMySql,
  Visitante,
  RespostaVersao
} from '../index';

declare var Object: any;
export interface VersaoAppInterface {
  "nome"?: string;
  "objetivo"?: string;
  "codigoVersao"?: string;
  "permiteEdicao"?: number;
  "pacoteApp"?: string;
  "id"?: number;
  "conceitoProdutoId"?: number;
  "projetoMySqlId"?: number;
  conceitoProduto?: ConceitoProduto;
  projetoMySql?: ProjetoMySql;
  visitantes?: Visitante[];
  respostaVersaos?: RespostaVersao[];
}

export class VersaoApp implements VersaoAppInterface {
  "nome": string;
  "objetivo": string;
  "codigoVersao": string;
  "permiteEdicao": number;
  "pacoteApp": string;
  "id": number;
  "conceitoProdutoId": number;
  "projetoMySqlId": number;
  conceitoProduto: ConceitoProduto;
  projetoMySql: ProjetoMySql;
  visitantes: Visitante[];
  respostaVersaos: RespostaVersao[];
  constructor(data?: VersaoAppInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `VersaoApp`.
   */
  public static getModelName() {
    return "VersaoApp";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of VersaoApp for dynamic purposes.
  **/
  public static factory(data: VersaoAppInterface): VersaoApp{
    return new VersaoApp(data);
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
      name: 'VersaoApp',
      plural: 'VersaoApps',
      path: 'VersaoApps',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "objetivo": {
          name: 'objetivo',
          type: 'string'
        },
        "codigoVersao": {
          name: 'codigoVersao',
          type: 'string'
        },
        "permiteEdicao": {
          name: 'permiteEdicao',
          type: 'number'
        },
        "pacoteApp": {
          name: 'pacoteApp',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "conceitoProdutoId": {
          name: 'conceitoProdutoId',
          type: 'number'
        },
        "projetoMySqlId": {
          name: 'projetoMySqlId',
          type: 'number'
        },
      },
      relations: {
        conceitoProduto: {
          name: 'conceitoProduto',
          type: 'ConceitoProduto',
          model: 'ConceitoProduto',
          relationType: 'belongsTo',
                  keyFrom: 'conceitoProdutoId',
          keyTo: 'id'
        },
        projetoMySql: {
          name: 'projetoMySql',
          type: 'ProjetoMySql',
          model: 'ProjetoMySql',
          relationType: 'belongsTo',
                  keyFrom: 'projetoMySqlId',
          keyTo: 'id'
        },
        visitantes: {
          name: 'visitantes',
          type: 'Visitante[]',
          model: 'Visitante',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'versaoAppId'
        },
        respostaVersaos: {
          name: 'respostaVersaos',
          type: 'RespostaVersao[]',
          model: 'RespostaVersao',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'versaoAppId'
        },
      }
    }
  }
}

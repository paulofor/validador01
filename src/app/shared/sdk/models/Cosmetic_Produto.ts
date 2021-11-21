/* tslint:disable */

declare var Object: any;
export interface Cosmetic_ProdutoInterface {
  "idProduto"?: number;
  "nome"?: string;
  "urlOrigem"?: string;
  "notaAvaliacao"?: number;
  "contaAvaliacao"?: number;
  "posicaoMedia21"?: number;
  "precoAtual"?: number;
  "menorPreco"?: number;
  "conta21"?: number;
  "idNaturezaProduto"?: number;
  "valorPontoNota"?: number;
}

export class Cosmetic_Produto implements Cosmetic_ProdutoInterface {
  "idProduto": number;
  "nome": string;
  "urlOrigem": string;
  "notaAvaliacao": number;
  "contaAvaliacao": number;
  "posicaoMedia21": number;
  "precoAtual": number;
  "menorPreco": number;
  "conta21": number;
  "idNaturezaProduto": number;
  "valorPontoNota": number;
  constructor(data?: Cosmetic_ProdutoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Cosmetic_Produto`.
   */
  public static getModelName() {
    return "Cosmetic_Produto";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Cosmetic_Produto for dynamic purposes.
  **/
  public static factory(data: Cosmetic_ProdutoInterface): Cosmetic_Produto{
    return new Cosmetic_Produto(data);
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
      name: 'Cosmetic_Produto',
      plural: 'Cosmetic_Produto',
      path: 'Cosmetic_Produto',
      idName: 'id',
      properties: {
        "idProduto": {
          name: 'idProduto',
          type: 'number'
        },
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "urlOrigem": {
          name: 'urlOrigem',
          type: 'string'
        },
        "notaAvaliacao": {
          name: 'notaAvaliacao',
          type: 'number'
        },
        "contaAvaliacao": {
          name: 'contaAvaliacao',
          type: 'number'
        },
        "posicaoMedia21": {
          name: 'posicaoMedia21',
          type: 'number'
        },
        "precoAtual": {
          name: 'precoAtual',
          type: 'number'
        },
        "menorPreco": {
          name: 'menorPreco',
          type: 'number'
        },
        "conta21": {
          name: 'conta21',
          type: 'number'
        },
        "idNaturezaProduto": {
          name: 'idNaturezaProduto',
          type: 'number'
        },
        "valorPontoNota": {
          name: 'valorPontoNota',
          type: 'number'
        },
        
      },
      relations: {
      }
    }
  }
}

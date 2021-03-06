/* tslint:disable */

declare var Object: any;
export interface Cosmetic_OportunidadeDiaInterface {
  "precoVendaAtual"?: number;
  "precoVendaAnterior"?: number;
  "nomeProduto"?: string;
  "urlProduto"?: string;
  "nomeMarca"?: string;
  "idProduto"?: number;
  "nomeLojaVirtual"?: string;
  "imagemProduto"?: string;
  "dataInsercao"?: Date;
  "dataAlteracao"?: Date;
  "precoSugestao"?: number;
  "posicaoProduto"?: number;
  "dataUltimaPrecoAnterior"?: Date;
  "percentualAjusteVenda"?: number;
  "dataInicioPrecoAtual"?: Date;
  "id"?: number;
}

export class Cosmetic_OportunidadeDia implements Cosmetic_OportunidadeDiaInterface {
  "precoVendaAtual": number;
  "precoVendaAnterior": number;
  "nomeProduto": string;
  "urlProduto": string;
  "nomeMarca": string;
  "idProduto": number;
  "nomeLojaVirtual": string;
  "imagemProduto": string;
  "dataInsercao": Date;
  "dataAlteracao": Date;
  "precoSugestao": number;
  "posicaoProduto": number;
  "dataUltimaPrecoAnterior": Date;
  "percentualAjusteVenda": number;
  "dataInicioPrecoAtual": Date;
  "id": number;
  constructor(data?: Cosmetic_OportunidadeDiaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Cosmetic_OportunidadeDia`.
   */
  public static getModelName() {
    return "Cosmetic_OportunidadeDia";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Cosmetic_OportunidadeDia for dynamic purposes.
  **/
  public static factory(data: Cosmetic_OportunidadeDiaInterface): Cosmetic_OportunidadeDia{
    return new Cosmetic_OportunidadeDia(data);
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
      name: 'Cosmetic_OportunidadeDia',
      plural: 'Cosmetic_OportunidadeDia',
      path: 'Cosmetic_OportunidadeDia',
      idName: 'id',
      properties: {
        "precoVendaAtual": {
          name: 'precoVendaAtual',
          type: 'number'
        },
        "precoVendaAnterior": {
          name: 'precoVendaAnterior',
          type: 'number'
        },
        "nomeProduto": {
          name: 'nomeProduto',
          type: 'string'
        },
        "urlProduto": {
          name: 'urlProduto',
          type: 'string'
        },
        "nomeMarca": {
          name: 'nomeMarca',
          type: 'string'
        },
        "idProduto": {
          name: 'idProduto',
          type: 'number'
        },
        "nomeLojaVirtual": {
          name: 'nomeLojaVirtual',
          type: 'string'
        },
        "imagemProduto": {
          name: 'imagemProduto',
          type: 'string'
        },
        "dataInsercao": {
          name: 'dataInsercao',
          type: 'Date'
        },
        "dataAlteracao": {
          name: 'dataAlteracao',
          type: 'Date'
        },
        "precoSugestao": {
          name: 'precoSugestao',
          type: 'number'
        },
        "posicaoProduto": {
          name: 'posicaoProduto',
          type: 'number'
        },
        "dataUltimaPrecoAnterior": {
          name: 'dataUltimaPrecoAnterior',
          type: 'Date'
        },
        "percentualAjusteVenda": {
          name: 'percentualAjusteVenda',
          type: 'number'
        },
        "dataInicioPrecoAtual": {
          name: 'dataInicioPrecoAtual',
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

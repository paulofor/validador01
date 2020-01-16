/* tslint:disable */

declare var Object: any;
export interface MetricaCampanhaInterface {
  "campanhaAdsId"?: number;
  "dia"?: Date;
  "impressao"?: number;
  "accImpressao"?: number;
  "ctr"?: number;
  "accCtr"?: number;
  "cpc"?: number;
  "accCpc"?: number;
  "conversao"?: number;
  "accConversao"?: number;
  "custoConversao"?: number;
  "accCustoConversao"?: number;
  "taxaConversao"?: number;
  "accTaxaConversao"?: number;
  "id"?: number;
}

export class MetricaCampanha implements MetricaCampanhaInterface {
  "campanhaAdsId": number;
  "dia": Date;
  "impressao": number;
  "accImpressao": number;
  "ctr": number;
  "accCtr": number;
  "cpc": number;
  "accCpc": number;
  "conversao": number;
  "accConversao": number;
  "custoConversao": number;
  "accCustoConversao": number;
  "taxaConversao": number;
  "accTaxaConversao": number;
  "id": number;
  constructor(data?: MetricaCampanhaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MetricaCampanha`.
   */
  public static getModelName() {
    return "MetricaCampanha";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MetricaCampanha for dynamic purposes.
  **/
  public static factory(data: MetricaCampanhaInterface): MetricaCampanha{
    return new MetricaCampanha(data);
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
      name: 'MetricaCampanha',
      plural: 'MetricaCampanhas',
      path: 'MetricaCampanhas',
      idName: 'id',
      properties: {
        "campanhaAdsId": {
          name: 'campanhaAdsId',
          type: 'number'
        },
        "dia": {
          name: 'dia',
          type: 'Date'
        },
        "impressao": {
          name: 'impressao',
          type: 'number'
        },
        "accImpressao": {
          name: 'accImpressao',
          type: 'number'
        },
        "ctr": {
          name: 'ctr',
          type: 'number'
        },
        "accCtr": {
          name: 'accCtr',
          type: 'number'
        },
        "cpc": {
          name: 'cpc',
          type: 'number'
        },
        "accCpc": {
          name: 'accCpc',
          type: 'number'
        },
        "conversao": {
          name: 'conversao',
          type: 'number'
        },
        "accConversao": {
          name: 'accConversao',
          type: 'number'
        },
        "custoConversao": {
          name: 'custoConversao',
          type: 'number'
        },
        "accCustoConversao": {
          name: 'accCustoConversao',
          type: 'number'
        },
        "taxaConversao": {
          name: 'taxaConversao',
          type: 'number'
        },
        "accTaxaConversao": {
          name: 'accTaxaConversao',
          type: 'number'
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

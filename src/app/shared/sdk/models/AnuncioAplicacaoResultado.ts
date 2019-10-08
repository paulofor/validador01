/* tslint:disable */

declare var Object: any;
export interface AnuncioAplicacaoResultadoInterface {
  "idAds1"?: string;
  "idAds2"?: string;
  "conversao1"?: number;
  "ctr1"?: number;
  "id"?: number;
}

export class AnuncioAplicacaoResultado implements AnuncioAplicacaoResultadoInterface {
  "idAds1": string;
  "idAds2": string;
  "conversao1": number;
  "ctr1": number;
  "id": number;
  constructor(data?: AnuncioAplicacaoResultadoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `AnuncioAplicacaoResultado`.
   */
  public static getModelName() {
    return "AnuncioAplicacaoResultado";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of AnuncioAplicacaoResultado for dynamic purposes.
  **/
  public static factory(data: AnuncioAplicacaoResultadoInterface): AnuncioAplicacaoResultado{
    return new AnuncioAplicacaoResultado(data);
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
      name: 'AnuncioAplicacaoResultado',
      plural: 'AnuncioAplicacaoResultados',
      path: 'AnuncioAplicacaoResultados',
      idName: 'id',
      properties: {
        "idAds1": {
          name: 'idAds1',
          type: 'string'
        },
        "idAds2": {
          name: 'idAds2',
          type: 'string'
        },
        "conversao1": {
          name: 'conversao1',
          type: 'number'
        },
        "ctr1": {
          name: 'ctr1',
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

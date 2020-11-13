/* tslint:disable */

declare var Object: any;
export interface ValorEtapaFunilVersaoAppInterface {
  "versaoAppId"?: number;
  "etapaClienteId"?: number;
  "valor"?: number;
  "taxa"?: number;
  "custo"?: number;
  "posicaoEtapa"?: number;
}

export class ValorEtapaFunilVersaoApp implements ValorEtapaFunilVersaoAppInterface {
  "versaoAppId": number;
  "etapaClienteId": number;
  "valor": number;
  "taxa": number;
  "custo": number;
  "posicaoEtapa": number;
  constructor(data?: ValorEtapaFunilVersaoAppInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ValorEtapaFunilVersaoApp`.
   */
  public static getModelName() {
    return "ValorEtapaFunilVersaoApp";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ValorEtapaFunilVersaoApp for dynamic purposes.
  **/
  public static factory(data: ValorEtapaFunilVersaoAppInterface): ValorEtapaFunilVersaoApp{
    return new ValorEtapaFunilVersaoApp(data);
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
      name: 'ValorEtapaFunilVersaoApp',
      plural: 'ValorEtapaFunilVersaoApps',
      path: 'ValorEtapaFunilVersaoApps',
      idName: 'versaoAppId',
      properties: {
        "versaoAppId": {
          name: 'versaoAppId',
          type: 'number'
        },
        "etapaClienteId": {
          name: 'etapaClienteId',
          type: 'number'
        },
        "valor": {
          name: 'valor',
          type: 'number'
        },
        "taxa": {
          name: 'taxa',
          type: 'number'
        },
        "custo": {
          name: 'custo',
          type: 'number'
        },
        "posicaoEtapa": {
          name: 'posicaoEtapa',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}

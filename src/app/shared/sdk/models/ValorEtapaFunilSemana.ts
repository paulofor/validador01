/* tslint:disable */

declare var Object: any;
export interface ValorEtapaFunilSemanaInterface {
  "semanaId"?: number;
  "projetoMySqlId"?: number;
  "valor"?: number;
  "taxa"?: number;
  "custo"?: number;
  "posicaoEtapa"?: number;
}

export class ValorEtapaFunilSemana implements ValorEtapaFunilSemanaInterface {
  "semanaId": number;
  "projetoMySqlId": number;
  "valor": number;
  "taxa": number;
  "custo": number;
  "posicaoEtapa": number;
  constructor(data?: ValorEtapaFunilSemanaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ValorEtapaFunilSemana`.
   */
  public static getModelName() {
    return "ValorEtapaFunilSemana";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ValorEtapaFunilSemana for dynamic purposes.
  **/
  public static factory(data: ValorEtapaFunilSemanaInterface): ValorEtapaFunilSemana{
    return new ValorEtapaFunilSemana(data);
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
      name: 'ValorEtapaFunilSemana',
      plural: 'ValorEtapaFunilSemanas',
      path: 'ValorEtapaFunilSemanas',
      idName: 'semanaId',
      properties: {
        "semanaId": {
          name: 'semanaId',
          type: 'number'
        },
        "projetoMySqlId": {
          name: 'projetoMySqlId',
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

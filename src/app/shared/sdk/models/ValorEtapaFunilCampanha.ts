/* tslint:disable */
import {
  EtapaCliente
} from '../index';

declare var Object: any;
export interface ValorEtapaFunilCampanhaInterface {
  "campanhaAdsId"?: number;
  "etapaClienteId"?: number;
  "valor"?: number;
  "taxa"?: number;
  "custo"?: number;
  "posicaoEtapa"?: number;
  etapaCliente?: EtapaCliente;
}

export class ValorEtapaFunilCampanha implements ValorEtapaFunilCampanhaInterface {
  "campanhaAdsId": number;
  "etapaClienteId": number;
  "valor": number;
  "taxa": number;
  "custo": number;
  "posicaoEtapa": number;
  etapaCliente: EtapaCliente;
  constructor(data?: ValorEtapaFunilCampanhaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ValorEtapaFunilCampanha`.
   */
  public static getModelName() {
    return "ValorEtapaFunilCampanha";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ValorEtapaFunilCampanha for dynamic purposes.
  **/
  public static factory(data: ValorEtapaFunilCampanhaInterface): ValorEtapaFunilCampanha{
    return new ValorEtapaFunilCampanha(data);
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
      name: 'ValorEtapaFunilCampanha',
      plural: 'ValorEtapaFunilCampanhas',
      path: 'ValorEtapaFunilCampanhas',
      idName: 'campanhaAdsId',
      properties: {
        "campanhaAdsId": {
          name: 'campanhaAdsId',
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
        etapaCliente: {
          name: 'etapaCliente',
          type: 'EtapaCliente',
          model: 'EtapaCliente',
          relationType: 'belongsTo',
                  keyFrom: 'etapaClienteId',
          keyTo: 'id'
        },
      }
    }
  }
}

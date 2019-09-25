/* tslint:disable */
import {
  ItemValorApp
} from '../index';

declare var Object: any;
export interface ValorVersaoInterface {
  "id"?: number;
  "itemValorAppId"?: number;
  "versaoAppId"?: number;
  itemValorApp?: ItemValorApp;
}

export class ValorVersao implements ValorVersaoInterface {
  "id": number;
  "itemValorAppId": number;
  "versaoAppId": number;
  itemValorApp: ItemValorApp;
  constructor(data?: ValorVersaoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ValorVersao`.
   */
  public static getModelName() {
    return "ValorVersao";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ValorVersao for dynamic purposes.
  **/
  public static factory(data: ValorVersaoInterface): ValorVersao{
    return new ValorVersao(data);
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
      name: 'ValorVersao',
      plural: 'ValorVersaos',
      path: 'ValorVersaos',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "itemValorAppId": {
          name: 'itemValorAppId',
          type: 'number'
        },
        "versaoAppId": {
          name: 'versaoAppId',
          type: 'number'
        },
      },
      relations: {
        itemValorApp: {
          name: 'itemValorApp',
          type: 'ItemValorApp',
          model: 'ItemValorApp',
          relationType: 'belongsTo',
                  keyFrom: 'itemValorAppId',
          keyTo: 'id'
        },
      }
    }
  }
}

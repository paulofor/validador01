/* tslint:disable */

declare var Object: any;
export interface DispositivoUsuarioDesenInterface {
  "id"?: number;
  "usuarioProdutoDesenId"?: number;
}

export class DispositivoUsuarioDesen implements DispositivoUsuarioDesenInterface {
  "id": number;
  "usuarioProdutoDesenId": number;
  constructor(data?: DispositivoUsuarioDesenInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DispositivoUsuarioDesen`.
   */
  public static getModelName() {
    return "DispositivoUsuarioDesen";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DispositivoUsuarioDesen for dynamic purposes.
  **/
  public static factory(data: DispositivoUsuarioDesenInterface): DispositivoUsuarioDesen{
    return new DispositivoUsuarioDesen(data);
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
      name: 'DispositivoUsuarioDesen',
      plural: 'DispositivoUsuarioDesens',
      path: 'DispositivoUsuarioDesens',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "usuarioProdutoDesenId": {
          name: 'usuarioProdutoDesenId',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}

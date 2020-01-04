/* tslint:disable */

declare var Object: any;
export interface DsUsuarioInterface {
  "dia"?: Date;
  "projetoMySqlId"?: number;
  "qtdeInstalacao"?: number;
  "qtdeAtivoNotificacao"?: number;
  "qtdeRespostaNotificacao"?: number;
  "qtdePaginaPrincipal"?: number;
  "qtdeAbreAplicacao"?: number;
  "qtdeNotificacao"?: number;
  "numMes"?: number;
  "numAno"?: number;
  "qtdeAssinatura"?: number;
  "qtdeTotalAssinatura"?: number;
  "qtdeFluxoAssinatura"?: number;
  "qtdePeriodoGratuito"?: number;
}

export class DsUsuario implements DsUsuarioInterface {
  "dia": Date;
  "projetoMySqlId": number;
  "qtdeInstalacao": number;
  "qtdeAtivoNotificacao": number;
  "qtdeRespostaNotificacao": number;
  "qtdePaginaPrincipal": number;
  "qtdeAbreAplicacao": number;
  "qtdeNotificacao": number;
  "numMes": number;
  "numAno": number;
  "qtdeAssinatura": number;
  "qtdeTotalAssinatura": number;
  "qtdeFluxoAssinatura": number;
  "qtdePeriodoGratuito": number;
  constructor(data?: DsUsuarioInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DsUsuario`.
   */
  public static getModelName() {
    return "DsUsuario";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DsUsuario for dynamic purposes.
  **/
  public static factory(data: DsUsuarioInterface): DsUsuario{
    return new DsUsuario(data);
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
      name: 'DsUsuario',
      plural: 'DsUsuarios',
      path: 'DsUsuarios',
      idName: 'dia',
      properties: {
        "dia": {
          name: 'dia',
          type: 'Date'
        },
        "projetoMySqlId": {
          name: 'projetoMySqlId',
          type: 'number'
        },
        "qtdeInstalacao": {
          name: 'qtdeInstalacao',
          type: 'number'
        },
        "qtdeAtivoNotificacao": {
          name: 'qtdeAtivoNotificacao',
          type: 'number'
        },
        "qtdeRespostaNotificacao": {
          name: 'qtdeRespostaNotificacao',
          type: 'number'
        },
        "qtdePaginaPrincipal": {
          name: 'qtdePaginaPrincipal',
          type: 'number'
        },
        "qtdeAbreAplicacao": {
          name: 'qtdeAbreAplicacao',
          type: 'number'
        },
        "qtdeNotificacao": {
          name: 'qtdeNotificacao',
          type: 'number'
        },
        "numMes": {
          name: 'numMes',
          type: 'number'
        },
        "numAno": {
          name: 'numAno',
          type: 'number'
        },
        "qtdeAssinatura": {
          name: 'qtdeAssinatura',
          type: 'number'
        },
        "qtdeTotalAssinatura": {
          name: 'qtdeTotalAssinatura',
          type: 'number'
        },
        "qtdeFluxoAssinatura": {
          name: 'qtdeFluxoAssinatura',
          type: 'number'
        },
        "qtdePeriodoGratuito": {
          name: 'qtdePeriodoGratuito',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}

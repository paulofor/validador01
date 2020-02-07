/* tslint:disable */

declare var Object: any;
export interface VersaoRecursoInterface {
  "tempoConsumido"?: Date;
  "tempoPlanejado"?: Date;
  "dataImplantacao"?: Date;
  "mediaIndicadorAntes"?: number;
  "mediaIndicadorDepois"?: number;
  "emExecucao"?: number;
  "nome"?: string;
  "descricao"?: string;
  "id"?: number;
  "recursoProdutoId"?: number;
}

export class VersaoRecurso implements VersaoRecursoInterface {
  "tempoConsumido": Date;
  "tempoPlanejado": Date;
  "dataImplantacao": Date;
  "mediaIndicadorAntes": number;
  "mediaIndicadorDepois": number;
  "emExecucao": number;
  "nome": string;
  "descricao": string;
  "id": number;
  "recursoProdutoId": number;
  constructor(data?: VersaoRecursoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `VersaoRecurso`.
   */
  public static getModelName() {
    return "VersaoRecurso";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of VersaoRecurso for dynamic purposes.
  **/
  public static factory(data: VersaoRecursoInterface): VersaoRecurso{
    return new VersaoRecurso(data);
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
      name: 'VersaoRecurso',
      plural: 'VersaoRecursos',
      path: 'VersaoRecursos',
      idName: 'id',
      properties: {
        "tempoConsumido": {
          name: 'tempoConsumido',
          type: 'Date'
        },
        "tempoPlanejado": {
          name: 'tempoPlanejado',
          type: 'Date'
        },
        "dataImplantacao": {
          name: 'dataImplantacao',
          type: 'Date'
        },
        "mediaIndicadorAntes": {
          name: 'mediaIndicadorAntes',
          type: 'number'
        },
        "mediaIndicadorDepois": {
          name: 'mediaIndicadorDepois',
          type: 'number'
        },
        "emExecucao": {
          name: 'emExecucao',
          type: 'number'
        },
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "descricao": {
          name: 'descricao',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "recursoProdutoId": {
          name: 'recursoProdutoId',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}

/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Projeto } from '../../models/Projeto';
import { ProjetoCanvas } from '../../models/ProjetoCanvas';
import { ProjetoMySql } from '../../models/ProjetoMySql';
import { ProjetoCanvasMySql } from '../../models/ProjetoCanvasMySql';
import { MvpCanvasMySql } from '../../models/MvpCanvasMySql';
import { GanhoDorCanvasMySql } from '../../models/GanhoDorCanvasMySql';
import { PaginaValidacaoWeb } from '../../models/PaginaValidacaoWeb';
import { ItemValidacaoPagina } from '../../models/ItemValidacaoPagina';
import { RegistroInteresse } from '../../models/RegistroInteresse';
import { ProjetoExemplo } from '../../models/ProjetoExemplo';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Projeto: Projeto,
    ProjetoCanvas: ProjetoCanvas,
    ProjetoMySql: ProjetoMySql,
    ProjetoCanvasMySql: ProjetoCanvasMySql,
    MvpCanvasMySql: MvpCanvasMySql,
    GanhoDorCanvasMySql: GanhoDorCanvasMySql,
    PaginaValidacaoWeb: PaginaValidacaoWeb,
    ItemValidacaoPagina: ItemValidacaoPagina,
    RegistroInteresse: RegistroInteresse,
    ProjetoExemplo: ProjetoExemplo,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}

/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { ExemploModelo } from '../../models/ExemploModelo';
import { TreinoAcademia_GrupoMuscular } from '../../models/TreinoAcademia_GrupoMuscular';
import { TreinoAcademia_SerieTreino } from '../../models/TreinoAcademia_SerieTreino';
import { TreinoAcademia_Exercicio } from '../../models/TreinoAcademia_Exercicio';
import { TreinoAcademia_ExecucaoItemSerie } from '../../models/TreinoAcademia_ExecucaoItemSerie';
import { TreinoAcademia_CargaPlanejada } from '../../models/TreinoAcademia_CargaPlanejada';
import { TreinoAcademia_DiaTreino } from '../../models/TreinoAcademia_DiaTreino';
import { TreinoAcademia_ItemSerie } from '../../models/TreinoAcademia_ItemSerie';
import { TreinoAcademia_RegistroPeso } from '../../models/TreinoAcademia_RegistroPeso';
import { TreinoAcademia_Usuario } from '../../models/TreinoAcademia_Usuario';
import { TesteBase } from '../../models/TesteBase';
import { TreinoAcademia_ExecucaoCarga } from '../../models/TreinoAcademia_ExecucaoCarga';
import { PagSeguro } from '../../models/PagSeguro';
import { TreinoAcademia_Acao } from '../../models/TreinoAcademia_Acao';
import { Cosmetic_OportunidadeDia } from '../../models/Cosmetic_OportunidadeDia';
import { Cosmetic_Usuario } from '../../models/Cosmetic_Usuario';
import { Cosmetic_Acao } from '../../models/Cosmetic_Acao';
import { Cosmetic_Visitante } from '../../models/Cosmetic_Visitante';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    ExemploModelo: ExemploModelo,
    TreinoAcademia_GrupoMuscular: TreinoAcademia_GrupoMuscular,
    TreinoAcademia_SerieTreino: TreinoAcademia_SerieTreino,
    TreinoAcademia_Exercicio: TreinoAcademia_Exercicio,
    TreinoAcademia_ExecucaoItemSerie: TreinoAcademia_ExecucaoItemSerie,
    TreinoAcademia_CargaPlanejada: TreinoAcademia_CargaPlanejada,
    TreinoAcademia_DiaTreino: TreinoAcademia_DiaTreino,
    TreinoAcademia_ItemSerie: TreinoAcademia_ItemSerie,
    TreinoAcademia_RegistroPeso: TreinoAcademia_RegistroPeso,
    TreinoAcademia_Usuario: TreinoAcademia_Usuario,
    TesteBase: TesteBase,
    TreinoAcademia_ExecucaoCarga: TreinoAcademia_ExecucaoCarga,
    PagSeguro: PagSeguro,
    TreinoAcademia_Acao: TreinoAcademia_Acao,
    Cosmetic_OportunidadeDia: Cosmetic_OportunidadeDia,
    Cosmetic_Usuario: Cosmetic_Usuario,
    Cosmetic_Acao: Cosmetic_Acao,
    Cosmetic_Visitante: Cosmetic_Visitante,
    
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

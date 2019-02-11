import { Injectable } from '@angular/core';
import { BaseLoopBackApi, LoopBackConfig } from '../shared/sdk';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcessoNegocioService extends BaseLoopBackApi {

 

  public AtualizaListaComPlanoPost(listaProcesso: any, customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
        "/ProcessoNegocios/autalizaListaComPlano";
    let _routeParams: any = {};
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof listaProcesso !== 'undefined' && listaProcesso !== null) {
        _postBody = {
            listaProcesso: { 'listaProcesso': listaProcesso }
        };
    }
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
}


/**
 * The name of the model represented by this $resource,
 * i.e. `PlanoExecucao`.
 */
public getModelName() {
    return "ProcessoNegocio";
}
}

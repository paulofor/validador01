import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { MatDialog } from '@angular/material';
import { CampanhaAdsApi, CampanhaAds } from '../shared/sdk';
import { switchMap } from 'rxjs/operators';
import { EscolhedorAnuncioParaCampanhaComponent } from '../escolhedor-anuncio-para-campanha/escolhedor-anuncio-para-campanha.component';

@Component({
  selector: 'app-escolhe-anuncio-para-campanha',
  templateUrl: './escolhe-anuncio-para-campanha.component.html',
  styleUrls: ['./escolhe-anuncio-para-campanha.component.scss']
})
export class EscolheAnuncioParaCampanhaComponent implements OnInit {

  consulta = {"include" : 
                {"relation" : "campanhaAnuncioResultados" , "scope" : { "include" : "anuncioAds"}
                } 
             };


  @Input() campanha : CampanhaAds;

  constructor(private route: ActivatedRoute, private dialog: MatDialog, 
            private srvCampanha: CampanhaAdsApi, private router: Router ) { }

  ngOnInit() {
    this.atualizaCampanha();
  }

  atualizaCampanha() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.srvCampanha.findById(this.campanha.id, this.consulta)
      )).subscribe((result: CampanhaAds) => {
        this.campanha = result;
      })
  }
 


  openDialog(pagina) {
    console.log('Pagina:', pagina);
    this.dialog.afterAllClosed.subscribe(result => {
      console.log('Dialog result: ${result}'); 
      this.atualizaCampanha();
    });
    this.dialog.open(EscolhedorAnuncioParaCampanhaComponent, {
      width: '800px',
      data: {
        campanha: this.campanha
      }
    });
  }

}

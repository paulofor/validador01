import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgStyle} from '@angular/common';
import {FILE_UPLOAD_DIRECTIVES, FileUploader} from '../../../ng2-file-upload';

// const URL = '/api/';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-arquivos',
  templateUrl: './arquivos.component.html',
  styleUrls: ['./arquivos.component.scss'],
  directives: [FILE_UPLOAD_DIRECTIVES, NgClass, NgStyle, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class ArquivosComponent implements OnInit {


  public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;
 
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
 
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

  constructor() { }

  ngOnInit() {
  }

}


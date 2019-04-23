import { Component, OnInit } from '@angular/core';
import { FileHolder, UploadMetadata } from 'angular2-image-upload';
import { URL_UPLOAD } from '../constantes/base.url';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-angular2-image-upload',
  templateUrl: './angular2-image-upload.component.html',
  styleUrls: ['./angular2-image-upload.component.scss']
})
export class Angular2ImageUploadComponent implements OnInit {


  url = 'http://localhost:21101/api/containers/container1/upload?id=215';
  //url = 'http://validacao.kinghost.net:21101/api/containers/container1/upload'
  //url = URL_UPLOAD;

  private fileCounter = 0;

  constructor() { }

  ngOnInit() {
  }

  onUploadFinished(item: FileHolder) {
    console.log('onUploadFinished', item.serverResponse.response.body.result.files.image[0].name);
  }
  
  onRemoved(file: FileHolder) {
    console.log(file);
  }
  
  onUploadStateChanged(state: boolean) {
    console.log(state);
  }

  onBeforeUpload = (metadata: UploadMetadata) => {
    console.log('Metadata: ' , metadata);
    //metadata.formData.name = '';

  
    //this.fileCounter++;
    return metadata;
  };

}

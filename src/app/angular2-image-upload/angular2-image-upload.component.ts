import { Component, OnInit } from '@angular/core';
import { FileHolder } from 'angular2-image-upload';

@Component({
  selector: 'app-angular2-image-upload',
  templateUrl: './angular2-image-upload.component.html',
  styleUrls: ['./angular2-image-upload.component.scss']
})
export class Angular2ImageUploadComponent implements OnInit {


  url = 'http://localhost:21101/api/containers/container1/upload';

  constructor() { }

  ngOnInit() {
  }

  onUploadFinished(file: FileHolder) {
    console.log(file);
  }
  
  onRemoved(file: FileHolder) {
    console.log(file);
  }
  
  onUploadStateChanged(state: boolean) {
    console.log(state);
  }

}

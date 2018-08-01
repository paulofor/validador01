// https://www.npmjs.com/package/ngx-file-drop


import { Component, OnInit } from '@angular/core';
import { UploadFile, UploadEvent, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { HttpHeaders } from '@angular/common/http';

import { ContainerApi } from '../shared/sdk/services/custom';
 


@Component({
  selector: 'app-file-upload-ngx-file-drop',
  templateUrl: './file-upload-ngx-file-drop.component.html',
  styleUrls: ['./file-upload-ngx-file-drop.component.scss']
})
export class FileUploadNgxFileDropComponent implements OnInit {

  constructor(private containerSrv: ContainerApi) { }

  ngOnInit() {
  }

  public files: UploadFile[] =  [];
 
  public dropped(event: UploadEvent) {
    this.files = event.files;
    for (const droppedFile of event.files) {
 
      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
 
          // Here you can access the real file
          console.log(droppedFile.relativePath, file);
 
          
          // You could upload it like this:
          const formData = new FormData()
          formData.append('logo', file, droppedFile.relativePath)
 
          // Headers
          const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })
 
          this.containerSrv.upload("container", formData)
          .subscribe(data => {
            // Sanitized logo returned from backend
          })

          /*
          this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
          .subscribe(data => {
            // Sanitized logo returned from backend
          })
          */
          
 
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }
 
  public fileOver(event){
    console.log(event);
  }
 
  public fileLeave(event){
    console.log(event);
  }

}

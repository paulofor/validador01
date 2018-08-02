/*
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DialogComponent]
})
export class UploadModule { }
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { UploadComponent } from './dialog/dialog.component';
import { MatButtonModule, MatDialogModule, MatListModule, MatProgressBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { DialogComponent } from './dialog/dialog.component';
import { UploadComponent } from './upload/upload.component';
import { UploadService } from './upload.service';

@NgModule({
  imports: [CommonModule, MatButtonModule, FlexLayoutModule, MatDialogModule, MatListModule, HttpClientModule, BrowserAnimationsModule, MatProgressBarModule],
  declarations: [DialogComponent, UploadComponent],
  exports: [DialogComponent],
  entryComponents: [DialogComponent],
  providers: [UploadService]
})
export class UploadModule {}
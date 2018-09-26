import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from 'src/app/main/main.component';
import {FormsModule} from '@angular/forms';
import  {NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContentComponent } from './content/content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  exports:[MainComponent],
  declarations: [
    MainComponent,
    ContentComponent
  ]
})
export class MainModule { }

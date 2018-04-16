import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';

import { TableService } from './table/table.service';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot()
    
  ],
  providers: [TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }

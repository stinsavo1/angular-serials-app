import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SerialsTableComponent } from './serials-table/serials-table.component';
import { StorageModule } from './store/storage.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { SerialsService } from './services/serials.service';

@NgModule({
  declarations: [
    AppComponent,
    SerialsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StorageModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [SerialsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

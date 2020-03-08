import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatAutocompleteModule,MatInputModule, MatTableModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RightPanelComponent } from './right-panel/right-panel.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { HeaderComponent } from './right-panel/header/header.component';
import { TableComponent } from './right-panel/table/table.component';
import { DummyDataComponent } from './dummy-data/dummy-data.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
   declarations: [
      AppComponent,
      RightPanelComponent,
      LeftPanelComponent,
      HeaderComponent,
      TableComponent,
      DummyDataComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatAutocompleteModule,
      MatInputModule,
      FormsModule,
      ReactiveFormsModule,
      MatTableModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
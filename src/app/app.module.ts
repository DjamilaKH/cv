import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailcvComponent } from './components/detailcv/detailcv.component';
import { ListcvComponent } from './components/listcv/listcv.component';
import { DeletecvComponent } from './components/deletecv/deletecv.component';

import { MaterialDesignModule } from './material-design/material-design.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormmcvComponent } from './components/formmcv/formmcv.component';
import { HeaderComponent } from './components/header/header.component';
import { AddcvComponent } from './components/addcv/addcv.component';
import { EditcvComponent } from './components/editcv/editcv.component';
import { EditformComponent } from './components/editform/editform.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailcvComponent,
    ListcvComponent,
    DeletecvComponent,
    FormmcvComponent,
    HeaderComponent,
    AddcvComponent,
    EditcvComponent,
    EditformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialDesignModule,
    BrowserAnimationsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

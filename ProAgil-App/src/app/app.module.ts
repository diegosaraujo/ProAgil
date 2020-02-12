import { BrowserModule } from "@angular/platform-browser";
import { NgModule, enableProdMode } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import {Enable}

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EventosComponent } from "./eventos/eventos.component";

@NgModule({
  declarations: [AppComponent, EventosComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  enableProdMode: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

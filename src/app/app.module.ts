import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppServicesModule } from './app-services.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponentComponent } from './card-component/card-component.component';

import { HttpClientModule } from '@angular/common/http';
import { NotfoundComponent } from './notfound/notfound.component';
import { EventcardDirective } from './directives/eventcard.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponentComponent,
    NotfoundComponent,
    EventcardDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppServicesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

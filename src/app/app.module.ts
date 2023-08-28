import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppServicesModule } from './app-services.module';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponentComponent } from './components/card/card-component.component';

import { HttpClientModule } from '@angular/common/http';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { EventcardDirective } from './directives/eventcard.directive';
import { HeaderComponent } from './components/header/header.component';
import { PostformComponent } from './components/postform/postform.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponentComponent,
    NotfoundComponent,
    EventcardDirective,
    HeaderComponent,
    PostformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppServicesModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

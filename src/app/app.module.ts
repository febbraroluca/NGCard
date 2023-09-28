import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppServicesModule } from './app-services.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { PostListComponent } from './components/postList/postList.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { EventcardDirective } from './directives/eventcard.directive';
import { HeaderComponent } from './shared-components/header/header.component';
import { CreatePostComponent } from './components/createPost/createPost.component';
import { ConfirmModalComponent } from './shared-components/confirm-modal/confirm-modal.component';
import { ModifyPostComponent } from './components/modify-post/modify-post.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';



@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    NotfoundComponent,
    EventcardDirective,
    HeaderComponent,
    CreatePostComponent,
    ConfirmModalComponent,
    ModifyPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppServicesModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

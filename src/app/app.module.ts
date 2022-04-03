import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {SpeakerModule} from "./speaker/speaker.module";
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { LoginComponent } from './login/login.component';
import { StudentModule } from './student/student.module';
import { RouterModule,Routes } from '@angular/router';
import { ListSpeakersComponent } from './speaker/list-speakers/list-speakers.component';
import { EditSpeakerComponent } from './speaker/edit-speaker/edit-speaker.component';

const routes:Routes=[
  {path:"login",component:LoginComponent},
  {path:"list",component:ListSpeakersComponent},
  {path:"edit",component:EditSpeakerComponent},
  // {path:"**",component:ErrorComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  
  ],
  imports: [
BrowserModule,CoreModule,SharedModule,HttpClientModule,SpeakerModule,StudentModule,RouterModule.forRoot(routes)
  ],
  providers: [{provide:"baseUrl",useValue:"http://localhost:8080/"},
{provide:HTTP_INTERCEPTORS,useClass:LoggingInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

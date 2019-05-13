import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LevelOneComponent } from './level-one/level-one.component';
import { LevelTwoComponent } from './level-two/level-two.component';
import { LevelThreeComponent } from './level-three/level-three.component';

@NgModule({
  declarations: [
    AppComponent,
    LevelOneComponent,
    LevelTwoComponent,
    LevelThreeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

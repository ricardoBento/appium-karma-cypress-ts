import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Camera } from "@ionic-native/camera/ngx";
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";
import { Keyboard } from "@ionic-native/keyboard/ngx";
import { File } from "@ionic-native/File/ngx";
import { WebView } from "@ionic-native/ionic-webview/ngx";
import { FilePath } from "@ionic-native/file-path/ngx";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';
import { SharedModule } from './shared/shared.module';
import { TokenInterceptor } from './services/http-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { popAnimation, pageTransition } from './app.animations';
import { Network } from '@ionic-native/network/ngx';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      mode: 'ios',
      // navAnimation:popAnimation
    }),
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    IonicStorageModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    ScreenOrientation,
    Keyboard,
    File,
    WebView,
    FilePath,
    Network,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

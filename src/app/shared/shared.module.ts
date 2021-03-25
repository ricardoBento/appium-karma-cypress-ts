import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { PipesModule } from './pipes/pipes.module';
import { NgxIonicImageViewerModule } from './components/ngx-ionic-image-viewer/src/public-api';
import { IonFanComponent } from './components/ion-fan/ion-fan.component';
import { IonFan3wComponent } from './components/ion-fan3w/ion-fan3w.component';
import { LogoGridComponent } from './components/logo-grid/logo-grid.component';
import { ImgBackgroundComponent } from './components/img-background/img-background.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
    NgxIonicImageViewerModule,   
  ],
  entryComponents: [
    IonFanComponent,
    IonFan3wComponent,
    LogoGridComponent,
    ImgBackgroundComponent
  ],
  declarations: [
    AppHeaderComponent,
    IonFanComponent,
    IonFan3wComponent,
    LogoGridComponent,
    ImgBackgroundComponent
  ],
  exports: [
    AppHeaderComponent,
    PipesModule,
    NgxIonicImageViewerModule,
    IonFanComponent,
    IonFan3wComponent,
    LogoGridComponent,
    ImgBackgroundComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule { }

import { ConfigService } from './../../services/config.service';
import { AppConfig } from './../../interfaces/config.interface';
import { NotificationsService } from './../../services/notifications.service';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { AppStorageService } from 'src/app/services/app-storage.service';
import { map } from 'rxjs/operators';
import { Platform } from '@ionic/angular';
// import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  title = "home";
  back_button: boolean = false;
  buttonsView = false;
  listView = false;
  //
  config: AppConfig;

  constructor(
    private notificationService: NotificationsService,
    private storageService: AppStorageService,
    private appConfig: ConfigService,
    // private apiService: ApiService, 
    private plt: Platform
  ) { }
  ngOnInit() {

  }
 
  
  ionViewWillEnter() {
    this.getConfigData();
    this.buttonsView = false;
    this.listView = false;
  }
  ionViewDidLeave() {
    this.buttonsView = false;
    this.listView = false;
  }
  getConfigData(): any {
    // this.storageService.storage.set('config', "");
    // this.notificationService.showHideAutoLoader(500).then(() => {
    //   // Api call to get config from bms
    // });
    this.storageService.getAsObservable('config').subscribe((data)=>{
      if (data.config.listView) {
        // setTimeout(() => {
        this.listView = true;
        // this.notificationService.hideLoader();
        // }, 1000);
      }
      if (data.config.buttonsView) {
        // setTimeout(() => {
        this.buttonsView = true;
        // return this.notificationService.hideLoader();
        // }, 1000);
      } 
    })
  }
}
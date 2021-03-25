import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { AppComponent } from './app.component';
import { ConfigService } from './services/config.service';

describe('AppComponent', () => {
  let configSpy,
    routerSpy,
    statusBarSpy,
    splashScreenSpy,
    platformReadySpy,
    platformSpy,
    app,
    fixture;

  beforeEach(waitForAsync(() => {
    configSpy = jasmine.createSpyObj('ConfigService', ['getConfig']);
    routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
    statusBarSpy = jasmine.createSpyObj('StatusBar', ['styleDefault']);
    splashScreenSpy = jasmine.createSpyObj('SplashScreen', ['hide']);
    platformReadySpy = Promise.resolve();
    platformSpy = jasmine.createSpyObj('Platform', { ready: platformReadySpy });

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        IonicStorageModule.forRoot()
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: ConfigService, useValue: configSpy },
        { provide: Router, useValue: routerSpy },
        { provide: StatusBar, useValue: statusBarSpy },
        { provide: SplashScreen, useValue: splashScreenSpy },
        { provide: Platform, useValue: platformSpy }
      ]
    }).compileComponents();
  }));
  beforeEach((waitForAsync(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  })));
  it('should create the app', () => {
    expect(app).toBeTruthy();
  });
  it('should initialize the app', async () => {
    expect(platformSpy.ready).toHaveBeenCalled();
    await platformReadySpy;
    expect(statusBarSpy.styleDefault).toHaveBeenCalled();
    expect(splashScreenSpy.hide).toHaveBeenCalled();
  });
});



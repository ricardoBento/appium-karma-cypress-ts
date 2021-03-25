import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { ConfigService } from "./config.service";
import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';

describe('Config Service', () => {
    let configSpy, storageSpy;
    let service: ConfigService;

    configSpy = jasmine.createSpyObj('ConfigService', ['getConfig', 'getAnswers']);
    storageSpy = jasmine.createSpyObj('Storage', ['get', 'set', 'clear', 'remove', 'ready']);

    beforeEach(() => {
        TestBed.configureTestingModule(
            {
                imports: [
                    IonicStorageModule.forRoot(),
                    HttpClientModule
                ],
                schemas: [
                    CUSTOM_ELEMENTS_SCHEMA
                ],
                providers: [
                    { provide: ConfigService, useValue: configSpy },
                    { provide: Storage, useValue: storageSpy },
                ]
            }
        );
        service = TestBed.inject(ConfigService);
    });
});
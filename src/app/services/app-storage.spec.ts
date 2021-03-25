import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { IonicStorageModule } from '@ionic/storage';
import { AppStorageService } from './app-storage.service';

describe('Config Service', () => {
    let appStorageSpy, storageSpy;
    let service: AppStorageService;
    const testData = 'test data';
    appStorageSpy = jasmine.createSpyObj('AppStorageService', ['getFromPromise', 'getAsObservable', 'saveStorage', 'removeStorage']);
    // storageSpy = jasmine.createSpyObj('Storage', ['get', 'set', 'clear', 'remove', 'ready']);
    beforeEach(() => {
        TestBed.configureTestingModule(
            {
                imports: [
                    IonicStorageModule.forRoot(),
                ],
                schemas: [
                    CUSTOM_ELEMENTS_SCHEMA
                ],
                providers: [
                    { provide: AppStorageService, useValue: appStorageSpy },
                ]
            }
        );
        service = TestBed.inject(AppStorageService);
    });
    it('should add data to storage ', () => {
        let result = service.saveStorage('testData', testData);
        expect(result).toBeTruthy;
    });

    it('should get data from storage as observable ', () => {
        let result = service.getFromPromise('testData');
        expect(result).toBeTruthy;
    });
});
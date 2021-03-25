
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    constructor(
        private http: HttpClient,
        private storage: Storage,
    ) { }
    getConfig(): any {
        this.http.get('assets/data.json').subscribe(config => {
            this.storage.set('config', config);
        });
    }
}

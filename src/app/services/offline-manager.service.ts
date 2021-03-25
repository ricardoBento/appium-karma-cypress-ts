import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable, from, of, forkJoin } from 'rxjs';
import { switchMap, finalize } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
const STORAGE_REQ_KEY = 'news';
interface StoredRequest {
    url: string,
    type?: string,
    data: any,
    time: number,
    id: string
}

@Injectable({
    providedIn: 'root'
})
export class OfflineManagerService {

    constructor(
        private storage: Storage,
        private http: HttpClient,
        private toastController: ToastController
    ) { }

    checkForEvents(): Observable<any> {
        return from(this.storage.get(STORAGE_REQ_KEY)).pipe(
            switchMap((storedOperations) => {
                let storedObj = storedOperations;
                // console.log('storedObj', storedObj);
                if (storedObj && storedObj.length > 0) {
                    // console.log('storedObj', storedObj);
                    // this.storage.remove(STORAGE_REQ_KEY);
                    return this.sendRequests(storedObj);
                    // .pipe(
                    //     finalize(() => {
                    //         let toast = this.toastController.create({
                    //             message: `Local data succesfully synced to API!`,
                    //             duration: 3000,
                    //             position: 'bottom'
                    //         });
                    //         toast.then(toast => toast.present());
                    //     })
                    // );
                } else {
                    console.log('no local events to sync');
                    return of(false);
                }
            })
        )
    }
    storeRequest(key, Object) {
        // console.log(url, data);
        // let toast = this.toastController.create({
        //     message: `Your data is stored locally because you seem to be offline.`,
        //     duration: 3000,
        //     position: 'bottom'
        // });
        // toast.then(toast => toast.present());

        // let action: StoredRequest = {
        //     url: url,
        //     data: data,
        //     time: new Date().getTime(),
        //     id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
        // };

        // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
        this.storage.set(key, '');
        return this.storage.get(key).then(storedOperations => {
            let storedObj = storedOperations;
            if (storedObj) {
                storedObj.push(Object);
            } else {
                storedObj = [Object];
            }
            // Save old & new local transactions back to Storage
            // console.log('storedObj:::', storedObj);

            this.storage.set(key, storedObj);
            return storedObj;
        });
    }

    // obs:any =[];
    sendRequests(operations: StoredRequest[]) {
        let obs = [];
        for (let op of operations) {
            let oneObs = {
                "url": op.url,
                "data": op.data
            };
            obs.push(oneObs);
        }
        // console.log('Make one request: ', obs);
        // Send out all local events and return once they are finished
        return obs;
    }
}
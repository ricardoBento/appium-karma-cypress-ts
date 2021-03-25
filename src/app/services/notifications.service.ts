import { Injectable } from '@angular/core';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class NotificationsService {
    private isLoading = false;
    loading;
    constructor(
        private alertController: AlertController,
        private toastController: ToastController,
        private loadingController: LoadingController
    ) { }
    async toastError(message) {
        const toast = await this.toastController.create({
            message: JSON.stringify(message),
            position: "middle",
            duration: 3000
        });
        toast.present();
    }
    async showHideAutoLoader(timer: number) {
        this.loading = await this.loadingController.create({
            message: 'Please wait...',
            duration: timer
        });
        await this.loading.present();
        const { role, data } = await this.loading.onDidDismiss();
    }
    async showLoader() {
        this.loadingController.create({
            message: 'Please wait...',
        }).then((res) => {
            res.present();
        });
    }
    async hideLoader() {
        await this.loadingController.dismiss();
    }
}
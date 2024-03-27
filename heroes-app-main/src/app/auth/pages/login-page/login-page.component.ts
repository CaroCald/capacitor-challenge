import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';
import { Capacitor } from '@capacitor/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ]
})
export class LoginPageComponent {

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastController: ToastController
  ){}

  onLogin(): void {

    this.authService.login('fernando@gmail.com','123456')
      .subscribe( user => {
        this.checkPermissions()
        this.presentToast();
        this.router.navigate(['/']);

      });

  }

  async checkLocation(){
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current position: ', coordinates);
  }
  

  // 2. Added geolocation
   async checkPermissions(){
    if (Capacitor.isNativePlatform()) {
      const permission = await Geolocation.requestPermissions()
      if(permission){
        if( permission.coarseLocation == 'granted' && permission.location == 'granted'){
          this.checkLocation()
        } else if (permission.coarseLocation == 'denied' && permission.location == 'denied'){
          alert("User Deny Location Access Permission")
        }
      }else{
        alert("User Deny Location Access Permission")
        
      }
    }else{
      this.checkLocation()
    }
   
  }

  //4. Present Ionic Toast 
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Bienvenido!',
      duration: 1500,
      position: 'bottom',
    });

    await toast.present();
  }
}

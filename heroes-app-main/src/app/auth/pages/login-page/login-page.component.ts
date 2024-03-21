import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ]
})
export class LoginPageComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  onLogin(): void {

    this.authService.login('fernando@gmail.com','123456')
      .subscribe( user => {
        this.checkPermissions()
        this.router.navigate(['/']);

      });

  }

  async checkLocation(){
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current position: ', coordinates);
  }
  

   async checkPermissions(){
    if (Capacitor.isNativePlatform()) {
      const permission = await Geolocation.requestPermissions()
      console.log(permission)
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
}

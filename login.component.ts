import { Component } from '@angular/core';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
    

    
})
export class LoginComponent {
        
     username: string;
     password: string;
     message: string;

    authenticate(){
   if(this.username=='ritu' && this.password=='1234' )

   this.message='Valid User';

   else  
       this.message='Invalid UserName/Password';
   }
 }



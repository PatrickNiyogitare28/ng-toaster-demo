import { Component } from '@angular/core';
import {ToastrNotificationService} from './services/toastr-notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-toaster-demo';

  constructor(public  toastrService: ToastrNotificationService){}

  showSuccess(message:string){
    this.toastrService.showSuccess(message, 'Success');
  }
  showError(message:string){
    this.toastrService.showError(message, 'Error');
  }
  showWarning(message:string){
    this.toastrService.showWarning(message, 'Warning');
  }
  showInfo(message:string){
    this.toastrService.showSuccess(message, 'Information');
  }
}

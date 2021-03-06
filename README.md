# NgToasterDemo

The code serves to implement ``ngx-toastr`` in angular


## Setting up ngx-toastr
Run the following commands to install ngx-toastr 
``npm i ngx-toastr --save``

Run the follwing to install angular animations, this is becouse ngx-toastr uses angular animations
``npm install @angular/animations --save``

<b>Note</b>: that ``ngx-toastr`` can also be used without angular animations but angular animations are easy to use.

Set up the the ngx-toastr css to `angular.json` for its styles to be compiled

Use the below if you are using  angular cli  6 and above, add the second line in ``styles`` under ``styles.scss``
```"styles": [
  "styles.scss",
  "node_modules/ngx-toastr/toastr.css"
]
```

Use the following for angular bellow cli 6
```"styles": [
  "styles.scss",
  "../node_modules/ngx-toastr/toastr.css"
]
```
Add the below line to import ngx-toastr module in the app
```import { ToastrModule } from 'ngx-toastr';```

In app modules add the below setting in ``imports`` array
 ```imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      progressBar:true,
      progressAnimation: 'increasing',
      preventDuplicates: true
    })
  ],
 ```
 ## Screenshots
 success button clicked
 <img src="https://github.com/PatrickNiyogitare28/ng-toaster-demo/blob/main/src/assets/screenshots/Screenshot%20(3).png" width="100%">
 
 Error button clicked
 <img src="https://github.com/PatrickNiyogitare28/ng-toaster-demo/blob/main/src/assets/screenshots/Screenshot%20(4).png" width="100%">
 
 Warning button clicked
 <img src="https://github.com/PatrickNiyogitare28/ng-toaster-demo/blob/main/src/assets/screenshots/Screenshot%20(5).png" width="100%">
 
 Information button clicked
 <img src="https://github.com/PatrickNiyogitare28/ng-toaster-demo/blob/main/src/assets/screenshots/Screenshot%20(7).png" width="100%">

 ## To refere to this project
 - clone the repo
 - run ``npm install``
 - open your browser and run ``localhost:4200``


 ## For more details
 - Read the library documentation on npm
 https://www.npmjs.com/package/ngx-toastr

 ## Author 
 patrickniyogitare28@gmail.com

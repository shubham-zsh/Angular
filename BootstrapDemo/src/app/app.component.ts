import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {ReactiveFormsModule} from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';

// import classes which are required for reactive forms
import {FormBuilder,Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ButtonsModule,AlertModule,BsDropdownModule,ReactiveFormsModule,CarouselModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers : [FormBuilder,Validators]
})

export class AppComponent 
{
// Inject FormBuilder service
constructor(public fbobj : FormBuilder)
{
}

MarvellousForm = this.fbobj.group(
  {
    // Add Multiple validations
    username :['', [Validators.required, Validators.minLength(5)] ],
    passowrd : ['',Validators.required],
    ConfirmPass : [''],
    MarvellousClass : this.fbobj.group(
      {
        batch :['Python'],
        fees : ['5000'] 
      }
    )
  }
);

// Method to set FormControl fields through program
SetData()
{
  this.MarvellousForm.setValue(
    {
      username : 'Piyush',
      passowrd : 'abcd',
      ConfirmPass :  'abcd',
      MarvellousClass : 
      {
        batch : 'Python',
        fees : '5000'
      }
    }
  )
}
}

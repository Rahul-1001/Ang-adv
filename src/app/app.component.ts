import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';

//  handleclickevent(){
//   console.log("function called")
//   //important point  
//   this.otherFunction()
//  }

//  otherFunction()
//  {
//   console.log("other function call")
//  }


//  count:number=0;
//  handleIncrement()
//  {
//   this.count=this.count+1;
//  }
//  handleDecrement()
//  {
//   this.count=this.count-1;
//  }
 
//  handleReset()
//  {
//   this.count=0
//  }




// handleEvent(event:any)
// {
//   console.log("function called ",event.type)
//   console.log("Value  ",(event.target as HTMLInputElement).value)
// }






// name=""
// displayName=""
// email=""
// getName(event:Event)
// {
//   // const val=(event.target as HTMLInputElement).value
//   this.name=(event.target as HTMLInputElement).value
//   // console.log(val)
//   // this.name=val
// }
// showName()
// {
//   this.displayName=this.name 
// }

// setName()
// {
//   this.name="rah"
// }





}

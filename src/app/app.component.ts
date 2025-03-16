import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Product } from './types';

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


products:Product[]=[

  {id:1, name: "Laptop", price: 75000, quantity: 10 },
  {id:2,name: "Smartphone", price: 40000, quantity: 25 },
  {id:3,name: "Tablet", price: 25000, quantity: 15 },
  {id:4,name: "Headphones", price: 5000, quantity: 50 },
  { id:5,name: "Smartwatch", price: 15000, quantity: 20 },
  {id:6, name: "Keyboard", price: 3000, quantity: 0 },
  { id:7,name: "Mouse", price: 2000, quantity: 40 },
  {id:8,name: "Monitor", price: 20000, quantity: 12 },
  {id:9, name: "Printer", price: 18000, quantity: 8 },
  {id:10, name: "External Hard Drive", price: 7000, quantity: 18 }
]
  // name:"Samsung M51",

  // price:23000,

  // isAvailable:false









name="rahul";
age=23;
changeName()
{
  this.name="mohan"
}




}

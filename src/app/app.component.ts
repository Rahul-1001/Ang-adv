import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Product } from './types';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,RouterModule,ReactiveFormsModule,FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})








export class AppComponent {
  title = 'angular';

 handleclickevent(){
  console.log("function called")
  //important point  
  this.otherFunction()
 }

 otherFunction()
 {
  console.log("other function call")
 }


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








// ##############3 counter app changes ######################33

count: number = 0;

handleIncrement() {
  if (this.count < 100) {
    this.count++;
  } else {
    alert('Counter cannot exceed 100!');
  }
}

handleDecrement() {
  if (this.count > 0) {
    this.count--;
  } else {
    alert('Counter cannot go below 0!');
  }
}

handleReset() {
  const confirmationMessage = this.count === 0 
    ? 'Counter is already at 0. Do you want to reset it anyway?' 
    : 'Are you sure you want to reset the counter to 0?';
  
  if (confirm(confirmationMessage)) {
    this.count = 0;
  }
}














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


// products:Product[]=[

//   {id:1, name: "Laptop", price: 75000, quantity: 10 },
//   {id:2,name: "Smartphone", price: 40000, quantity: 25 },
//   {id:3,name: "Tablet", price: 25000, quantity: 15 },
//   {id:4,name: "Headphones", price: 5000, quantity: 50 },
//   { id:5,name: "Smartwatch", price: 15000, quantity: 20 },
//   {id:6, name: "Keyboard", price: 3000, quantity: 0 },
//   { id:7,name: "Mouse", price: 2000, quantity: 40 },
//   {id:8,name: "Monitor", price: 20000, quantity: 12 },
//   {id:9, name: "Printer", price: 18000, quantity: 8 },
//   {id:10, name: "External Hard Drive", price: 7000, quantity: 18 }
// ]
  // name:"Samsung M51",

  // price:23000,

  // isAvailable:false









// name="rahul";
// age=23;
// changeName()
// {
//   this.name="mohan"
// }





                                        // form

    name=new FormControl('',[Validators.required,
  Validators.minLength(5),
   
 ])

 price=new FormControl('',[
  Validators.required,
  Validators.min(1)])

 category=new FormControl('',[
  Validators.required
 ])




productForm=new FormGroup({
   name: this.name,
   price:this.price,
   category:this.category

})



 submitForm()
 {
  event?.preventDefault()

   console.log(this.productForm)
   if(this.productForm.valid==true)
   {
    console.log(this.productForm.value)

   }
   else{
    console.log("form is in valid ")
   }


        // console.log(this.productForm.value)
      

 }








handleEvent(event:Event)
{
  // we can get the detail of an event by using event object
  const target = event.target as HTMLInputElement;
  console.log("function called ",event)
  console.log("function called ",event.type)
  console.log("function called ",target.name) 
 //by this method we can get the value of input field

  console.log("Input value :", target.value);
  console.log("focus event called",event.type)

}





namee=""
displayName=""
getName(event:Event)
{
  const target=event.target as HTMLInputElement;
  console.log(target.value)
  this.namee=target.value
}

showName()
{
  this.displayName=this.namee;
}

setName(){
  this.namee="rahul"
}




// 

userLogin(item:any)
{
  console.log(item)
}


















}

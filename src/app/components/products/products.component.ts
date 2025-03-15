import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent {


  // constructor(private activatedRoute:ActivatedRoute)
  // {

  //   //activatedroute is the object which keep tracks of the url bar 
  //   console.log(this.activatedRoute.snapshot.params["id"])

  // }


  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      console.log("Product ID:", params["id"]); // Logs every time the parameter changes
    });
  }
  





}

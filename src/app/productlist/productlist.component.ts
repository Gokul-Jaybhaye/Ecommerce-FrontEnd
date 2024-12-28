import { Component } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {
//listofString :string[]=['gokul','jay','ram','sandip']







 /* product={
    name1:"Iphone17",
    price:288,
    Discount:8.5,

  }
  //Iname='Gokul J'
  addCart:number=0
  decrementV(){
    if(this.addCart>0){
    this.addCart--;}

  }
  increment(){
    if(this.addCart<this.product2.inStock){
    this.addCart++;
    }
  }
  product2={
    name:"Iphone16",
    price:285,
    Discount:2,
    inStock:6,
    Pic:"music.jpg"

  }
  onClick(event:any){
   // this.Iname=event.target.value
    //console.log(event.target.value)
    //this.Iname="Jaybhaye"
  }
  getDiscount(){
    return this.product2.price -(this.product2.price * this.product2.Discount /100)
  }*/
 searchText:string='';
 setSearhtext(value:string){
  this.searchText=value;

 }

  
}

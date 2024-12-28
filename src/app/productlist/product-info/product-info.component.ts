import { Component, Input } from '@angular/core';
import { Product } from '../../Models/produt';


@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.css'
})
export class ProductInfoComponent {
  selectedPrdouct:Product;
  products=[
    {
      id:1,
      name :"React Native Filflop" ,
      description: "lorem5 ksskkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk",
      brand:"Nike",
      gender:"Male",
      category:"Running",
      color:['white','blue','blck'],
      price:160,
      is_in_inventory:true,
      item_left:4,
      imageURL:"box1_image.jpg",
      slug:"Nike infinity"
     
    },
    {
      id:2,
      name :"React Native Filflop" ,
      description: "lorem5 ksskkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk",
      brand:"Nike",
      gender:"Male",
      category:"Running",
      color:['white','blue','blck'],
      price:160,
      is_in_inventory:true,
      item_left:4,
      imageURL:"box1_image.jpg",
      slug:"Nike infinity"
     
    },
    {
      id:3,
      name :"React Native Filflop" ,
      description: "lorem5 ksskkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk",
      brand:"Nike",
      gender:"Male",
      category:"Running",
      color:['white','blue','blck'],
      price:160,
      is_in_inventory:true,
      item_left:4,
      imageURL:"box1_image.jpg",
      slug:"Nike infinity"
     
    },
    {
      id:4,
      name :"React Native Filflop" ,
      description: "lorem5 ksskkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk",
      brand:"Nike",
      gender:"Male",
      category:"Running",
      color:['white','blue','blck'],
      price:100,
      is_in_inventory:false,
      item_left:4,
      imageURL:"box1_image.jpg",
      slug:"Nike infinity"
     
    },
    {
      id:5,
      name :"Adidas Native Filflop" ,
      description: "lorem5 ksskkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk",
      brand:"GoldStar",
      gender:"Male",
      category:"Running",
      color:['white','blue','blck'],
      price:160,
      is_in_inventory:true,
      item_left:4,
      imageURL:"box1_image.jpg",
      slug:"Nike infinity"
     
    }
  ];
  totalproductCount=this.products.length;
  toproduct=this.products.filter(p =>p. is_in_inventory==true).length; 
  outstock=this.products.filter(p =>p. is_in_inventory==false).length;
  @Input()
  searchText:string='';
  selectFilterRadio:string='all';
  onfilterchange(value:string){
    console.log(value)
    this.selectFilterRadio=value;

  }

}

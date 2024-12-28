export class Product{
    id:number;
    name :string ;
    description: string;
    brand:string;
    gender:string;
    category:string;
    color:string[];
    price:number;
    discountPrice?:number;
    is_in_inventory:boolean;
    item_left:number;
    imageURL:string;
    slug:string;

}
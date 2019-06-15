export class Product{

    id   : number;
    name : String;
    price: number;
    quantity : number;
    imageUrl : string;

    constructor(id : number,name : String , price: number , quantity : number , imageUrl : string){
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.imageUrl = imageUrl;    
    }

}
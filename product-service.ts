import { Injectable } from "@angular/core";
import { Product } from 'src/app/product';
//classes which are used to write code in angular is used for communicating with server are commonly referred to as the service classes
@Injectable()
export class ProductService{
// as of now we will return dummy list of products in real time scenario we will   make ajax call from here to the server.
    fetchListOfProducts() : Product[]{

       return [
            new Product(1, "Nokia",5000,50,"IMG1.jpg"),
            new Product(2, "Redmi MI",25000,100,"IMG2.jpg"),
            new Product(3, "Oppo",15000,70,"IMG3.jpg"),
            new Product(4, "Yunique",50000,1,"IMG1.jpg"),];
     } 
}

import { Component } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product-service';

@Component({
    selector    : 'list-product',
    templateUrl : './list-product.component.html',
    styleUrls    : ['./list-product.component.css']
})
export class ListProductComponent{
    products : Product[];
    flag     : number;

  //DI
  constructor(private ps:ProductService) {

  }
  
        
                
    show(){
       // let ps: ProductService=new ProductService();
        this.products =this.ps.fetchListOfProducts();
        if(this.flag == 1){
            this.flag = 0;
        }
        else{
            this.flag = 1;
        }
    }
}


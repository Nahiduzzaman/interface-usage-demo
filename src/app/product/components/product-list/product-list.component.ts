import { IProduct } from '../../contracts/product-actions.interface';

import { Component, OnInit, Output, EventEmitter, Input, Inject } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    products: any[];

    constructor(@Inject('IProduct') private product) {
    }

    ngOnInit() {
        // this.productService.getProducts().then((response: any[]) => {
        //     this.products = response;
        // });
        this.products = this.product.getProducts();
    }

    deleteProduct(productId: string) {
        // this.productService.deleteProduct(productId).then((response) => {
        //     console.log(response);
        // });
        // this.productDeleteAction.emit(productId);
        this.product.deleteProduct(productId);
    }

}
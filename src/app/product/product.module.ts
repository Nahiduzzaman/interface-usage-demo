import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './services/product.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [ProductListComponent],
    exports: [ProductListComponent],
    providers: [
        ProductService
    ]
})
export class ProductModule { }

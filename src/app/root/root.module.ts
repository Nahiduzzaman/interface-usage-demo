import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { RootDefaultComponent } from '../root/components/root-default/root-default.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from '../product/product.module';
import { RootService } from './services/root.service';

// import { IProduct } from '../product/contracts/product-actions.interface';

@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        HttpClientModule,
        ProductModule
    ],
    declarations: [
        RootDefaultComponent
    ],
    providers: [
        {
            provide: 'IProduct',
            useClass: RootService
        },
        RootService
    ],
    bootstrap: [RootDefaultComponent]
})
export class RootModule {
}

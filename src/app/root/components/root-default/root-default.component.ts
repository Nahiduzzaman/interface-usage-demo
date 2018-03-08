import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RootService } from '../../services/root.service';

@Component({
    selector: 'app-root-default-component',
    templateUrl: './root-default.component.html',
    styleUrls: ['./root-default.component.css']
})
export class RootDefaultComponent implements OnInit {
    products: any[];

    constructor(private rootService: RootService) {
    }

    ngOnInit(){
        
    }

    /*
    deleteProduct(productId: string) {
        this.rootService.deleteProduct(productId).then((response: any) => {
            console.log('executed business specific delete action');
            this.rootService.getProducts().then((response2: any) => {
                this.products = response2;
            });
        });
    } */
}

import { IProduct } from '../../product';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class RootService implements IProduct {
    /* constructor(private http: HttpClient) {
        console.log('implementation of IProduct has been initialized');
    } */

    /* public getProducts(): Promise<any> {
        console.log('getProducts() of implementation');
        return this.http.get('https://dog.ceo/api/breeds/list').toPromise();
    }

    public deleteProduct(productId: string) {
        console.log('deleteProduct() of implementation');
        const headers = new HttpHeaders({
            'Content-type': 'application/JSON'
        });
        return this.http.post('http://localhost:3001/deleteFruit',
                        JSON.stringify({productId: productId}),
                        {headers: headers}).toPromise();
    } */
    products: any[] = [
        { id: '1', name: 'Banana1', description: 'descriptions' },
        { id: '2', name: 'Banana2', description: 'descriptions' },
        { id: '3', name: 'Banana3', description: 'descriptions' },
        { id: '4', name: 'Banana4', description: 'descriptions' },
        { id: '5', name: 'Banana5', description: 'descriptions' }
    ];
    constructor(private http: HttpClient) {
        console.log('implementation of IProduct has been initialized');
    }

    public getProducts(): any[] {
        return this.products;
    }

    public deleteProduct(productId: string): void {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === productId) {
                if (i > -1) {
                    this.products.splice(i, 1);
                }
            }
        }
    }
}

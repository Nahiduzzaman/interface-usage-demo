import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RootService {
    private data: Subject<number>;
    private dogs: any[];
    private numbers: Observable<number>;

    constructor(private httpClient: HttpClient) {
        this.data = new Subject<number>();
        this.dogs = [{
            name: 'german shpard',
            type: 1
        },
        {
            name: 'siberian husky',
            type: 2
        }];
        this.numbers = new Observable(subscriber => {
            subscriber.next(1);

            setTimeout(function () {
                subscriber.next(2);
            }, 2000);

            setTimeout(function () {
                subscriber.next(3);
            }, 4000);

            setTimeout(function () {
                subscriber.next(4);
            }, 6000);
        });
    }

    public getData() {
        const dogs = this.dogs;
        return new Promise(function (resolve, reject) {
           resolve(dogs);
        });
        // return this.httpClient.get('http://localhost:3001/dogs').toPromise();
    }

    public getObservableNumber() {
        return this.numbers;
    }


}

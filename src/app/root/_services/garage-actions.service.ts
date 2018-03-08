import { IGarageActionsInterface } from '../../garage';
import { Injectable } from '@angular/core';

@Injectable()
export class GarageActions implements IGarageActionsInterface {
    handleGarageCreation(): Promise<string> {
        return new Promise(function (resolve, reject) {
            resolve('message from IGarageActionsInterface implementation');
        });
    }
}

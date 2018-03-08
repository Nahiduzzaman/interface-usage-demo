import { Component, OnInit, Inject } from '@angular/core';
import { IGarageActionsInterface } from '../../models/garage.interface';

@Component({
    selector: 'app-garage-default',
    templateUrl: './garage-default.component.html',
    styleUrls: ['./garage-default.component.css']
})
export class GarageDefaultComponent implements OnInit {

    constructor(@Inject('IGarageActionsInterface')private garageActions: IGarageActionsInterface) { }

    ngOnInit() {
    }

    public createGarage() {
        // tslint:disable-next-line:no-debugger
        debugger;
        this.garageActions.handleGarageCreation().then((response: string) => {
            console.log('after garage has been created ' + response);
        });
    }

}

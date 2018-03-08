import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GarageDefaultComponent } from './components/garage-default/garage-default.component';
import { RouterModule } from '@angular/router';
import { GarageSecondComponent } from './components/garage-second/garage-second.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: GarageDefaultComponent
            },
            {
                path: 'details',
                component: GarageSecondComponent
            }
        ])
    ],
    declarations: [
        GarageDefaultComponent,
        GarageSecondComponent],
    providers: [],
    bootstrap: [],
    exports: [GarageDefaultComponent]
})
export class GarageModule {
}

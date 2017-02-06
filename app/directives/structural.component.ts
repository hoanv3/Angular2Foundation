import { Component } from '@angular/core'

@Component ({
    selector: 'structural-comp',
    template: `
    <h1>NgIf demostration</h1>
    <i *ngIf="isShown">this block's shown or hidden based a variable from controller</i>
    <h2>ngSwitch Demostration</h2>
    <div [ngSwitch]="color">
        <strong *ngSwitchCase="'red'">Here is the red line</strong>
        <strong *ngSwitchCase="'blue'">Here is the blue line</strong>
        <strong *ngSwitchCase="'green'">Here is the blue green</strong>
    </div>

    <h2>ngFor directive</h2>
    <ul>
        <li *ngFor="let f of foods">{{ f }}</li>
    </ul>
    `
})

export class StruturalComponent { 
    public isShown = true;
    public color = "blue";
    public foods: String[] = ["soup", "pork", "rice", "steamed rice", "cookie"];
}
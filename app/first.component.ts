import { Component, Input } from '@angular/core'
import {FormControl,FormGroup} from '@angular/forms';

@Component ({
    selector: 'first-Component',
    template: `<i>angular 2 at a glance {{ greeting }} {{ beautifulGirl }} </i>
    <img [src]="imageUrl" />
    <br />
    <input type="text" [value]="displayedText" #dsText />
    {{ displayedText }}
    <br />
    <input type="button" (click)="show(dsText.value)" value="click me" />
    <br />
    <input type="text" [(ngModel)]="fName" />
    <input type="text" [(ngModel)]="lName" />
    <p>{{ fName }} {{ lName }} </p>
    <strong>{{ inputFirstName }}</strong>
    `,
    styles: ['i { color: red;}']
})
export class FirstComponent {
    @Input() inputFirstName: String;

    public greeting = "The man who can't be moved";
    public beautifulGirl = "That the way you are";
    public imageUrl = "http://lorempixel.com/300/300";
    public displayedText = "hook up and dont hit the limitation exposed";
    public show(value:String) {
        alert("Wake me up when september end " + value);
    } 
 }


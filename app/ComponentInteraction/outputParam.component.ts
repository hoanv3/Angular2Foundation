import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'interaction-comp',
    template: `
    <p>{{ name | uppercase }}</p>
    <p> Custom pipe in Angular 2:  {{ 12 | exponentialStrength: 10 }}</p>
    <button [disabled]="isVoted" (click)="vote(true)">Agree</button>
    <button [disabled]="isVoted" (click)="vote(false)">Disagree</button>
    Result: {{ isVoted }}
    `
})

export class InteractionComponent {
    public isVoted:Boolean = false;
    private age:Int8Array;

    @Input() name:String;
    @Output() onVoted = new EventEmitter<Boolean>();

    /**
     * vote
     */
    public vote(voteOption: Boolean) {
        this.isVoted = voteOption;
        this.onVoted.emit(voteOption;
    }

    /**
     * setAge
     */
    public setAge(age:Int8Array) {
        this.age = age;
    }
}
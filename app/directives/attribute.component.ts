import { Component, ViewChild } from '@angular/core'
import { InteractionComponent } from '../ComponentInteraction/outputParam.component'

@Component({
    selector: 'attr-comp',
    template: `
    <h2>{{title}}</h2>
    <p [ngClass]="{firstMatch:isFirstMatched, secondMatch: isSecondMatched}">Attribute directive applied</p>
    <input type="text" #nameInputed (keyup)=0 />
    <first-Component [inputFirstName] = "nameInputed.value"></first-Component>

    <i>{{ viewChildProps.name }}</i>
    <p>
        Agree Count: {{ agreeCount }}
        <br />
        Disagree Count: {{ disagreeCount }}
    </p>
    <interaction-comp *ngFor="let name of nameList" (onVoted)="voteFromParentLevel($event)" [name]="name"></interaction-comp>
    `,
    styles: [
        `
        .firstMatch {
            color: red;
        }

        .secondMatch {
            color: blue;
        }
        `
    ]
})

export class AttrComponent {
    public isFirstMatched = true;
    public isSecondMatched = false;
    public title: String = "Attribute directive applied title";
    public agreeCount = 0;
    public disagreeCount = 0;
    public nameList: String[] = ["Steven", "Hoa Nguyen", "Trang Quach", "Lan Mama"];
    @ViewChild(InteractionComponent)
    private viewChildProps: InteractionComponent;

    /**
     * constructors
     */
    constructor() {
        this.viewChildProps = new InteractionComponent();
        this.viewChildProps.name = "Name was set inside parent's constructior";
    }

    /**
     * getColor
     */
    public getColor() {
        return this.isFirstMatched || this.isSecondMatched;
    }

    /**
     * voteFromParentLevel
     */
    public voteFromParentLevel(isVoted: Boolean) {
        if (isVoted) {
            this.agreeCount++;
        } else {
            this.disagreeCount++;
        }
    }
}
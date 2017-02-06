"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var StruturalComponent = (function () {
    function StruturalComponent() {
        this.isShown = true;
        this.color = "blue";
        this.foods = ["soup", "pork", "rice", "steamed rice", "cookie"];
    }
    return StruturalComponent;
}());
StruturalComponent = __decorate([
    core_1.Component({
        selector: 'structural-comp',
        template: "\n    <h1>NgIf demostration</h1>\n    <i *ngIf=\"isShown\">this block's shown or hidden based a variable from controller</i>\n    <h2>ngSwitch Demostration</h2>\n    <div [ngSwitch]=\"color\">\n        <strong *ngSwitchCase=\"'red'\">Here is the red line</strong>\n        <strong *ngSwitchCase=\"'blue'\">Here is the blue line</strong>\n        <strong *ngSwitchCase=\"'green'\">Here is the blue green</strong>\n    </div>\n\n    <h2>ngFor directive</h2>\n    <ul>\n        <li *ngFor=\"let f of foods\">{{ f }}</li>\n    </ul>\n    "
    })
], StruturalComponent);
exports.StruturalComponent = StruturalComponent;
//# sourceMappingURL=structural.component.js.map
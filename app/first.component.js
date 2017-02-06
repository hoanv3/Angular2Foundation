"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var FirstComponent = (function () {
    function FirstComponent() {
        this.greeting = "The man who can't be moved";
        this.beautifulGirl = "That the way you are";
        this.imageUrl = "http://lorempixel.com/300/300";
        this.displayedText = "hook up and dont hit the limitation exposed";
    }
    FirstComponent.prototype.show = function (value) {
        alert("Wake me up when september end " + value);
    };
    return FirstComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FirstComponent.prototype, "inputFirstName", void 0);
FirstComponent = __decorate([
    core_1.Component({
        selector: 'first-Component',
        template: "<i>angular 2 at a glance {{ greeting }} {{ beautifulGirl }} </i>\n    <img [src]=\"imageUrl\" />\n    <br />\n    <input type=\"text\" [value]=\"displayedText\" #dsText />\n    {{ displayedText }}\n    <br />\n    <input type=\"button\" (click)=\"show(dsText.value)\" value=\"click me\" />\n    <br />\n    <input type=\"text\" [(ngModel)]=\"fName\" />\n    <input type=\"text\" [(ngModel)]=\"lName\" />\n    <p>{{ fName }} {{ lName }} </p>\n    <strong>{{ inputFirstName }}</strong>\n    ",
        styles: ['i { color: red;}']
    })
], FirstComponent);
exports.FirstComponent = FirstComponent;
//# sourceMappingURL=first.component.js.map
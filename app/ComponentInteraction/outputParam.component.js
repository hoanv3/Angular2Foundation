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
var InteractionComponent = (function () {
    function InteractionComponent() {
        this.isVoted = false;
        this.onVoted = new core_1.EventEmitter();
    }
    /**
     * vote
     */
    InteractionComponent.prototype.vote = function (voteOption) {
        this.isVoted = voteOption;
        this.onVoted.emit(voteOption);
    };
    /**
     * setAge
     */
    InteractionComponent.prototype.setAge = function (age) {
        this.age = age;
    };
    return InteractionComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], InteractionComponent.prototype, "name", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], InteractionComponent.prototype, "onVoted", void 0);
InteractionComponent = __decorate([
    core_1.Component({
        selector: 'interaction-comp',
        template: "\n    <p>{{ name | uppercase }}</p>\n    <p> Custom pipe in Angular 2:  {{ 12 | exponentialStrength: 10 }}</p>\n    <button [disabled]=\"isVoted\" (click)=\"vote(true)\">Agree</button>\n    <button [disabled]=\"isVoted\" (click)=\"vote(false)\">Disagree</button>\n    Result: {{ isVoted }}\n    "
    })
], InteractionComponent);
exports.InteractionComponent = InteractionComponent;
//# sourceMappingURL=outputParam.component.js.map
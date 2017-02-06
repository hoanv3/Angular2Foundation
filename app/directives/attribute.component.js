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
var outputParam_component_1 = require("../ComponentInteraction/outputParam.component");
var AttrComponent = (function () {
    /**
     * constructors
     */
    function AttrComponent() {
        this.isFirstMatched = true;
        this.isSecondMatched = false;
        this.title = "Attribute directive applied title";
        this.agreeCount = 0;
        this.disagreeCount = 0;
        this.nameList = ["Steven", "Hoa Nguyen", "Trang Quach", "Lan Mama"];
        this.viewChildProps = new outputParam_component_1.InteractionComponent();
        this.viewChildProps.name = "Name was set inside parent's constructior";
    }
    /**
     * getColor
     */
    AttrComponent.prototype.getColor = function () {
        return this.isFirstMatched || this.isSecondMatched;
    };
    /**
     * voteFromParentLevel
     */
    AttrComponent.prototype.voteFromParentLevel = function (isVoted) {
        if (isVoted) {
            this.agreeCount++;
        }
        else {
            this.disagreeCount++;
        }
    };
    return AttrComponent;
}());
__decorate([
    core_1.ViewChild(outputParam_component_1.InteractionComponent),
    __metadata("design:type", outputParam_component_1.InteractionComponent)
], AttrComponent.prototype, "viewChildProps", void 0);
AttrComponent = __decorate([
    core_1.Component({
        selector: 'attr-comp',
        template: "\n    <h2>{{title}}</h2>\n    <p [ngClass]=\"{firstMatch:isFirstMatched, secondMatch: isSecondMatched}\">Attribute directive applied</p>\n    <input type=\"text\" #nameInputed (keyup)=0 />\n    <first-Component [inputFirstName] = \"nameInputed.value\"></first-Component>\n\n    <i>{{ viewChildProps.name }}</i>\n    <p>\n        Agree Count: {{ agreeCount }}\n        <br />\n        Disagree Count: {{ disagreeCount }}\n    </p>\n    <interaction-comp *ngFor=\"let name of nameList\" (onVoted)=\"voteFromParentLevel($event)\" [name]=\"name\"></interaction-comp>\n    ",
        styles: [
            "\n        .firstMatch {\n            color: red;\n        }\n\n        .secondMatch {\n            color: blue;\n        }\n        "
        ]
    }),
    __metadata("design:paramtypes", [])
], AttrComponent);
exports.AttrComponent = AttrComponent;
//# sourceMappingURL=attribute.component.js.map
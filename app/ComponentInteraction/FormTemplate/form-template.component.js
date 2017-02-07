"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var FormTemplateComponent = (function () {
    function FormTemplateComponent() {
    }
    /**
     * submit
     */
    FormTemplateComponent.prototype.onSubmit = function (frmValues) {
        console.log(frmValues);
    };
    return FormTemplateComponent;
}());
FormTemplateComponent = __decorate([
    core_1.Component({
        selector: 'form-temp',
        templateUrl: 'app/ComponentInteraction/FormTemplate/form-template.component.html',
        styleUrls: ['app/Contents/style.component.css']
    })
], FormTemplateComponent);
exports.FormTemplateComponent = FormTemplateComponent;
//# sourceMappingURL=form-template.component.js.map
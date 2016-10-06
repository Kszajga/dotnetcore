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
var core_1 = require('@angular/core');
require("rxjs/add/observable/combineLatest");
require("rxjs/add/operator/filter");
// service hívásunk itt nincs import { CharacterService } from '../shared/character.service';
var FormpeldaComponent = (function () {
    function FormpeldaComponent() {
        this.sizes = ["small", "normal", "big"];
        this.locations = ["Home", "Away"];
    }
    FormpeldaComponent.prototype.onSubmit = function (formValue) {
        console.log(formValue);
    };
    __decorate([
        core_1.ViewChild('formRef'), 
        __metadata('design:type', Object)
    ], FormpeldaComponent.prototype, "form", void 0);
    FormpeldaComponent = __decorate([
        core_1.Component({
            selector: 'formocska',
            moduleId: module.id,
            template: "\n                <form #formRef=\"ngForm\"\n                      (ngSubmit)=\"onSubmit(formRef.value)\"\n                    >\n                    <fieldset ngModelGroup=\"login\">\n                        <input #usernameRef=\"ngModel\"\n                               name=\"username\"\n                               [(ngModel)]=\"username\"\n                               type=\"text\"\n                               required\n                               minlength=\"3\" />\n                        <div *ngIf=\"usernameRef.errors?.required\">A mez\u0151 k\u00F6telez\u0151</div>\n                        <div *ngIf=\"usernameRef.errors?.minlength\">Legal\u00E1bb {{usernameRef.errors?.minlength.requiredLength}} hossz\u00FA legyen.</div>\n\n                        <input #passwordRef=\"ngModel\"\n                               name=\"password\"\n                               [(ngModel)]=\"password\"\n                               type=\"password\"\n                               required\n                               minlength=\"5\" />\n                        <div *ngIf=\"passwordRef.errors?.required\">A mez\u0151 k\u00F6telez\u0151</div>\n                        <div *ngIf=\"passwordRef.errors?.minlength\">Legal\u00E1bb {{passwordRef.errors?.minlength.requiredLength}} hossz\u00FA legyen.</div>\n                    </fieldset>\n                    <div *ngFor=\"let location of locations\">\n                        <input ngModel\n                                [attr.id]=\"location\"\n                                [value]=\"location\"\n                            name=\"location\" type=\"radio\">\n                        <label [attr.for]=\"location\">{{location}}</label>\n                    </div>\n\n<select name=\"size\" [ngModel]=\"sizes[0]\">\n    <option *ngFor=\"let size of sizes\"\n            [value]=\"size\">\n        {{size}}\n    </option>\n</select>\n\n                    <button type=\"submit\">Submit</button>\n                </form>\n                "
        }), 
        __metadata('design:paramtypes', [])
    ], FormpeldaComponent);
    return FormpeldaComponent;
}());
exports.FormpeldaComponent = FormpeldaComponent;
//# sourceMappingURL=formpelda.component.js.map
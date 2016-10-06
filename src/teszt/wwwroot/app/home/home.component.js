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
var character_service_1 = require('../shared/character.service');
var HomeComponent = (function () {
    function HomeComponent(characterService) {
        this.characterService = characterService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.characterService.getCharacters()
            .subscribe(function (characters) { return _this.characters = characters; });
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            template: "\n    <div class=\"card-wide mdl-card mdl-shadow--2dp\">\n    <div class=\"mdl-card__title\">\n        <h2 class=\"mdl-card__title-text\">Home</h2>\n    </div>\n    <div class=\"mdl-list\">\n        <div class=\"mdl-list__item\" *ngFor=\"let character of characters\">\n            <span class=\"mdl-list__item-primary-content\">\n                <i class=\"material-icons mdl-list__item-avatar\">person</i>\n                <span>{{character}}</span>cica\n            </span>\n            <a class=\"mdl-list__item-secondary-action mdl-js-ripple-effect mdl-button mdl-js-button mdl-button--icon mdl-button--colored\" href=\"#\"><i class=\"material-icons\">star</i></a>\n        </div>\n    </div>\n</div>\n\n<formocska></formocska>\n"
        }), 
        __metadata('design:paramtypes', [character_service_1.CharacterService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map
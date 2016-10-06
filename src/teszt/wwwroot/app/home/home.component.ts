import { Component, OnInit } from '@angular/core';
import { FormpeldaComponent } from '../formpelda/formpelda.component';
import { CharacterService } from '../shared/character.service';

@Component({
    moduleId: module.id,
    template: `
    <div class="card-wide mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">Home</h2>
    </div>
    <div class="mdl-list">
        <div class="mdl-list__item" *ngFor="let character of characters">
            <span class="mdl-list__item-primary-content">
                <i class="material-icons mdl-list__item-avatar">person</i>
                <span>{{character}}</span>cica
            </span>
            <a class="mdl-list__item-secondary-action mdl-js-ripple-effect mdl-button mdl-js-button mdl-button--icon mdl-button--colored" href="#"><i class="material-icons">star</i></a>
        </div>
    </div>
</div>

<formocska></formocska>
`
})
export class HomeComponent implements OnInit {
    characters: string[];

    constructor(private characterService: CharacterService) { }

    ngOnInit() {
        this.characterService.getCharacters()
            .subscribe(characters => this.characters = characters);
    }
}
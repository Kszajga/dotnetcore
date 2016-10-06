import { Component, ViewChild } from '@angular/core';

import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/combineLatest";
import "rxjs/add/operator/filter";


// service hívásunk itt nincs import { CharacterService } from '../shared/character.service';

@Component({
    selector: 'formocska',
    moduleId: module.id,
    template: `
                <form #formRef="ngForm"
                      (ngSubmit)="onSubmit(formRef.value)"
                    >
                    <fieldset ngModelGroup="login">
                        <input #usernameRef="ngModel"
                               name="username"
                               [(ngModel)]="username"
                               type="text"
                               required
                               minlength="3" />
                        <div *ngIf="usernameRef.errors?.required">A mező kötelező</div>
                        <div *ngIf="usernameRef.errors?.minlength">Legalább {{usernameRef.errors?.minlength.requiredLength}} hosszú legyen.</div>

                        <input #passwordRef="ngModel"
                               name="password"
                               [(ngModel)]="password"
                               type="password"
                               required
                               minlength="5" />
                        <div *ngIf="passwordRef.errors?.required">A mező kötelező</div>
                        <div *ngIf="passwordRef.errors?.minlength">Legalább {{passwordRef.errors?.minlength.requiredLength}} hosszú legyen.</div>
                    </fieldset>
                    <div *ngFor="let location of locations">
                        <input ngModel
                                [attr.id]="location"
                                [value]="location"
                            name="location" type="radio">
                        <label [attr.for]="location">{{location}}</label>
                    </div>

<select name="size" [ngModel]="sizes[0]">
    <option *ngFor="let size of sizes"
            [value]="size">
        {{size}}
    </option>
</select>

                    <button type="submit">Submit</button>
                </form>
                `
})
export class FormpeldaComponent {
    sizes = ["small", "normal", "big"];
    locations = ["Home", "Away"];


    @ViewChild('formRef') form;

    onSubmit(formValue) {
        console.log(formValue);
    }

    /*ngAfterViewInit() {
        Observable.combineLatest(
            this.form.statusChanges,
            this.form.valueChanges,
            (status, value) => ({ status, value })
        )
            .filter(({ status }) => status === 'VALID')
            .subscribe(({ value }) => console.table(value))
    }*/
    

    //ngAfterViewInit() {
    //    this.form.statusChanges
    //        .subscribe(v => console.log(v));
    //}

    /*ngAfterViewInit() {
        this.form.valueChanges
            .subscribe(v => console.table(v));
    }*/
}
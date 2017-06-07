import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MyComponentActions } from './myComponent.actions';
import { routes } from './myComponent.routing';

import { MyComponent } from './myComponent.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        MyComponent
    ],
    providers: [
        MyComponentActions
    ]
})

export class MyComponentModule { }

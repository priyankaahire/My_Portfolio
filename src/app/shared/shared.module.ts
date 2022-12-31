import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PrimengUiModule } from './primeng-ui.module';

@NgModule({
    imports:[PrimengUiModule],
    exports:[],
    providers:[],
    schemas: []
})

export class SharedModel {}
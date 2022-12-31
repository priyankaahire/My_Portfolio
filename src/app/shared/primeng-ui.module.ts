import { NgModule } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {SidebarModule} from 'primeng/sidebar';
const PRIMENG_MODULES = [
    InputTextModule,
    SidebarModule
]
@NgModule({
    declarations: [],
    imports:[PRIMENG_MODULES],
    exports:[PRIMENG_MODULES]
})
export class PrimengUiModule {}
  
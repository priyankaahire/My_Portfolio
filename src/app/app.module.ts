import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './profile/home/home.component'
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule} from '@angular/material/slider'
import { MatMenuModule} from '@angular/material/menu'
import { MatDialogModule} from '@angular/material/dialog'
import { MatDividerModule} from '@angular/material/divider';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list'
import { SidebarModule} from 'primeng/sidebar';
import { ButtonModule} from 'primeng/button';
import { ProfileModule } from './profile/profile.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    ProfileModule,
    HttpClientModule,
    
    /** Mat component */
    MatToolbarModule,
    MatIconModule,
    MatSliderModule,
    MatMenuModule,
    MatDialogModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    /** 
     * Primeng Component
     */
    ButtonModule,
    SidebarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }

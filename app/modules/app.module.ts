import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutComponent } from '../components/layout/layout.component';
import { HeaderComponent } from '../components/header/header.component';
import { LogoComponent } from '../components/logo/logo.component';
import { HeadingPrimaryComponent } from '../components/heading-primary/heading-primary.component';
import { ButtonComponent } from '../components/button/button.component';
import { HeadingPrimarySubComponent } from '../components/heading-primary-sub/heading-primary-sub.component';
import { HeadingPrimaryMainComponent } from '../components/heading-primary-main/heading-primary-main.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    LogoComponent,
    HeadingPrimaryComponent,
    ButtonComponent,
    HeadingPrimarySubComponent,
    HeadingPrimaryMainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }

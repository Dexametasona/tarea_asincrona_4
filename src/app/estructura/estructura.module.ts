import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
})
export class EstructuraModule { }

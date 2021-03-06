import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    ContentComponent
  ]
})
export class CoreModule { }

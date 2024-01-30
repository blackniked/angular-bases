// import { DbzModule } from './dbz.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
// import { ListComponent } from './components/list/list.component';


@NgModule({
  declarations: [
    MainPageComponent,
    // ListComponent
    ListComponent,
    AddCharacterComponent
  ],
  exports:[
    MainPageComponent,
    AddCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import { ProductComponent } from './product/product.component';
import { MembersComponent } from './members/members.component';

@NgModule({
  declarations: [
  
    AppComponent,
    ProductComponent,
    MembersComponent,
  ],
  imports: [
    BrowserModule,FormsModule,
 
    RouterModule.forRoot([
      { path:'product', component:ProductComponent },
      {path:'member', component:MembersComponent},
    ])
  ],
  providers: [ProductComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

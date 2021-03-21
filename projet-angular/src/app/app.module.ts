import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { PremierComponentComponent } from './premier-component/premier-component.component';
import { MarketComponentComponent } from './market-component/market-component.component';
import { HttpClientModule } from '@angular/common/http';
import { GraphQLModule } from './graphql.module';
//import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PremierComponentComponent,
    MarketComponentComponent
  ],
  imports: [
    HttpClientModule,
    //AppRoutingModule,
    BrowserModule,
    FormsModule,
    GraphQLModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BienComponent } from './bien/bien.component';
import { AddBienComponent } from './bien/add-bien/add-bien.component';
import { DetailBienComponent } from './bien/detail-bien/detail-bien.component';
import { ListBienComponent } from './bien/list-bien/list-bien.component';
import { JumbotronComponent } from './bien/jumbotron/jumbotron.component';
import { ItemComponent } from './bien/item/item.component';
import { SeparatorComponent } from './pipes/separator/separator.component';
import { TimeLeftComponent } from './pipes/time-left/time-left.component';
import { SumerizePipe } from './pipes/sumerize.pipe';
import { FilterPipe } from './pipes/filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HeaderComponent,
    BienComponent,
    AddBienComponent,
    DetailBienComponent,
    ListBienComponent,
    JumbotronComponent,
    ItemComponent,
    SeparatorComponent,
    TimeLeftComponent,
    SumerizePipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

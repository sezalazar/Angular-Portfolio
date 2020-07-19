import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FeedbackComponent } from './Components/feedback/feedback.component';
import { PricingTableComponent } from './Components/pricing-table/pricing-table.component';
import { ClientsComponent } from './Components/clients/clients.component';
import { ContentComponent } from './Components/content/content.component';
import { GaleryComponent } from './Components/galery/galery.component';
import { TechnologiesComponent } from './Components/technologies/technologies.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    PricingTableComponent,
    ClientsComponent,
    ContentComponent,
    GaleryComponent,
    TechnologiesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

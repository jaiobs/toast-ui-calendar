import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
      
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TuiCalendarComponent } from './tui-calendar/tui-calendar.component';
import { AppConfig } from './constanKeys';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TuiCalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AppConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }

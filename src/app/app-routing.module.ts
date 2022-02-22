import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TuiCalendarComponent } from './tui-calendar/tui-calendar.component';

const routes: Routes = [
  { path: '', component: TuiCalendarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

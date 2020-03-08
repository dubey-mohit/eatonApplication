import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DummyDataComponent } from './dummy-data/dummy-data.component';
import { AppComponent } from './app.component';
import { RightPanelComponent } from './right-panel/right-panel.component';

const routes: Routes = [
  {path: '', component: RightPanelComponent},
  {path: 'dummydata', component: DummyDataComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { MyNameComponent } from './my-name/my-name.component';


const routes: Routes = [{
  path: 'playground/counter', component: CounterComponent
}, {
  path: 'playground/my-name', component: MyNameComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaygroundRoutingModule { }

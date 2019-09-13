import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyNameComponent } from './my-name/my-name.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatFormFieldModule, MatButtonModule } from '@angular/material';
import { CounterComponent } from './counter/counter.component';

import { PlaygroundRoutingModule } from './playground-routing.module';

@NgModule({
  declarations: [MyNameComponent, CounterComponent],
  exports: [MyNameComponent, CounterComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    PlaygroundRoutingModule
  ]
})
export class PlaygroundModule { }

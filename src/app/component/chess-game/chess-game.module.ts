import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChessGameRoutingModule } from './chess-game-routing.module';
import { ChessGameComponent } from './chess-game.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ChessGameComponent
  ],
  imports: [
    CommonModule,
    ChessGameRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ChessGameModule { }

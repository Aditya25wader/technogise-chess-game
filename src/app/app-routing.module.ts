import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'chess-game',
    loadChildren: () => import('./component/chess-game/chess-game.module').then(m => m.ChessGameModule)
  },
  {
    path: '',
    redirectTo: 'chess-game',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

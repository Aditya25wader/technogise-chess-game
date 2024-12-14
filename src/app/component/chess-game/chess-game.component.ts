import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { King } from 'src/app/classes/king/king';
import { Pawn } from 'src/app/classes/pawn/pawn';
import { Queen } from 'src/app/classes/queen/queen';

@Component({
  selector: 'app-chess-game',
  templateUrl: './chess-game.component.html',
  styleUrls: ['./chess-game.component.scss']
})
export class ChessGameComponent {

  chessMoveForm: FormGroup = new FormGroup({
    chessInput: new FormControl('')
  });
  inputValues: string = '';
  possibleMoves: number[][] = [];
  piece: string = '';
  cellNumber: string = '';

  constructor() {}

  onSubmit(): void {
    this.inputValues = this.chessMoveForm?.get('chessInput')?.value;
    this.piece = this.inputValues.split(',')[0];
    this.cellNumber = this.inputValues.split(',')[1].trim();
    const colNumber = this.cellNumber.charAt(0).toUpperCase();
    const rowNumber = parseInt(this.cellNumber.charAt(1), 10);
    if ((colNumber.charCodeAt(0) >= 65 && colNumber.charCodeAt(0) < 73) && (rowNumber >= 1 && rowNumber < 9)) {
      this.calculateCellNumber(rowNumber, colNumber);
    } else {
      window.alert('Please enter correct cell number!');
    }
  }

  calculateCellNumber(rowNumber: number, colNumber: string): void {
    switch(this.piece.toLowerCase()) {
      case 'king':
        const king = new King(rowNumber, (colNumber.charCodeAt(0) + 1) - 65);
        this.possibleMoves = king.findPossibleCells();
        break;
      case 'queen':
        const queen = new Queen(rowNumber, (colNumber.charCodeAt(0) + 1) - 65);
        this.possibleMoves = queen.findPossibleCells();
        break;
      case 'pawn':
        const pawn = new Pawn(rowNumber, (colNumber.charCodeAt(0) + 1) - 65);
        this.possibleMoves = pawn.findPossibleCells();
        break;
      default:
        window.alert('Please enter correct piece name!');
        break;
    }
  }

  getCellNumber(move: number[]): string {
    return String.fromCharCode(65 + (move[1] - 1)) + move[0];
  }
}

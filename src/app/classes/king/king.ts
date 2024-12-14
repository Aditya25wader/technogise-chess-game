import { Constants } from "src/app/constants/constants";

export class King {
    moves: number[][] = [];
    directions = Constants.DIRECTIONS;
    row: number;
    column: number;

    constructor(row: number, column: number) {
        this.row = row;
        this.column = column;
    }

    findPossibleCells() {
        // Loop through all 8 directions and find valid moves
        for (let direction of this.directions) {
            let r: number = this.row + direction.dr;
            let c: number = this.column + direction.dc;

            // Check if the move is within the bounds of the chessboard
            if (r >= 1 && r < 9 && c >= 1 && c < 9) {
                this.moves.push([r, c]);
            }
        }

        return this.moves;
    }
}

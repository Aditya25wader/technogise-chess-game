export class Pawn {
    moves: number[][] = [];
    row: number;
    column: number;

    constructor(row: number, column: number) {
        this.row = row;
        this.column = column;
    }

    findPossibleCells() {
        if (this.row >= 0 && this.row < 8) {
            this.moves.push([this.row + 1, this.column]);
        }

        return this.moves;
    }
}

import { Constants } from "src/app/constants/constants";

export class Queen {
    moves: number[][] = [];
    directions = Constants.DIRECTIONS;
    row: number;
    column: number;

    constructor(row: number, column: number) {
        this.row = row;
        this.column = column;
    }

    findPossibleCells() {
        // Loop through all 8 directions
        for (let direction of this.directions) {
            let r = this.row;
            let c = this.column;

            // Move in the direction until we hit the edge of the board
            while (true) {
                r += direction.dr;
                c += direction.dc;

                // If out of bounds, stop exploring this direction
                if (r < 1 || r >= 9 || c < 1 || c >= 9) break;

                this.moves.push([r, c]);
            }
        }
        return this.moves;
    }
}

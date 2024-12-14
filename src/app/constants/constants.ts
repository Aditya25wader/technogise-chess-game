export class Constants {
    // Directions for horizontal, vertical, and diagonal moves
    public static readonly DIRECTIONS = [
        { dr: 0, dc: 1 }, // Right
        { dr: 0, dc: -1 }, // Left
        { dr: 1, dc: 0 }, // Down
        { dr: -1, dc: 0 }, // Up
        { dr: -1, dc: -1 }, // Top-left diagonal
        { dr: -1, dc: 1 }, // Top-right diagonal
        { dr: 1, dc: -1 }, // Bottom-left diagonal
        { dr: 1, dc: 1 } // Bottom-right diagonal
    ];

}
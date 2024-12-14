import { Queen } from './queen';

describe('Queen', () => {
  let queenClass: Queen;
  let mockRowNumber: number = 8;
  let mockColumnNumber: number = 8;

  beforeEach(() => {
    queenClass = new Queen(mockRowNumber, mockColumnNumber);
  });

  it('should create queen class instance', () => {
    expect(queenClass).toBeTruthy();
  });

  it("should find possible cells for queen's move", () => {
    queenClass.findPossibleCells();
    const returnedCells = [[8, 7], [8, 6], [8, 5], [8, 4], [8, 3], [8, 2], [8, 1], [7, 8], [6, 8], [5, 8], [4, 8], [3, 8], [2, 8], [1, 8], [7, 7], [6, 6], [5, 5], [4, 4], [3, 3], [2, 2], [1, 1]];
    expect(queenClass.moves).toEqual(returnedCells);
  });
});

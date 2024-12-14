import { Pawn } from './pawn';

describe('Pawn', () => {
  let pawnClass: Pawn;
  let mockRowNumber: number = 1;
  let mockColumnNumber: number = 1;

  beforeEach(() => {
    pawnClass = new Pawn(mockRowNumber, mockColumnNumber);
  });

  it('should create pawn class instance', () => {
    expect(pawnClass).toBeTruthy();
  });

  it("should find possible cells for pawn's move", () => {
    mockRowNumber = 1;
    mockColumnNumber = 1;
    pawnClass = new Pawn(mockRowNumber, mockColumnNumber);
    pawnClass.findPossibleCells();
    const returnedCells = [[2, 1]];
    expect(pawnClass.moves).toEqual(returnedCells);
  });

  it("should find possible cells for pawn's move if pawn is in last cell", () => {
    mockRowNumber = 8;
    mockColumnNumber = 8;
    pawnClass = new Pawn(mockRowNumber, mockColumnNumber);
    pawnClass.findPossibleCells();
    expect(pawnClass.moves).toEqual([]);
  });
});

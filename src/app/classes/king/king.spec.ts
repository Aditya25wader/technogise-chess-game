import { King } from './king';

describe('King', () => {
  let kingClass: King;
  let mockRowNumber: number = 4;
  let mockColumnNumber: number = 4;

  beforeEach(() => {
    kingClass = new King(mockRowNumber, mockColumnNumber);
  });

  it('should create king class instance', () => {
    expect(kingClass).toBeTruthy();
  });

  it("should find possible cells for king's move", () => {
    kingClass.findPossibleCells();
    const returnedCells = [[4,5], [4,3], [5,4], [3,4], [3,3], [3,5], [5,3], [5,5]];
    expect(kingClass.moves).toEqual(returnedCells);
  });
});

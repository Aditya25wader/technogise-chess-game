import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { King } from 'src/app/classes/king/king';
import { Pawn } from 'src/app/classes/pawn/pawn';
import { Queen } from 'src/app/classes/queen/queen';

import { ChessGameComponent } from './chess-game.component';

describe('ChessGameComponent', () => {
  let component: ChessGameComponent;
  let fixture: ComponentFixture<ChessGameComponent>;
  let alertSpy: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChessGameComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChessGameComponent);
    component = fixture.componentInstance;
    alertSpy = spyOn(window, 'alert');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSubmit, when cell number is incorrect, will show alert', () => {
    component.chessMoveForm.get('chessInput')?.setValue('pawn,a9');

    component.onSubmit();

    expect(alertSpy).toHaveBeenCalledWith('Please enter correct cell number!');
  })

  it('should call onSubmit, when cell number is correct, should call calculateCellNumber method', () => {
    component.chessMoveForm.get('chessInput')?.setValue('pawn,a7');
    const calculateCellNumberSpy = spyOn(component, 'calculateCellNumber');

    component.onSubmit();

    expect(calculateCellNumberSpy).toHaveBeenCalled();
  })

  it("should call calculateCellNumber, if entered piece name is 'king'", () => {
    component.piece = 'KING';
    const rowNumber = 4;
    const colNumber = 'D';
    const kingClass = new King(4, 4);
    const mockPossibleMoves = [[4,5], [4,3], [5,4], [3,4], [3,3], [3,5], [5,3], [5,5]];
    spyOn(kingClass, 'findPossibleCells').and.returnValue(mockPossibleMoves);

    component.calculateCellNumber(rowNumber, colNumber);

    expect(component.possibleMoves).toEqual(mockPossibleMoves);
  })

  it("should call calculateCellNumber, if entered piece name is 'queen'", () => {
    component.piece = 'queen';
    const rowNumber = 8;
    const colNumber = 'H';
    const queenClass = new Queen(8, 8);
    const mockPossibleMoves = [[8, 7], [8, 6], [8, 5], [8, 4], [8, 3], [8, 2], [8, 1], [7, 8], [6, 8], [5, 8], [4, 8], [3, 8], [2, 8], [1, 8], [7, 7], [6, 6], [5, 5], [4, 4], [3, 3], [2, 2], [1, 1]];
    spyOn(queenClass, 'findPossibleCells').and.returnValue(mockPossibleMoves);

    component.calculateCellNumber(rowNumber, colNumber);

    expect(component.possibleMoves).toEqual(mockPossibleMoves);
  })

  it("should call calculateCellNumber, if entered piece name is 'pawn'", () => {
    component.piece = 'PAWN';
    const rowNumber = 1;
    const colNumber = 'A';
    const pawnClass = new Pawn(1, 1);
    const mockPossibleMoves = [[2, 1]];
    spyOn(pawnClass, 'findPossibleCells').and.returnValue(mockPossibleMoves);

    component.calculateCellNumber(rowNumber, colNumber);

    expect(component.possibleMoves).toEqual(mockPossibleMoves);
  })

  it("should call calculateCellNumber, if entered wrong piece name", () => {
    component.piece = 'test';
    const rowNumber = 1;
    const colNumber = 'A';

    component.calculateCellNumber(rowNumber, colNumber);

    expect(alertSpy).toHaveBeenCalledWith('Please enter correct piece name!');
  })

  it('should call getCellNumber, return cell number', () => {
    const cellNumber = component.getCellNumber([2, 1]);

    expect(cellNumber).toBe('A2');
  })
});

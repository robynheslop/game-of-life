import gameOfLife, { calculateCellValue } from "./game-of-life";

/*

RULES OF THE GAME:
1. If a grey square touches 3 yellow squares it turns yellow.
2. If a yellow square touches less than 2 other yellow squares, it turns grey.
3. If a yellow square touches more than 3 yellow squares, it turns grey.
4. Otherwise, squares maintain their colour.

Grey cells represented in tests by 'false';
Yellow cells as 'true';

*/

describe("game of life - grey cell tests", () => {

    it("receives a grey cell with 0 adjoining yellow cells, returns grey cell", () => {
        expect(calculateCellValue(false, 0)).toBe(false);
    });
    it("receives a grey cell with 1 adjoining yellow cell, returns grey cell", () => {
        expect(calculateCellValue(false, 1)).toBe(false);
    });
    it("receives a grey cell with 2 adjoining yellow cells, returns grey cell", () => {
        expect(calculateCellValue(false, 2)).toBe(false);
    });
    it("receives a grey cell with 3 adjoining yellow cells, returns yellow cell", () => {
        expect(calculateCellValue(false, 3)).toBe(true);
    });
    it("receives a grey cell with 4 adjoining yellow cells, returns grey cell", () => {
        expect(calculateCellValue(false, 4)).toBe(false);
    });
    it("receives a grey cell with 5 adjoining yellow cells, returns grey cell", () => {
        expect(calculateCellValue(false, 5)).toBe(false);
    });
    it("receives a grey cell with 6 adjoining yellow cells, returns grey cell", () => {
        expect(calculateCellValue(false, 6)).toBe(false);
    });
    it("receives a grey cell with 7 adjoining yellow cells, returns grey cell", () => {
        expect(calculateCellValue(false, 7)).toBe(false);
    });
    it("receives a grey cell with 8 adjoining yellow cells, returns grey cell", () => {
        expect(calculateCellValue(false, 8)).toBe(false);
    });

});

describe("game of life - yellow cell tests", () => {

    it("receives a yellow cell with 0 adjoining yellow cells, returns grey cell", () => {
        expect(calculateCellValue(true, 0)).toBe(false);
    });
    it("receives a yellow cell with 1 adjoining yellow cell, returns grey cell", () => {
        expect(calculateCellValue(true, 1)).toBe(false);
    });
    it("receives a yellow cell with 2 adjoining yellow cells, returns yellow cell", () => {
        expect(calculateCellValue(true, 2)).toBe(true);
    });
    it("receives a yellow cell with 3 adjoining yellow cells, returns yellow cell", () => {
        expect(calculateCellValue(true, 3)).toBe(true);
    });
    it("receives a yellow cell with 4 adjoining yellow cells, returns grey cell", () => {
        expect(calculateCellValue(true, 4)).toBe(false);
    });
    it("receives a yellow cell with 5 adjoining yellow cells, returns grey cell", () => {
        expect(calculateCellValue(true, 5)).toBe(false);
    });
    it("receives a yellow cell with 6 adjoining yellow cells, returns grey cell", () => {
        expect(calculateCellValue(true, 6)).toBe(false);
    });
    it("receives a yellow cell with 7 adjoining yellow cells, returns grey cell", () => {
        expect(calculateCellValue(true, 7)).toBe(false);
    });
    it("receives a yellow cell with 8 adjoining yellow cells, returns grey cell", () => {
        expect(calculateCellValue(true, 8)).toBe(false);
    });

});

describe("game of life - board tests", () => {

    it("receives a board of only grey cells, returns board with grey cells", () => {
        const board = [
            [false, false, false],
            [false, false, false],
            [false, false, false]
        ]
        expect(gameOfLife(board)).toStrictEqual([[false, false, false], [false, false, false], [false, false, false]])
    });

    it("receives a board of containing one yellow cell, returns board with grey cells", () => {
        const board = [
            [false, false, false],
            [false, true, false],
            [false, false, false]
        ]
        expect(gameOfLife(board)).toStrictEqual([[false, false, false], [false, false, false], [false, false, false]])
    });

    it("receives a board of containing two adjoining yellow cells, returns board with grey cells", () => {
        const board = [
            [false, false, true],
            [false, true, false],
            [false, false, false]
        ]
        expect(gameOfLife(board)).toStrictEqual([[false, false, false], [false, false, false], [false, false, false]])
    });

    it("receives a board of containing three adjoining yellow cells, returns board with correct cells", () => {
        const board = [
            [false, false, true],
            [true, true, false],
            [false, false, false]
        ]
        expect(gameOfLife(board)).toStrictEqual([[false, true, false], [false, true, false], [false, false, false]])
    });

    it("receives a board of containing three not-adjoining yellow cells, where no grey cells connect to > 2 yellow cells, returns board with all grey cells", () => {
        const board = [
            [false, false, false, true,],
            [true, false, false, false],
            [false, false, true, false]
        ]
        expect(gameOfLife(board)).toStrictEqual([[false, false, false, false], [false, false, false, false], [false, false, false, false]])
    });

    it("receives a board of containing a yellow cell with 4 adjoining cells, returns correct board", () => {
        const board = [
            [false, false, true],
            [true, true, false],
            [true, true, false]
        ]
        expect(gameOfLife(board)).toStrictEqual([[false, true, false], [true, false, true], [true, true, false]])
    });
});
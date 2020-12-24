import gameOfLife, { cellCheck } from "./game-of-life";

// cell colours to be represented by booleans;
// grey cell by false
// yellow cells by true 

describe("game of life", () => {

    /*
    grey cell checks 
    */
    it("receives a grey cell with 0 adjoining yellow cells, returns grey cell", () => {
        expect(cellCheck(false, 0)).toBe(false);
    });
    it("receives a grey cell with 1 adjoining yellow cell, returns grey cell", () => {
        expect(cellCheck(false, 1)).toBe(false);
    });
    it("receives a grey cell with 2 adjoining yellow cells, returns grey cell", () => {
        expect(cellCheck(false, 2)).toBe(false);
    });
    it("receives a grey cell with 3 adjoining yellow cells, returns yellow cell", () => {
        expect(cellCheck(false, 3)).toBe(true);
    });
    it("receives a grey cell with 4 adjoining yellow cells, returns grey cell", () => {
        expect(cellCheck(false, 4)).toBe(false);
    });
    it("receives a grey cell with 5 adjoining yellow cells, returns grey cell", () => {
        expect(cellCheck(false, 5)).toBe(false);
    });
    it("receives a grey cell with 6 adjoining yellow cells, returns grey cell", () => {
        expect(cellCheck(false, 6)).toBe(false);
    });
    it("receives a grey cell with 7 adjoining yellow cells, returns grey cell", () => {
        expect(cellCheck(false, 7)).toBe(false);
    });
    it("receives a grey cell with 8 adjoining yellow cells, returns grey cell", () => {
        expect(cellCheck(false, 8)).toBe(false);
    });

    /*
    yellow cell checks
    */
    it("receives a yellow cell with 0 adjoining yellow cells, returns grey cell", () => {
        expect(cellCheck(true, 0)).toBe(false);
    });
    it("receives a yellow cell with 1 adjoining yellow cell, returns grey cell", () => {
        expect(cellCheck(true, 1)).toBe(false);
    });
    it("receives a yellow cell with 2 adjoining yellow cells, returns yellow cell", () => {
        expect(cellCheck(true, 2)).toBe(true);
    });
    it("receives a yellow cell with 3 adjoining yellow cells, returns yellow cell", () => {
        expect(cellCheck(true, 3)).toBe(true);
    });
    it("receives a yellow cell with 4 adjoining yellow cells, returns grey cell", () => {
        expect(cellCheck(true, 4)).toBe(false);
    });
    it("receives a yellow cell with 5 adjoining yellow cells, returns grey cell", () => {
        expect(cellCheck(true, 5)).toBe(false);
    });
    it("receives a yellow cell with 6 adjoining yellow cells, returns grey cell", () => {
        expect(cellCheck(true, 6)).toBe(false);
    });
    it("receives a yellow cell with 7 adjoining yellow cells, returns grey cell", () => {
        expect(cellCheck(true, 7)).toBe(false);
    });
    it("receives a yellow cell with 8 adjoining yellow cells, returns grey cell", () => {
        expect(cellCheck(true, 8)).toBe(false);
    });

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
});
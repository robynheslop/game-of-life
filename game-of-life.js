export const cellCheck = (value, adjacentCells) => {
    if (value) {
        switch (adjacentCells) {
            case 2: return true;
            case 3: return true;
            default: return false;
        }
    }
    if (adjacentCells === 3) {
        return true;
    }
    return value;
}

const gameOfLife = board => {

    // create a deep clone of the board
    const newBoard = JSON.parse(JSON.stringify(board));

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const value = board[i][j];
            let adjacentCellsValue = 0;

            // there is a row above containing 
            if (i > 0) {
                // check each cell for truthiness
                if (board[i - 1][j - 1]) {
                    adjacentCellsValue++
                }
                if (board[i - 1][j]) {
                    adjacentCellsValue++
                }
                if (board[i - 1][j + 1]) {
                    adjacentCellsValue++
                }
            }

            // if there is a row below 
            if (i < (board.length - 1)) {
                // check each cell for truthiness
                if (board[i + 1][j - 1]) {
                    adjacentCellsValue++
                }
                if (board[i + 1][j]) {
                    adjacentCellsValue++
                }
                if (board[i + 1][j + 1]) {
                    adjacentCellsValue++
                }
            }
            // if there is a cell left
            if (j > 0) {
                // check each cell for truthiness
                if (board[i][j - 1]) {
                    adjacentCellsValue++
                }
            }

            // if there is a cell right
            if (j < (board[i].length)) {
                // check each cell for truthiness
                if (board[i][j + 1]) {
                    adjacentCellsValue++
                }
            }
            
            const newValue = cellCheck(value, adjacentCellsValue);
            newBoard[i][j] = newValue;
            
        }
    }
    console.log("board", board)
    console.log("newBoard", newBoard)

    return newBoard;
}

export default gameOfLife;
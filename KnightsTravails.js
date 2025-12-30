const KnightsTravails = (() => {
    class Node {
        constructor(position, parent = null) {
            this.position = position;
            this.parent = parent;
        }
    }

    const createBoard = () => {
        let board = [];
        for (let row = 0; row < 8; row++) {
            board[row] = [];
            for (let col = 0; col < 8; col++) {
                board[row][col] = 0;
            }
        }
        return board;
    }


    return {  };
})();
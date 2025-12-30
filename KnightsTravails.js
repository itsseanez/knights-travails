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

    const getValidMoves = (position, board) => {
        moves = [
            [+2, +1], [+2, -1], [-2, +1], [-2, -1],
            [+1, +2], [+1, -2], [-1, +2], [-1, -2]
        ];
        validMoves = [];
        moves.forEach(move => {
            let newX = position[0] + move[0];
            let newY = position[1] + move[1];
            if((newX < 8 && newY < 8) && (board[newX][newY] !== 1)) validMoves.push(move);
        });
        return validMoves;
    }

    const knightMoves = (start, end) => {
        let board = this.createBoard();
        let queue = [];
        queue.push(new Node(start));
        board[start[0]][start[1]] = 1;

    }

    return { knightMoves };
})();
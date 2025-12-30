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
        const moves = [
            [+2, +1], [+2, -1], [-2, +1], [-2, -1],
            [+1, +2], [+1, -2], [-1, +2], [-1, -2]
        ];
        let validMoves = [];
        moves.forEach(move => {
            let newX = position[0] + move[0];
            let newY = position[1] + move[1];
            if ((newX >= 0 && newY >= 0) && (newX < 8 && newY < 8) && (board[newX][newY] !== 1)) validMoves.push(move);
        });
        return validMoves;
    }

    const showPath = (node) => {
        let path = [];
        while (node) {
            path.unshift(node.position);
            node = node.parent;
        }
        return path;
    }

    const knightMoves = (start, end) => {
        let board = createBoard();
        let queue = [];
        let currentNode;
        queue.push(new Node(start));
        board[start[0]][start[1]] = 1;
        while (queue.length !== 0) {
            currentNode = queue.shift();
            if ((currentNode.position[0] === end[0]) && (currentNode.position[1] === end[1])) return showPath(currentNode);
            //console.log(getValidMoves(currentNode.position, board))
            getValidMoves(currentNode.position, board).forEach(move => {
                let newX = currentNode.position[0] + move[0];
                let newY = currentNode.position[1] + move[1];
                //console.log([newX, newY])
                queue.push(new Node([newX, newY], currentNode));
                board[newX][newY] = 1;
            });
        }
    }

    return { knightMoves };
})();
console.log(KnightsTravails.knightMoves([0, 0], [3, 3]))
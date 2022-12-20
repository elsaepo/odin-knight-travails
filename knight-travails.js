function knightMoves(knight, dest) {
    let gameBoard = createBoard(8, 8);
    if (!checkValidSquare(knight) || !checkValidSquare(dest)) {
        return "Please input a valid knight location and destination";
    }
    let [destX, destY] = dest;

    console.log(knightMovesList)
}

// Recursive function to find the list of knight moves to reach the destination
function knightRec(knight, dest) {
    if (knight === dest) return dest;
    let knightMovesList = getKnightMoves(gameBoard, knight)
}


// levelOrder(fn, root = this.root) {
//     let arr = [root];
//     function pushLevelOrder(index = 0) {
//         if (!arr[index]) return;
//         let current = arr[index];
//         if (current.left) arr.push(current.left);
//         if (current.right) arr.push(current.right);
//         pushLevelOrder(index + 1);
//     }
//     pushLevelOrder();
//     return this.mapNodes(arr, fn);
// }


// Create an array-based grid of size x, y
function createBoard(x, y) {
    let board = [];
    for (let row = 0; row < y; row++) {
        let rowArr = [];
        for (let col = 0; col < x; col++) {
            rowArr.push(null);
        }
        board.push(rowArr);
    }
    return board;
}

// Return a list of possible squares for the knight to move to
function getKnightMoves(gameBoard, knight) {
    let movesArray = [];
    for (let y = -2; y <= 2; y++) {
        for (let x = -2; x <= 2; x++) {
            // Knight moves a total of 3 orthogonal squares, so we can easily trim for valid moves
            if (Math.abs(y) + Math.abs(x) === 3) {
                let knightX = knight[1] + x;
                let knightY = knight[0] + y;
                if (checkValidSquare(gameBoard, [knightX, knightY])) {
                    movesArray.push([knightX, knightY]);
                }
            }
        }
    }
    return movesArray
}

// Check if the given location is a valid square on the board
function checkValidSquare(gameBoard, move) {
    console.log(move)
    if (gameBoard[move[1]] !== undefined &&
        gameBoard[move[1]][move[0]] !== undefined) {
        return true;
    }
    else return false;
}

knightMoves([0, 0], [3, 3])
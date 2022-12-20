function knightMoves(knightLoc, dest) {
    let gameBoard = createBoard(8, 8);
    if (!checkValidSquare(gameBoard, knightLoc) || !checkValidSquare(gameBoard, dest)) {
        return "Please input a valid knight location and destination";
    }
    let queue = [createKnightObject(knightLoc)];
    let moveTotal = 0;
    // Recursive function to find the list of knight moves to reach the destination
    // Returns an object with loc = location and prev = object representing previous lcoation
    function moveSearch(index = 0) {
        if (!queue[index]) return;
        if (index > 1000000) return;
        let current = queue[index];
        if (current.loc[0] === dest[0] && current.loc[1] === dest[1]) return current;
        let nextMoves = getKnightMoves(gameBoard, current.loc);
        nextMoves.forEach(obj => {
            let possibleMove = createKnightObject(obj);
            possibleMove.prev = current;
            queue.push(possibleMove);
        });
        moveTotal++
        return moveSearch(index + 1);
    }
    // Get the knight object with nested prev properties and reformat into an array of moves
    let moveObject = moveSearch();
    let moveArray = [];
    while (moveObject){
        moveArray.unshift(moveObject.loc);
        moveObject = moveObject.prev;
    }
    console.log(`=> You made it in ${moveArray.length - 1} moves! Here's your path:`)
    for (let i = 0; i < moveArray.length; i++){
        console.log(`[${moveArray[i]}]`)
    }
}

function createKnightObject(loc) {
    return {
        loc: loc,
        prev: null
    };
}

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
// This nested loop is less efficient than just creating 8 different moves, but less verbose (and a bit more fun)
function getKnightMoves(gameBoard, knightLoc) {
    let movesArray = [];
    for (let y = -2; y <= 2; y++) {
        for (let x = -2; x <= 2; x++) {
            // Knight moves a total of 3 orthogonal squares, so we can easily trim for valid moves
            if (Math.abs(y) + Math.abs(x) === 3) {
                let knightX = knightLoc[0] + x;
                let knightY = knightLoc[1] + y;
                if (checkValidSquare(gameBoard, [knightX, knightY])) {
                    movesArray.push([knightX, knightY]);
                }
            }
        }
    }
    return movesArray;
}

// Check if the given location is a valid square on the board
function checkValidSquare(gameBoard, move) {
    if (gameBoard[move[1]] !== undefined &&
        gameBoard[move[1]][move[0]] !== undefined) {
        return true;
    }
    else return false;
}

knightMoves([0, 0], [7, 7])
knightMoves([0, 1], [7, 7])
knightMoves([4, 2], [7, 7])
# Knight Travails
A script to determine the movements of a chess knight between 2 squares on a chessboard.

Part of The Odin Project's [curriculum](https://www.theodinproject.com/lessons/javascript-knights-travails).

Created by Carl Madsen, 2022.

## Functionality

* **Knight Travails** - given the start and end positions in an 8*8 array, find the fastest route for a chess knight to arrive and log the steps in the console

## Learning outcomes & challenges

* Setting up the chess board and checking for valid moves was simple - and once I figured out that I needed the knight to keep track of it's previous moves, everything fell into place. **Recursively breadth-first traverse** the knight's movements, and once the move equals the destination, return the knight object which will have nested prev properties that represent the path taken.
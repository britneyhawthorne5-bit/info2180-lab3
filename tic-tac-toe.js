document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('#board div');
    let nextUp = true; 
    const boardGrid = [null, null, null, null, null, null, null, null, null];
    const statusDiv = document.getElementById('status');

    const winningCombos = [
        [0, 1, 2], // 123
        [3, 4, 5], // 456
        [6, 7, 8], // 789
        [0, 3, 6], // 147
        [1, 4, 7], // 258
        [2, 5, 8], // 369
        [0, 4, 8], // 159
        [2, 4, 6]  // 357
         ];

    squares.forEach(function(square, index) {
        square.classList.add('square');

        square.addEventListener('click', function() {
            if (boardGrid[index] == 'O' || boardGrid[index] == 'X') return;
            if (statusDiv.classList.contains('you-won')) return;
            let mark = null;
            if (nextUp) {
                mark = 'X';
                square.classList.add('X');
            } 
            else {
                mark = 'O';
                square.classList.add('O');
            }
            square.textContent = mark;          
            boardGrid[index] = mark;           
             
            checkWinner();

            nextUp = !nextUp;                 
        });
        square.addEventListener('mouseenter', function() {
        square.classList.add('hover');     
        });

        square.addEventListener('mouseleave', function() {
        square.classList.remove('hover');  
        });

        function checkWinner() {
        let xIndexes = [];
        let oIndexes = [];

        boardGrid.forEach((mark, i) => {
            if (mark === 'X') xIndexes.push(i);
            if (mark === 'O') oIndexes.push(i);
        });

        for (const combo of winningCombos) {
            if (combo.every(pos => xIndexes.includes(pos))) {
                statusDiv.textContent = "Congratulations! X is the Winner!";
                statusDiv.classList.add('you-won');
                return;
            }
            if (combo.every(pos => oIndexes.includes(pos))) {
                statusDiv.textContent = "Congratulations! O is the Winner!";
                statusDiv.classList.add('you-won');
                return;
            }
        }

        if (!boardGrid.includes(null)) {
            statusDiv.textContent = "It's a draw!";
        }
    }
    });

    const newGameButton = document.querySelector('.btn');
    newGameButton.addEventListener('click', function() {
    
    for (let i = 0; i < boardGrid.length; i++) {
        boardGrid[i] = null;
    }
    
    squares.forEach(square => {
        square.textContent = '';
        square.classList.remove('X', 'O');
    });
    statusDiv.textContent = "Move your mouse over a square and click to play an X or an O.";
    statusDiv.classList.remove('you-won');
    nextUp = true;
    });


    console.log('Squares startup');
});


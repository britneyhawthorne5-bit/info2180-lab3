document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('#board div');
    let nextUp = true; 
    const boardGrid = [null, null, null, null, null, null, null, null, null];

    squares.forEach(function(square, index) {
        square.classList.add('square');

        square.addEventListener('click', function() {
            if (boardGrid[index] == 'O' || boardGrid[index] == 'X') return;
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

            nextUp = !nextUp;                 
        });
        square.addEventListener('mouseenter', function() {
        square.classList.add('hover');     
        });

        square.addEventListener('mouseleave', function() {
        square.classList.remove('hover');  
        });
    });

    console.log('Squares startup');
});


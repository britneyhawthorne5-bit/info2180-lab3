document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('#board div');
    let nextIs = true; 
    const boardState = [null, null, null, null, null, null, null, null, null];

    squares.forEach(function(square, index) {
        square.classList.add('square');

        square.addEventListener('click', function() {
            if (boardState[index] == 'O' || boardState[index] == 'X') return;
            let mark = null;
            if (nextIs) {
                mark = 'X';
            } else {
                mark = 'O';
            }
            square.textContent = mark;          
            square.classList.add(mark);        
            boardState[index] = mark;           

            nextIs = !nextIs;                 
        });
    });

    console.log('Squares startup');
});


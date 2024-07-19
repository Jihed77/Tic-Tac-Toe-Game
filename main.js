let turn = 'x';
let title = document.querySelector('.title');
let boxes = [];
let player1 = document.getElementById('player1');
let player2 = document.getElementById('player2');
let drawCount = document.getElementById('draw');
let player1Score = 0;
let player2Score = 0;
let drawScore = 0;
let gameEnded = false;

function game(id) {
    if (gameEnded) return;

    let element = document.getElementById(id);
    if (element.innerHTML == '') {
        if (turn === 'x') {
            element.innerHTML = '<i class="fa-solid fa-x"></i>';
            turn = 'o';
            title.innerHTML = 'O\' s turn';
        } else {
            element.innerHTML = '<i class="fa-sharp fa-solid fa-o"></i>';
            turn = 'x';
            title.innerHTML = 'X\' s turn';
        }
        win();
    }
}

function win() {
    for (let i = 1; i <= 9; i++) {
        boxes[i] = document.getElementById(`box${i}`).innerHTML;
    }

    let winningCombinations = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];

    for (let combination of winningCombinations) {
        let [a, b, c] = combination;
        if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
            end(a, b, c);
            return;
        }
    }

    if (boxes.slice(1).every(box => box !== '')) {
        drawScore++;
        drawCount.innerHTML = drawScore;
        title.innerHTML = 'It\'s a Draw!';
        gameEnded = true;
    }
}

function end(num1, num2, num3) {
    if (`${boxes[num1]}` === '<i class="fa-solid fa-x"></i>') {
        title.innerHTML = 'Player 1 is The WINNER';
    } else if (`${boxes[num1]}` === '<i class="fa-sharp fa-solid fa-o"></i>') {
        title.innerHTML = 'Player 2 is The WINNER';
    }

    document.getElementById(`box${num1}`).style.background = '#4CAF50';
    document.getElementById(`box${num2}`).style.background = '#4CAF50';
    document.getElementById(`box${num3}`).style.background = '#4CAF50';

    if (boxes[num1] === '<i class="fa-solid fa-x"></i>') {
        player1Score++;
        player1.innerHTML = player1Score;
    } else {
        player2Score++;
        player2.innerHTML = player2Score;
    }
    gameEnded = true;
}

function resetGame() {
    for (let i = 1; i <= 9; i++) {
        let box = document.getElementById(`box${i}`);
        box.innerHTML = '';
        box.style.background = '';
    }
    turn = 'x';
    title.innerHTML = 'Start the Game';
    gameEnded = false;
}

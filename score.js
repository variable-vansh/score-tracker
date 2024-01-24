const winScore = document.getElementById('playingTo');
const btn1 = document.getElementById('p1Btn'); // Fix: Use getElementById
const btn2 = document.getElementById('p2Btn'); // Fix: Use getElementById
const btn3 = document.getElementById('resetBtn'); // Fix: Use getElementById
var isGameActive = true;

var p1 = document.getElementById('p1').innerText; // Fix: Use getElementById
var p2 = document.getElementById('p2').innerText; // Fix: Use getElementById

btn1.addEventListener('click', p1Plus);
btn2.addEventListener('click', p2Plus);
btn3.addEventListener('click', reset);

function p1Plus() {
    p1++;
    // Update the displayed score
    document.getElementById('p1').innerText = p1;

    if (p1 == winScore.value) {
        isGameActive = false;
        document.getElementById('p1').style.color = 'green';
        document.getElementById('p2').style.color = 'red';
        document.getElementById('p1Btn').style.color = 'green';
        document.getElementById('p1Btn').innerText = "PLAYER 1 WON";
        document.getElementById('p2Btn').innerText = "PLAYER 2 LOST";
        document.getElementById('p2Btn').style.color = 'red';
        disableButtons();
    }
}

function p2Plus() {
    p2++;
    // Update the displayed score
    document.getElementById('p2').innerText = p2;

    if (p2 == winScore.value) {
        isGameActive = false;
        document.getElementById('p1').style.color = 'red';
        document.getElementById('p2').style.color = 'green';
        document.getElementById('p1Btn').style.color = 'red';
        document.getElementById('p1Btn').innerText = "PLAYER 1 LOST";
        document.getElementById('p2Btn').innerText = "PLAYER 2 WON";
        document.getElementById('p2Btn').style.color = 'green';
        disableButtons();
    }
}

function reset() {
    // Reset scores
    p1 = 0;
    p2 = 0;

    // Update the displayed scores
    document.getElementById('p1').innerText = p1;
    document.getElementById('p2').innerText = p2;
    enableButtons();

    document.getElementById('p1').style.color = 'black';
    document.getElementById('p2').style.color = 'black';
    document.getElementById('p1Btn').style.color = 'black';
    document.getElementById('p1Btn').innerText = "Player 1 scored";
    document.getElementById('p2Btn').innerText = "Player 2 scored";
    document.getElementById('p2Btn').style.color = 'black';
}

function disableButtons() {
    btn1.disabled = true;
    btn2.disabled = true;
}

function enableButtons() {
    btn1.disabled = false;
    btn2.disabled = false;
}

hand1 = document.querySelector('.hand-1');
hand2 = document.querySelector('.hand-2');
btn = document.querySelector('#btn');
song = document.querySelector('audio');
score = document.querySelector('#s-credit');

let isDancing = false;
let currScore = 0;

function dance() {
    [hand1.innerHTML, hand2.innerHTML] =[hand2.innerHTML, hand1.innerHTML];
    currScore += 100;
    score.innerHTML = currScore;
}
let doDance;
function startDance() {
    if (isDancing ==  false) {
        doDance = setInterval(dance, 500);
        song.play();
        isDancing = true;
    } else {
        clearInterval(doDance);
        song.pause();
        isDancing = false;
        currScore -= 1000;
        score.innerHTML = currScore;
    }
}

btn.addEventListener ('click', startDance);
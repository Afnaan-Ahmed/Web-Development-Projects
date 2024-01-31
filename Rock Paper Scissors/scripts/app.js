const banner = document.getElementById('banner')

const userChoiceDisplay = document.getElementById('user-choice')
const computerChoiceDisplay = document.getElementById('computer-choice')

const winsComp = document.getElementById('wins');
const lossesComp = document.getElementById('losses');
const drawsComp = document.getElementById('draws');
let wins = 0;
let losses = 0;
let draws = 0;

const textToEmoji = {
    'rock': '✊',
    'paper': '🖐',
    'scissors': '✌'
}

function win(){
    wins++;
    winsComp.innerHTML = wins;
    banner.innerHTML = 'You Win :)';
}
function lose(){
    losses++;
    lossesComp.innerHTML = losses;
    banner.innerHTML = "You Lose :(";
}
function draw(){
    draws++;
    drawsComp.innerHTML = draws;
    banner.innerHTML = "It was a Draw!";
}


let choices = ['rock','paper','scissors'];
function randomChoice() {
    random = Math.floor(Math.random()*choices.length);
    return choices[random];
}

function userPlay(userchoice) {
    let computerchoice = randomChoice();
    userChoiceDisplay.innerHTML = textToEmoji[userchoice];
    computerChoiceDisplay.innerHTML = textToEmoji[computerchoice];

    switch(userchoice){
        case 'rock':
            if(computerchoice == 'paper'){
                lose()
            }
            if (computerchoice == 'scissors'){
                win()
            }
            if (computerchoice == 'rock'){
                draw()
            }
            break

        case 'paper':
            if(computerchoice == 'rock'){
                win()
            }
            if (computerchoice == 'scissors') {
                lose()
            }
            if (computerchoice == 'paper'){
                draw()
            }
            break

        case 'scissors':
            if (computerchoice == 'paper') {
                win()
            }
            if(computerchoice == 'rock') {
                lose()
            }
            if (computerchoice == 'scissors'){
                draw()
            }
            break

    }

}


let isAutoPlaying=false;
autoPlayButton = document.getElementById('autoplay-button')
let intervalID;

function autoplay() {
    if(!isAutoPlaying){
        autoPlayButton.innerHTML = 'Stop';
        intervalID = setInterval(function(){userPlay(randomChoice())},1000);
        isAutoPlaying = true;
    }
    else {
        isAutoPlaying = false;
        autoPlayButton.innerHTML = 'Autoplay';
        clearInterval(intervalID);
    }
}

function reset() {
    wins=0;
    losses=0;
    draws=0;
    winsComp.innerHTML = 0;
    lossesComp.innerHTML = 0;
    drawsComp.innerHTML = 0;
    banner.innerHTML = "Good Luck!";
}
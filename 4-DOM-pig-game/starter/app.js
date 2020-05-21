/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer;


scores = [0, 0];
roundScore = 0;
activePlayer = 0;//0 is first player and 1 is second player by making it 0 and 1 we can use this value to check score in scores[]
newGame();


//ROLL DICE BUTTON
document.querySelector('.btn-roll').addEventListener('click', function () {
    //generate a random number for the dice roll
    var dice = Math.floor(Math.random() * 6) + 1;
    
    //display the correct image of the dice
    var diceDOM = document.querySelector('.dice');
    diceDOM.src = 'dice-' + dice + '.png';
    diceDOM.style.display = 'block';
    
    //Update the current round score if the roll was not a one.
    var currScore = document.querySelector('#current-' + activePlayer);//used to change current score for the active player
    if(dice !== 1){
        //Increase score as it wasn't a one
        roundScore += dice;
        currScore.textContent = roundScore;
    } else{//rolled a one so reset current roundScore
        roundScore = 0;
        currScore.textContent = 0;
        //next player will get a chance
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        diceDOM.style.display = 'none';
    }
});

//HOLD BUTTON
document.querySelector('.btn-hold').addEventListener('click', function () {
    //hide Dice
    document.querySelector('.dice').style.display = 'none';
    //add their current roundScore to the player's total score
    scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    //reset their current round score
    roundScore = 0;
    document.querySelector('#current-' + activePlayer).textContent = 0;
    
    //change to next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    
    
});



//NEW GAME BUTTON
document.querySelector('.btn-new').addEventListener('click', newGame);


function newGame(){
    document.querySelector('.dice').style.display = 'none';//hiding the Dice image
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
}





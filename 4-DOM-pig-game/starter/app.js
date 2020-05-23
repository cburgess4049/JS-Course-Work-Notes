/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, previousRoll;

//Start a new game
newGame();

//resets the game
function newGame(){
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;//0 is first player and 1 is second player by making it 0 and 1 we can use this value to check score in scores[]
    document.querySelector('.dice').style.display = 'none'; //hiding the Dice image
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.btn-roll').disabled = false;
    document.querySelector('.btn-hold').disabled = false;
}

//Starts a new round of teh game.
function playerSwap(){
        roundScore = 0;
        document.querySelector('#current-' + activePlayer).textContent = 0;
        //next player will get a chance
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display = 'none';
}

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
        if(dice === 6 && previousRoll === dice) {//they rolled a 6 and last roll was a 6
            //Reset entire score if it was a six and the previously rolled a 6
            scores[activePlayer] = 0;
            roundScore = 0;
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
            playerSwap();
        }else{
            //Increase score as it wasn't a one and two sixes weren't rolled in a row
            roundScore += dice;
            //Now that the round score has been updated save this dice roll as the previous dice roll
            previousRoll = dice;
        }
        currScore.textContent = roundScore;
    } else{//rolled a one so reset current roundScore
        previousRoll = 1;
        playerSwap();
    }
});

//HOLD BUTTON
document.querySelector('.btn-hold').addEventListener('click', function () {
    //Hide Dice
    document.querySelector('.dice').style.display = 'none';
    
    //Add their current roundScore to the player's total score
    scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    
    //Get the final score input
    var inputScore = document.querySelector('.final-score').value;
    if(inputScore){ //if inputScore is 0, undefined, or null then this will evaluate to false
        //if it is not undefined, 0, or null it doesn't need to do anything!
    } else{
       inputScore = 100;
    }
    //Has the player won?
    if(scores[activePlayer] >= inputScore) {
       //Game over
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.btn-roll').disabled = true;
        document.querySelector('.btn-hold').disabled = true;
        document.querySelector('#current-' + activePlayer).textContent = 0;
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        document.querySelector('.dice').style.display = 'none';

    } else {
        //Game is not over, so keep playing.
        //Change to next player
        playerSwap();
    }   
});

//NEW GAME BUTTON
document.querySelector('.btn-new').addEventListener('click', newGame);






/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer;

//Start a new game
newGame();

//resets the game
function newGame(){
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;//0 is first player and 1 is second player by making it 0 and 1 we can use this value to check score in scores[]
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
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
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
}

//ROLL DICE BUTTON
document.querySelector('.btn-roll').addEventListener('click', function () {
    //generate a random number for the dice roll
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    
    //display the correct image of the dice
    document.getElementById('dice-1').style.display = 'block';
    document.getElementById('dice-2').style.display = 'block';
    document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
    document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
    
    //Update the current round score if the roll was not a one.
    var currScore = document.querySelector('#current-' + activePlayer);//used to change current score for the active player
    if(dice1 !== 1 && dice2 !== 1){//Neither die were 1
        if(dice1 === 6 && dice2 === 6){//This player rolled a double six
            //reset their score and it is now next players turn.
            scores[activePlayer] = 0;
            roundScore = 0;
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
            playerSwap();            
        }
        else{//A double six was not rolled.
            //Increase score as it wasn't a one and two sixes weren't rolled in a row
            roundScore += dice1;
            roundScore += dice2;
            currScore.textContent = roundScore;
        }
    } else{ //a one was rolled
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
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';

    } else {
        //Game is not over, so keep playing.
        //Change to next player
        playerSwap();
    }   
});

//NEW GAME BUTTON
document.querySelector('.btn-new').addEventListener('click', newGame);






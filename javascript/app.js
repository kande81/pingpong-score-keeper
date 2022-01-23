// JavaScript Document
// VARIABLES AND OBJECTS DECLARATIONS
const p1 = {
	score:0,
	button: document.querySelector('#player1'),
	scoreDisplay: document.querySelector('#p1'),
}
const p2 = {
	score:0,
	button: document.querySelector('#player2'),
	scoreDisplay: document.querySelector('#p2'),
}
let winningScore = 5;

const reset = document.querySelector('#reset');
const scoreSelector = document.querySelector('#selector'); 
let isGameOver = false;
//END VARIABLES AND OBJECTS DECLARATIONS

scoreSelector.addEventListener('change', function(){
	winningScore = parseInt(this.value);
resetScore();
}) 

function updateScore(player, opponent) {
		if(!isGameOver) {
		player.score++;
		if(player.score === winningScore) {
			isGameOver = true;
			player.scoreDisplay.classList.add('winner');
			player.button.disabled = true;
			opponent.button.disabled = true;
			opponent.scoreDisplay.classList.add('looser');
		}
		player.scoreDisplay.textContent = player.score;
		
	}

}
	

p1.button.addEventListener('click', function() {
	updateScore(p1,p2);
})

p2.button.addEventListener('click', function() {
	updateScore(p2,p1);

})

reset.addEventListener('click', resetScore)

function resetScore() {
	for(let p of [p1,p2]) {
		p.button.disabled= false;
		p.scoreDisplay.classList.remove('winner', 'looser')
		p.scoreDisplay.textContent = 0;
		p.score = 0;
	}
	isGameOver = false;
}



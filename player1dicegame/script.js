let counter = 0
let score = document.getElementById("score");
let header = document.getElementById("header");

function startAgain(e){
	header.innerText = 'Player 1'
	document.querySelector('.roll').style.display = 'inline-block';
	score.innerText = 0
}

function rollDice(e) {
	// Generate random number
	let dice = Math.floor(Math.random()*6) + 1;
	// Set image src using concatenation
	document.getElementById("playerDice").src = "./img/dice" + dice + ".png";
	// Set image alt
	let imgAlt = ["roll: 1", "roll: 2", "roll: 3", "roll: 4", "roll: 5", "roll: 6"];
	document.getElementById("playerDice").alt = imgAlt[dice-1];

	if (dice === 1) {
		score.innerHTML = "<b>You lost!</b><br><p>0</p>";
		counter = 0
		e.target.style.display = 'none';
		header.innerHTML = `<button class='btn' onclick='startAgain(event)'>start again</button>`
	} else {
		// Display the score
		if(counter+dice<20){
            counter+=dice
			score.textContent = counter;
		}else{
			score.innerHTML = `<b>You win!</b><br><p>${counter+dice}</p>`;
			counter = 0
			e.target.style.display = 'none';
			header.innerHTML = `<button class='btn' onclick='startAgain(event)'>start again</button>`
		}
	}

}

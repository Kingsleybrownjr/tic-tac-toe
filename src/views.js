const rootDiv = document.querySelector("#root");

const renderGameBoard = () => {
	const gameContainer = document.createElement("div");

	gameContainer.classList.add("game-container");

	gameContainer.innerHTML = `
        <h1 class='title'>Tic Tac Toe</h1>
		<div class="row">
			<div class="column"></div>
			<div class="column"></div>
			<div class="column"></div>
		</div>
		<div class="row">
		    <div class="column"></div>
		    <div class="column"></div>
		    <div class="column"></div>
		</div>
		<div class="row">
			<div class="column"></div>
			<div class="column"></div>
			<div class="column"></div>
		</div>
        <p class='player-turn'>It's player x turn!</p>
    `;
	rootDiv.appendChild(gameContainer);
};

const renderGameOverScreen = (gameOver, winner) => {
	if (gameOver === "draw") {
		rootDiv.innerHTML = "";
		const gameContainer = document.createElement("div");
		const resetButton = document.createElement("a");
		resetButton.setAttribute("href", "/index.html");
		resetButton.textContent = "Play Again ?";
		resetButton.classList.add("reset");

		gameContainer.classList.add("game-container");

		gameContainer.innerHTML = `
        <p class='game-over-message'>Aww Tie Game, Would you like to</p>
    `;

		gameContainer.appendChild(resetButton);
		rootDiv.appendChild(gameContainer);
		return;
	}

	if (gameOver) {
		rootDiv.innerHTML = "";
		const gameContainer = document.createElement("div");
		const resetButton = document.createElement("a");
		resetButton.setAttribute("href", "/index.html");
		resetButton.textContent = "Play Again ?";
		resetButton.classList.add("reset");

		gameContainer.classList.add("game-container");

		gameContainer.innerHTML = `
        <p class='game-over-message'>Player ${winner} Has Won, Would you like to</p>
    `;

		gameContainer.appendChild(resetButton);
		rootDiv.appendChild(gameContainer);
	}
};

const renderPlayerTurn = playerTurn => {
	const playerTurnEl = document.querySelector(".player-turn");

	playerTurnEl.textContent = `It's player ${playerTurn} turn!`;
};

export { renderGameBoard, renderGameOverScreen, renderPlayerTurn };

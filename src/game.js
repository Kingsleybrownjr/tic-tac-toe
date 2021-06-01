import {
	renderGameBoard,
	renderGameOverScreen,
	renderPlayerTurn,
} from "./views";

const gameLogic = {
	activePlayer: 1,
	players: ["X", "O"],
	gameOver: false,
};

const game = () => {
	renderGameBoard();
	handleClick();
};

const changeTurn = () => {
	gameLogic.activePlayer = gameLogic.activePlayer === 0 ? 1 : 0;

	return gameLogic.activePlayer;
};

const handlePlayerTurnRender = playerChoice => {
	if (playerChoice === "X") {
		renderPlayerTurn(gameLogic.players[gameLogic.activePlayer + 1]);
	} else {
		renderPlayerTurn(gameLogic.players[gameLogic.activePlayer - 1]);
	}
};

const handleClick = () => {
	const columns = document.querySelectorAll(".column");

	columns.forEach(column => {
		column.addEventListener("click", e => {
			if (column.children.length === 0) {
				changeTurn();
				const playerChoice = document.createElement("p");

				playerChoice.classList.add("player");
				playerChoice.textContent = gameLogic.players[gameLogic.activePlayer];
				handlePlayerTurnRender(playerChoice.textContent);

				e.target.appendChild(playerChoice);
				evaluateGame(columns);
			} else {
				return;
			}
		});
	});
};

const evaluateGame = columns => {
	const playerPositions = [];
	columns.forEach(column => {
		if (column.children[0] == undefined) {
			playerPositions.push("_");
		}
		if (column.children[0] != undefined) {
			playerPositions.push(column.children[0].textContent);
		}
	});

	checkForWin(playerPositions);
};



const checkForWin = playerPositions => {
	let gameOver = false;
	let winningPlayer = "";

	if (playerPositions) {
		if (
			playerPositions[0] === playerPositions[1] &&
			playerPositions[1] !== "_"
		) {
			if (playerPositions[1] === playerPositions[2]) {
				gameOver = true;
				winningPlayer = playerPositions[2];
			}
		}

		if (
			playerPositions[3] === playerPositions[4] &&
			playerPositions[3] !== "_"
		) {
			if (playerPositions[4] === playerPositions[5]) {
				gameOver = true;
				winningPlayer = playerPositions[5];
			}
		}
		if (
			playerPositions[6] === playerPositions[7] &&
			playerPositions[6] !== "_"
		) {
			if (playerPositions[7] === playerPositions[8]) {
				gameOver = true;
				winningPlayer = playerPositions[8];
			}
		}
		if (
			playerPositions[0] === playerPositions[3] &&
			playerPositions[0] !== "_"
		) {
			if (playerPositions[3] === playerPositions[6]) {
				gameOver = true;
				winningPlayer = playerPositions[6];
			}
		}
		if (
			playerPositions[1] === playerPositions[4] &&
			playerPositions[1] !== "_"
		) {
			if (playerPositions[4] === playerPositions[7]) {
				gameOver = true;
				winningPlayer = playerPositions[7];
			}
		}
		if (
			playerPositions[2] === playerPositions[5] &&
			playerPositions[5] !== "_"
		) {
			if (playerPositions[5] === playerPositions[8]) {
				gameOver = true;
				winningPlayer = playerPositions[8];
			}
		}
		if (
			playerPositions[0] === playerPositions[4] &&
			playerPositions[4] !== "_"
		) {
			if (playerPositions[4] === playerPositions[8]) {
				gameOver = true;
				winningPlayer = playerPositions[8];
			}
		}
		if (
			playerPositions[2] === playerPositions[4] &&
			playerPositions[4] !== "_"
		) {
			if (playerPositions[4] === playerPositions[6]) {
				gameOver = true;
				winningPlayer = playerPositions[6]
			}
		}
	}

	if (playerPositions.length === 9 && !playerPositions.includes("_")) {
		if (!gameOver) {
			gameOver = "draw";
		}
	}
	renderGameOverScreen(gameOver, winningPlayer);
};

export { game };

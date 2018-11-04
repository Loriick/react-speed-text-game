import React from "react";
import { Title, TextContainer, BtnContainer, Info } from "../styles";

const GameView = ({
	time,
	score,
	word,
	isGameStarted,
	gameStart,
	resetGame
}) => (
	<div>
		<Title>Text Speed Game</Title>
		<TextContainer>
			{isGameStarted && <p className="word">{word}</p>}
			{!word && <p className="text">bravo ! Tu as gagné avec {score} points</p>}
			{time === 0 && <p className="text">Dommage c'est perdu</p>}
		</TextContainer>
		<Info className="text-info">Temps: {time}sec </Info>
		<Info className="text-info">Point: {score}pts</Info>
		<BtnContainer>
			<div onClick={gameStart} className="btn">
				<span>Start Game</span>
				<span>Start Game</span>
			</div>
			<div onClick={resetGame} className="btn">
				<span>Reset Game</span>
				<span>Reset Game</span>
			</div>
		</BtnContainer>
	</div>
);

export default GameView;

import React, { Component, Fragment } from "react";
import GameView from "./gameView";
import GameInput from "./gameInput";

export default class GameController extends Component {
	state = {
		input: "",
		score: 0,
		time: 5,
		isGameStarted: false
	};
	word = [
		"mozzarella",
		"monopoly",
		"canapé",
		"pharmacie",
		"radiateur",
		"banane",
		"tapis",
		"rideau",
		"gateau",
		"basket",
		"ordinateur",
		"dormir",
		"extrême",
		"quadrillage",
		"jardinage"
	];
	random = Math.floor(Math.random() * this.word.length - 1);
	wordCopy = [...this.word];

	changeHandle = e => {
		this.setState({
			input: e.target.value
		});
	};

	gameStart = () => {
		/*	this.setState(prevState => ({
			isGameStarted: !prevState.isGameStarted
		}));*/
		this.setState({
			isGameStarted: true
		});
		this.timer();
	};

	timer = () => {
		let time = setInterval(() => {
			if (this.state.isGameStarted) {
				this.setState(prevState => ({
					time: prevState.time - 1
				}));
			} else {
				return;
			}
			if (this.state.time < 1 || this.word.length === 0) clearInterval(time);
		}, 1000);
	};

	submitHandle = e => {
		e.preventDefault();
		//this.randomWord.splice(this.random, 1);
		//console.log(this.word.splice(this.random, 1));
		if (this.state.input === this.wordCopy[0]) {
			this.wordCopy.shift();
			this.setState(prevState => ({
				input: "",
				time: prevState.time + 3,
				score: prevState.score + 1
			}));
		}
	};

	resetGame = () => {
		this.wordCopy = [...this.word];
		this.setState({
			input: "",
			score: 0,
			time: 5,
			isGameStarted: false
		});
	};

	render() {
		const { input, score, time, isGameStarted } = this.state;
		return (
			<Fragment>
				<GameView
					score={score}
					time={time}
					word={this.wordCopy[0]}
					isGameStarted={isGameStarted}
					gameStart={this.gameStart}
					resetGame={this.resetGame}
				/>
				<GameInput
					input={input}
					onChange={this.changeHandle}
					onSubmit={this.submitHandle}
				/>
			</Fragment>
		);
	}
}

import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import GameController from "./components/gameController";

function App() {
	return (
		<div className="App">
			<GameController />
		</div>
	);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

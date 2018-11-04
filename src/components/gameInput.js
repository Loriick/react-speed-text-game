import React, { Fragment } from "react";
import { Input } from "../styles";

const GameInput = ({ input, onChange, onSubmit }) => (
	<Fragment>
		<form onSubmit={onSubmit}>
			<label htmlFor="text">
				Retape le mot le plus rapidement possible et appuie Entrée
			</label>
			<Input
				type="text"
				placeholder="Good Luck 😆"
				id="text"
				name="text"
				value={input}
				onChange={onChange}
			/>
		</form>
	</Fragment>
);

export default GameInput;

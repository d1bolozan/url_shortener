import React, { useState } from "react";
import classes from "./Form.module.scss";
import Button from "../Button/Button";
const Form = ({ handleClick, title }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className={classes.form}>
			<input
				type="email"
				value={email}
				onChange={e => setEmail(e.target.value)}
				placeholder="email"
			/>

			<input
				type="password"
				value={password}
				onChange={e => setPassword(e.target.value)}
				placeholder="password"
			/>
			<Button onClick={() => handleClick(email, password)}>{title}</Button>
		</div>
	);
};

export default Form;

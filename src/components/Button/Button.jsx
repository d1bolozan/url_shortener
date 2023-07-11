import cn from "classnames";
import { motion } from "framer-motion";
import { forwardRef } from "react";
import classes from "./Button.module.scss";

const Button = forwardRef(
	(
		{ onClick, variant = "", size = "medium", type = "button", disabled = false, children },
		ref
	) => {
		const mainCn = cn(classes.button, classes[size], classes[variant]);

		return (
			<button ref={ref} type={type} className={mainCn} onClick={onClick} disabled={disabled}>
				{children}
			</button>
		);
	}
);

export default Button;

export const MButton = motion(Button);

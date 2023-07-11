import { useState } from "react";
import { useSelector } from "react-redux";
import { selectLinks } from "../../store/slice/linkSlice";
import Button from "../Button/Button";
import classes from "./Shortens.module.scss";
import { motion, AnimatePresence } from "framer-motion";

const Shortens = () => {
	const [copiedLink, setCopiedLink] = useState(null);
	const links = useSelector(selectLinks);

	if (!links?.length) return null;

	const copyToClipboard = link => {
		navigator.clipboard.writeText(link).then(() => {
			setCopiedLink(link);
		});
	};
	return (
		<section className={classes.Shortens}>
			<div className="container">
				{links.map(item => (
					<AnimatePresence key={item.code}>
						<motion.div
							className={classes.item}
							data-active={copiedLink === item.full_short_link2}
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							transition={{ duration: 0.3 }}
						>
							<span>{item.original_link}</span>
							<a className={classes.link} href={item.full_short_link2} target="blank">
								{item.full_short_link2}
							</a>
							<Button variant="square" onClick={() => copyToClipboard(item.full_short_link2)}>
								{copiedLink === item.full_short_link2 ? "Copied" : "Copy"}
							</Button>
						</motion.div>
					</AnimatePresence>
				))}
			</div>
		</section>
	);
};

export default Shortens;

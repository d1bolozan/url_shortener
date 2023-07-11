import { motion } from "framer-motion";

import classes from "./Hero.module.scss";

import Img from "../../assets/illustration-working.svg";
import { MButton } from "../Button/Button";

const textAnimation = {
	hidden: {
		x: -100,
		opacity: 0,
	},
	visible: custom => ({
		x: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
};

const buttonAnimation = {
	hidden: {
		opacity: 0,
	},
	visible: custom => ({
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
};

const imageAnimation = {
	hidden: {
		x: 100,
		opacity: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
	},
};

const Hero = () => {
	return (
		<motion.section
			variants={imageAnimation}
			initial="hidden"
			whileInView="visible"
			className={`${classes.hero} container`}
		>
			<motion.div className={classes.imgContainer}>
				<img src={Img} alt="hero" className={classes.img} />
			</motion.div>
			<article className={classes.text}>
				<motion.h1 custom={1} variants={textAnimation} className={classes.title}>
					More than just shorter links
				</motion.h1>
				<motion.p custom={2} variants={textAnimation} className={classes.description}>
					Build your brand's recognition and get detailed insights on how your links are performing.
				</motion.p>
				<MButton custom={3} variants={buttonAnimation} size="large">
					Get Started
				</MButton>
			</article>
		</motion.section>
	);
};

export default Hero;

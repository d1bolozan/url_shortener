import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import useMatchMedia from "react-use-match-media";

import Menu from "./Menu";
import Modal from "../Modal/Modal";

import classes from "./Header.module.scss";
import Logo from "../../assets/logo.svg";
import SignUp from "../SignUp/SignUp";
import Login from "../SignUp/Login";

const menuItems = [
	{ url: "#", text: "Features" },
	{ url: "#", text: "Prices" },
	{ url: "#", text: "Resources" },
];

const Header = () => {
	const mobile = useMatchMedia("(max-width: 766px)", false);
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const [isSignupOpen, setSignupOpen] = useState(false);
	const [isLoginOpen, setLoginOpen] = useState(false);

	const toggleSignUp = () => setSignupOpen(prev => !prev);
	const toggleLogin = () => setLoginOpen(prev => !prev);

	return (
		<>
			<header className={`${classes.header} container`}>
				<img src={Logo} alt="logo" className={classes.logo} />
				{mobile ? (
					<IoMenu className={classes.burger} onClick={() => setShowMobileMenu(!showMobileMenu)} />
				) : (
					<Menu links={menuItems} handleSignup={toggleSignUp} handleLogin={toggleLogin} />
				)}
				<AnimatePresence>
					{showMobileMenu && mobile && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.3 }}
							className={classes.mobileMenu}
						>
							<Menu links={menuItems} handleSignup={toggleSignUp} handleLogin={toggleLogin} />
						</motion.div>
					)}
				</AnimatePresence>
			</header>

			<Modal open={isSignupOpen} title="Sign Up" handleClose={toggleSignUp}>
				<SignUp closedModal={toggleSignUp} />
			</Modal>
			<Modal open={isLoginOpen} title="Login" handleClose={toggleLogin}>
				<Login closedModal={toggleLogin} />
			</Modal>
		</>
	);
};

export default Header;

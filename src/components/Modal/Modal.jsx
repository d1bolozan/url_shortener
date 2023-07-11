import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

import classes from "./Modal.module.scss";
import Button from "../Button/Button";
const overlayVariants = {
	opened: {
		opacity: 1,
	},
	closed: {
		opacity: 0,
	},
};

const modalVariants = {
	opened: {
		opacity: 1,
		transform: "translate(-50%, 0%)",
	},
	closed: {
		opacity: 0,
		transform: "translate(-50%, 20%)",
	},
};

const Modal = ({ open, handleClose, title, children }) => {
	return createPortal(
		<AnimatePresence>
			{open && (
				<>
					<motion.div
						className={classes.overlay}
						onClick={handleClose}
						initial="closed"
						animate="opened"
						exit="closed"
						variants={overlayVariants}
						transition={{ duration: 0.3 }}
					/>
					<motion.div
						className={classes.modal}
						initial="closed"
						animate="opened"
						exit="closed"
						variants={modalVariants}
						transition={{ duration: 0.2 }}
					>
						{title && (
							<header>
								<h2>{title}</h2>
							</header>
						)}
						<div className={classes.modalContent}>{children}</div>
						<div className={classes.modalAction}>
							<Button className="close" onClick={handleClose}>
								Close
							</Button>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>,
		document.body
	);
};

export default Modal;

import Form from "./Form";

const SingUp = ({ closeModal }) => {
	const handleRegister = (email, password) => {
		closeModal();
	};

	return <Form handleClick={handleRegister} title="Register" />;
};

export default SingUp;

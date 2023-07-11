import Form from "./Form";

const Login = ({ closeModal }) => {
	const handleLogin = (email, password) => {
		closeModal();
	};

	return <Form handleClick={handleLogin} title="Login" />;
};

export default Login;

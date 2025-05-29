import { useAuth } from "react-oidc-context";
import "./App.css";
import { NavLink } from "react-router";

function App() {
	const auth = useAuth();

	if (auth.isLoading) {
		return <h1>Loading...</h1>;
	}

	if (auth.error) {
		return (
			<div>
				<h1>Error</h1>
				<p>{auth.error.message}</p>
			</div>
		);
	}

	return (
		<>
			<h1>oidc</h1>
			{auth.isAuthenticated ? (
				<h1> Tu sesión esta activa.</h1>
			) : (
				<h1>No hay sesión activa</h1>
			)}
			{auth.isAuthenticated ? (
				<div>
					<button onClick={() => auth.signoutRedirect()}>Cerrar sesión</button>
				</div>
			) : (
				<div>
					<button onClick={() => auth.signinRedirect()}>Iniciar sesión</button>
				</div>
			)}

			<div style={{ marginTop: "20px" }}>
				<NavLink to="/panel">Ir al panel</NavLink>
			</div>
		</>
	);
}

export default App;

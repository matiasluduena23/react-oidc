import { useAuth } from "react-oidc-context";
import "./App.css";

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
	if (!auth.user) {
		return (
			<div>
				<h1>Not authenticated</h1>
				<button onClick={() => auth.signinRedirect()}>Sign In</button>
			</div>
		);
	}

	const { access_token, refresh_token, id_token, expires_at } = auth.user;

	return (
		<>
			<h1>oidc</h1>
			{auth.isAuthenticated ? (
				<div>
					<p>Access Token: </p>
					<div className="wrapper">{access_token}</div>
					<p>Refresh Token: </p>
					<div className="wrapper">{refresh_token}</div>
					<p>ID Token: </p>
					<div className="wrapper">{id_token}</div>

					<p>Expires At: </p>
					<div className="wrapper">{expires_at?.toString()}</div>
				</div>
			) : (
				<h2>You are not authenticated</h2>
			)}
		</>
	);
}

export default App;

import { useAuth } from "react-oidc-context";

export default function Panel() {
	const auth = useAuth();
	if (!auth.isAuthenticated) {
		return (
			<div>
				<h1>Panel</h1>
				<p>Usiario no autenticado</p>
				<p>Debes iniciar sesion.</p>
				<button onClick={() => auth.signinRedirect()}>Iniciar Seión</button>
			</div>
		);
	}
	return (
		<div>
			<h1>Panel</h1>
			<p>Bienvenido</p>
			<button>Cargar orden</button>
		</div>
	);
}
//

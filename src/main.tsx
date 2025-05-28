import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "react-oidc-context";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<AuthProvider
			authority="http://localhost:7080/realms/master"
			client_id="react"
			redirect_uri="http://localhost:5173"
			post_logout_redirect_uri="http://localhost:5173"
			scope="openid profile email"
		>
			<App />
		</AuthProvider>
	</StrictMode>
);

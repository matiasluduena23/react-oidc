import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "react-oidc-context";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<AuthProvider
			authority="http://localhost:7080/realms/master/account/"
			client_id="account"
			redirect_uri="http://localhost:5173"
			resource={[]}
			scope="openid profile email"
			extraQueryParams={{ data: "test", state: false, code: 1234 }}
		>
			<App />
		</AuthProvider>
	</StrictMode>
);

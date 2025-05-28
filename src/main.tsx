import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "react-oidc-context";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<AuthProvider
			authority=""
			client_id=""
			redirect_uri=""
			post_logout_redirect_uri=""
			resource={[]}
			scope=""
			metadata={{}}
		>
			<App />
		</AuthProvider>
	</StrictMode>
);

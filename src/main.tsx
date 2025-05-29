import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { AuthProvider } from "react-oidc-context";
import "./index.css";
import App from "./App.tsx";
import Panel from "./panel.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<AuthProvider
			authority="http://localhost:7080/realms/master"
			client_id="react-client"
			redirect_uri="http://localhost:5173"
			post_logout_redirect_uri="http://localhost:5173"
			scope="openid profile email"
		>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />} />
				</Routes>
				<Routes>
					<Route path="/panel" element={<Panel />} />
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	</StrictMode>
);

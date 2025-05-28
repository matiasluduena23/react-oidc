Perfecto, gracias por el detalle. Basado en ese fragmento de código, actualizo el `README.md` para que el desarrollador sepa **exactamente qué campos debe completar** dentro del `AuthProvider` en `main.tsx` o `main.jsx`.

---

````markdown
# React + Vite + OIDC Auth

Este proyecto es una aplicación React creada con Vite y autenticación mediante OpenID Connect (OIDC) usando [`react-oidc-context`](https://github.com/authts/react-oidc-context).

---

## 🚀 Requisitos Previos

- Node.js v16 o superior
- npm o yarn

---

## 📦 Instalación

Clona el repositorio y ejecuta:

```bash
npm install
# o
yarn install
```
````

---

## ⚙️ Configuración de Autenticación OIDC

Antes de iniciar la aplicación, **debes completar la configuración del `AuthProvider` en `main.tsx` o `main.jsx`**.

Abre `src/main.tsx` y completa los siguientes campos:

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { AuthProvider } from "react-oidc-context";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<AuthProvider
			authority="http://localhost:7080/realms/<tu-realm>"
			client_id="<tu-client-id>"
			redirect_uri="http://localhost:5173"
			post_logout_redirect_uri="http://localhost:5173"
			resource={[]}
			scope="openid profile email"
			metadata={{
				issuer: "http://localhost:7080/realms/<tu-realm>",
				authorization_endpoint:
					"http://localhost:7080/realms/<tu-realm>/protocol/openid-connect/auth",
				token_endpoint:
					"http://localhost:7080/realms/<tu-realm>/protocol/openid-connect/token",
				userinfo_endpoint:
					"http://localhost:7080/realms/<tu-realm>/protocol/openid-connect/userinfo",
				end_session_endpoint:
					"http://localhost:7080/realms/<tu-realm>/protocol/openid-connect/logout",
			}}
		>
			<App />
		</AuthProvider>
	</StrictMode>
);
```

🔧 **Asegúrate de reemplazar:**

- `<tu-realm>`: el nombre de tu Realm en Keycloak
- `<tu-client-id>`: el Client ID registrado en Keycloak

📌 También asegúrate de que en Keycloak:

- El **Client** tenga `http://localhost:5173` en:

  - **Redirect URIs**
  - **Web Origins**

---

## 🧪 Ejecución en Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
```

La aplicación estará disponible en [http://localhost:5173](http://localhost:5173)

---

## 🗂 Estructura Principal

```
├── src/
│   ├── main.tsx         # Punto de entrada con AuthProvider
│   ├── App.tsx          # Componente principal
│   └── ...
├── vite.config.ts       # Configuración de Vite
└── README.md
```

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

---

## 🛠️ Configuración del Cliente en Keycloak

### 🧭 Ingresá al panel de administración de Keycloak

```
http://localhost:7080/admin
```

1. **Iniciá sesión** como administrador.
2. Seleccioná el **Realm** donde querés crear el cliente (por ejemplo, `master` o uno personalizado).
3. Andá al menú lateral: **Clients** → Clic en **Create client**.

---

### ✅ Paso 1: Crear cliente

| Campo                 | Valor                            |
| --------------------- | -------------------------------- |
| **Client type**       | `OpenID Connect`                 |
| **Client ID**         | `react-client`                   |
| **Name** _(opcional)_ | `React Frontend App`             |
| **Client protocol**   | `openid-connect` _(por defecto)_ |
| **Root URL**          | `http://localhost:5173`          |

✔️ Presioná **Next**

---

### ✅ Paso 2: Configuración general

| Campo                            | Valor                                      |
| -------------------------------- | ------------------------------------------ |
| **Client authentication**        | ❌ Desactivado (sin secret)                |
| **Authorization**                | ❌ Desactivado (si no usás políticas RBAC) |
| **Standard Flow Enabled**        | ✅ Activado (para login con redirect)      |
| **Direct Access Grants Enabled** | ❌ (seguro para frontend)                  |
| **Root URL**                     | `http://localhost:5173`                    |
| **Valid Redirect URIs**          | `http://localhost:5173/*`                  |
| **Web Origins**                  | `http://localhost:5173`                    |
| **Post Logout Redirect URIs**    | `http://localhost:5173`                    |

✔️ Presioná **Save**

### 🧪 Paso 3: Probar la conexión

Con esta configuración, podés usar en React la siguiente configuración en `AuthProvider`:

```tsx
<AuthProvider
	authority="http://localhost:7080/realms/master"
	client_id="react-client"
	redirect_uri="http://localhost:5173"
	post_logout_redirect_uri="http://localhost:5173"
	scope="openid profile email"
>
	<App />
</AuthProvider>
```

---

## 🧠 Consejos

- Si usás otro realm, cambiá `master` por el nombre correcto en todos los endpoints.
- No uses `localhost` en producción. Usá dominios seguros con HTTPS.
- En producción, evitá exponer `public` clients sin protección backend.

---

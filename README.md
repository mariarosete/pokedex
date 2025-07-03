#  Pokedex App – Aplicación web en Angular

![Banner Pokedex](https://github.com/mariarosete/pokedexApp/blob/main/screenshots/banner.png?raw=true)

**Pokedex App** es una aplicación web desarrollada en Angular como parte de un proyecto formativo. Permite a los usuarios explorar información de Pokémon a través de una interfaz moderna, responsiva y eficiente, utilizando Angular Material y gestionando estado con NgRx.

---

## 🛠 Tecnologías utilizadas

Angular · Angular Material · RxJS · NgRx · TypeScript · HTML · SCSS · GitHub

---

## 🚀 Funcionalidades destacadas

### 🏠 Página de inicio

- Mensaje de bienvenida al usuario.
- Enlace hacia la página de **Listado de Pokémon**.

### 📋 Lista de Pokémon

- Muestra un listado con:
  - Número (ID).
  - Nombre.
  - Tipos (uno o más).
- Filtro por tipo mediante selector desplegable.
- Enlace para ver más detalles de cada Pokémon.

### 🔍 Página de detalle de Pokémon

- Imagen del Pokémon.
- Información completa: número (ID), nombre y tipos.
- Botón para volver al listado.

---

## 🌐 Obtención de datos

- Se obtienen mediante peticiones HTTP usando `HttpClient`.
- Los servicios están integrados con NgRx (Effects, Actions, Reducers y Selectors) para el manejo de estado global de forma reactiva.

---

## 💻 Cómo ejecutar el proyecto

📌 **Requisitos previos**:  
Asegúrate de tener instalado [Node.js](https://nodejs.org/) y Angular CLI (`npm install -g @angular/cli`).

### 1. Clonar el repositorio

```bash
git clone https://github.com/mariarosete/pokedexApp.git
```

### 2. Ejecutar la aplicación

```bash
set NODE_OPTIONS=--openssl-legacy-provider && npm start
```

Luego abre [http://localhost:4200](http://localhost:4200) en tu navegador.

---

## 📸 Capturas de pantalla


---

## 🔮 Próximas mejoras

- Paginación en el listado.
- Soporte para múltiples idiomas.
- Modo oscuro / claro.
- Animaciones al cambiar de vista.
- Buscador por nombre.

---

## 📩 Contacto

📧 marlarosete89@gmail.com  
🔗 [LinkedIn](https://linkedin.com/in/mariarosetesuarez)  
💻 [GitHub](https://github.com/mariarosete)

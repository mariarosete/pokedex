#  Pokedex App – Aplicación web en Angular

![Banner Pokedex](https://github.com/mariarosete/pokedex/blob/main/banner.png?raw=true)

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
- Animaciones al cambiar de vista.

---

## 📩 Contacto

<p align="center">
  <a href="mailto:marlarosete89@gmail.com">
    <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
  </a>
  <a href="https://linkedin.com/in/mariarosetesuarez">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
  <a href="https://github.com/mariarosete">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />
  </a>
</p>

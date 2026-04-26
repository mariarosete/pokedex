# 🎮 Pokedex – Aplicación web Angular

![Banner Pokedex](https://github.com/mariarosete/pokedex/blob/main/Banner_Pokedex.png?raw=true)

Aplicación frontend en Angular orientada al consumo de APIs REST, con gestión de estado mediante NgRx y arquitectura reactiva con RxJS. Consume datos en tiempo real desde PokeAPI, simulando un flujo completo de integración con backend. 
Los datos se obtienen en tiempo real desde la API pública [PokeAPI](https://pokeapi.co/).

---
## 🌐 Aplicación en funcionamiento

Puedes probar la Pokédex directamente en tu navegador:

👉 https://pokedex-maria.vercel.app/

📱💻 Aplicación responsive, adaptada a móvil y escritorio.

---

## 🎥 Demo en vídeo

Puedes ver el funcionamiento de la aplicación aquí:

👉 https://mariarosete.vercel.app/pokedex.mp4
---
## 📑 Tabla de contenidos

- [🎮 Pokedex – Aplicación web Angular](#-pokedex--aplicación-web-angular)
- [🌐 Aplicación en funcionamiento](#-aplicación-en-funcionamiento)
- [🎥 Demo en vídeo](#-demo-en-vídeo)
- [🛠 Tecnologías utilizadas](#-tecnologías-utilizadas)
- [🚀 Funcionalidades destacadas](#-funcionalidades-destacadas)
- [✨ Aspectos destacados](#-aspectos-destacados)
- [🧩 Descripción funcional del proyecto](#-descripción-funcional-del-proyecto)
- [🔮 Próximas mejoras](#-próximas-mejoras)
- [📩 Contacto](#-contacto)

  ---

## 🛠 Tecnologías utilizadas

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![NgRx](https://img.shields.io/badge/NgRx-8A2BE2?style=for-the-badge&logo=reactivex&logoColor=white)
![RxJS](https://img.shields.io/badge/RxJS-B7178C?style=for-the-badge&logo=reactivex&logoColor=white)
![Angular Material](https://img.shields.io/badge/Angular%20Material-757575?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

---

## 🚀 Funcionalidades destacadas

- 🔍 **Búsqueda y filtrado de Pokémon** por tipo (agua, fuego, planta…).
- 📄 **Vista de listado** e información detallada enriquecida por Pokémon.
- ⚙️ **Interfaz responsive** con diseño moderno y estructura modular.
- 🧠 **Gestión global de estado** mediante NgRx.

---

## ✨ Aspectos destacados

- Consumo eficiente de la API externa **PokeAPI**.
- Uso de **Angular Material** para componentes reutilizables.
- Estructura profesional basada en módulos (`features/pokemons`).
- Buenas prácticas de estado global con NgRx (selectors, actions, reducers).

---
## 🧩 Descripción funcional del proyecto

Esta aplicación cuenta con tres vistas principales que permiten explorar Pokémon de forma dinámica y organizada:

### 🏠 Página de Inicio
- Muestra un mensaje de bienvenida.
- Incluye un enlace a la página de listado de Pokémon.

### 📋 Página de Lista de Pokémon
- Muestra un listado con:
  - Número (Id).
  - Nombre.
  - Tipos.
- Permite filtrar los Pokémon por tipo a través de un selector desplegable.
- Cada Pokémon tiene un enlace para acceder a su vista de detalle.

### 📄 Página de Detalle de Pokémon
- Muestra información específica del Pokémon seleccionado:
  - Imagen.
  - Número (Id).
  - Nombre.
  - Tipos.
- Incluye un enlace para volver al listado.

### 🔁 Arquitectura técnica
- Los datos se obtienen usando **HttpClient** en un servicio Angular.
- La lógica de obtención y gestión del estado se realiza mediante **NgRx**.
- Toda la interfaz está construida con **Angular Material** para garantizar un diseño moderno y responsive.
  
---

## 🔮 Próximas mejoras

- Paginación en el listado.
- Animaciones en las transiciones de vistas.
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
   <a href="https://mariarosete.vercel.app/">
    <img src="https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white"></a>
</p>


---

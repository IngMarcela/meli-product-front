# 🛍️ Frontend - Detalle de Producto (Inspirado en MercadoLibre)

Este proyecto es una interfaz web responsiva que simula una página de detalle de producto al estilo de MercadoLibre. Está construido con React y se conecta a una API local que entrega información de productos.

## 🚀 Características

- Visualización detallada de productos con imágenes, título, descripción, precio, stock y vendedor.
- Diseño responsive y limpio.
- Galería de miniaturas para imágenes del producto.
- Interacción básica con botones (no funcionales aún) para simular experiencia de compra.
- Redirección automática al producto destacado (ID: 1001).

## 🛠️ Tecnologías

- React
- React Router DOM
- HTML/CSS (estilos personalizados)
- Fetch API para consumir datos desde un backend local (JSON Server o API propia)

## 📁 Estructura del proyecto

src/
├── components/
│   ├── common/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   └── products/
│       └── ProductDetail.jsx
├── styles/
│   └── ProductDetail.css
├── App.jsx
├── index.js
public/
├── index.html

## 🔄 Cómo correrlo

1. Clona este repositorio:
   ```bash
   git clone https://github.com/IngMarcela/meli-product-front.git
   cd meli-product-front
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Ejecuta la app:
   ```bash
   npm run dev
   ```
   
Asegúrate de tener el backend corriendo en http://127.0.0.1:3000/products.
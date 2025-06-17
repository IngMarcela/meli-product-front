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

## ⚙️ Configuración

El proyecto utiliza variables de entorno para la configuración. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
# API Configuration
VITE_API_URL=http://127.0.0.1:3000

# Default Product Configuration
VITE_PRODUCT_ID=1001
```

### Variables de entorno disponibles:

- `VITE_API_URL`
- `VITE_PRODUCT_ID`

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

3. Configura las variables de entorno:
   - Crea un archivo `.env` en la raíz del proyecto
   - Copia las variables del ejemplo anterior
   - Ajusta los valores según tu configuración local

4. Ejecuta la app:
   ```bash
   npm run dev
   ```
   
Asegúrate de tener el backend corriendo en la URL especificada en tu archivo `.env` (por defecto: http://127.0.0.1:3000/products).
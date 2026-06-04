# 📦 Learning Inventory

## Inventory Management System with React, Express and PostgreSQL

### Logline

Aplicación web Full Stack para la gestión de inventario, desarrollada con React, Express y PostgreSQL, que permite consultar productos, visualizar estadísticas, filtrar información y gestionar inventario mediante una API REST conectada a una base de datos PostgreSQL alojada en Neon.

---

# 🌐 Demo

### Frontend

https://learning-inventory-pi.vercel.app

### API REST

https://learning-inventory-oayr.vercel.app/products

### Repositorio

https://github.com/IvanBussio/learning-inventory

---

# 📖 Descripción

Learning Inventory es un proyecto académico desarrollado para practicar el desarrollo Full Stack moderno utilizando React para el frontend, Express para el backend y PostgreSQL como base de datos.

La aplicación consume datos desde una API REST desplegada en Vercel, consulta información almacenada en PostgreSQL mediante Neon y presenta métricas relevantes del inventario a través de una interfaz moderna y responsive.

---

# ✨ Características

✅ Dashboard interactivo

✅ Búsqueda de productos en tiempo real

✅ Filtrado por categorías

✅ Indicadores de stock

✅ Estadísticas del inventario

✅ Diseño responsive

✅ Modo claro / oscuro

✅ API REST con Express

✅ PostgreSQL alojado en Neon

✅ Frontend desplegado en Vercel

✅ Backend desplegado en Vercel

✅ Variables de entorno seguras

---

# 🏗 Arquitectura

text React + Vite       │       ▼ Frontend Vercel       │       ▼ Express API       │       ▼ Backend Vercel       │       ▼ PostgreSQL (Neon) 

---

# 🛠 Tecnologías Utilizadas

## Frontend

| Tecnología | Uso |
|------------|-----|
| React | Interfaz de usuario |
| Vite | Entorno de desarrollo |
| JavaScript | Lógica del cliente |
| CSS3 | Estilos personalizados |

## Backend

| Tecnología | Uso |
|------------|-----|
| Node.js | Runtime JavaScript |
| Express | API REST |
| PostgreSQL | Base de datos |
| Neon | Hosting PostgreSQL |

## DevOps

| Tecnología | Uso |
|------------|-----|
| Git | Control de versiones |
| GitHub | Repositorio remoto |
| Vercel | Despliegue frontend y backend |

---

# 📂 Estructura del Proyecto

text learning-inventory/ │ ├── backend/ │   ├── api/ │   │   └── index.js │   ├── lib/ │   │   └── db.js │   ├── server.js │   ├── package.json │   └── vercel.json │ ├── frontend/ │   ├── src/ │   │   ├── App.jsx │   │   ├── App.css │   │   └── main.jsx │   │ │   ├── public/ │   ├── package.json │   └── vite.config.js │ ├── sql/ │   ├── schema.sql │   └── seed.sql │ ├── docs/ │ └── README.md 

---

# 💾 Base de Datos

La aplicación utiliza PostgreSQL alojado en Neon.

## Tabla Categories

| Campo | Tipo |
|---------|---------|
| id | SERIAL |
| name | VARCHAR |

## Tabla Products

| Campo | Tipo |
|---------|---------|
| id | SERIAL |
| name | VARCHAR |
| price | NUMERIC |
| stock | INTEGER |
| category_id | INTEGER |

Relación:

text categories (1)       │       ▼ products (N) 

---

# 🔌 API REST

## Obtener productos

http GET /products 

Respuesta:

json [   {     "id": 1,     "name": "Laptop Dell",     "price": "899.99",     "stock": 12,     "category": "Electronics"   } ] 

---

## Verificar estado de la API

http GET /ping 

Respuesta:

json {   "ok": true } 

---

# 🔍 Investigación ORM

Durante el desarrollo se realizó una investigación sobre Drizzle ORM como alternativa al uso de SQL puro.

## Ventajas de Drizzle ORM

- Tipado completo con TypeScript.
- Autocompletado inteligente.
- Menor riesgo de errores SQL.
- Consultas más mantenibles.
- Integración sencilla con PostgreSQL.

Ejemplo:

typescript const products = await db.select().from(productsTable); 

---

# ⚙️ Instalación

## Clonar repositorio

bash git clone https://github.com/IvanBussio/learning-inventory.git 

bash cd learning-inventory 

---

## Backend

bash cd backend npm install node server.js 

---

## Frontend

bash cd frontend npm install npm run dev 

---

# 🔐 Variables de Entorno

## Backend

Crear archivo:

env DATABASE_URL=postgresql://usuario:password@host/neondb?sslmode=require 

---

# 🚀 Despliegue

## Frontend

Desplegado en:

https://learning-inventory-pi.vercel.app

## Backend

Desplegado en:

https://learning-inventory-oayr.vercel.app

## Base de Datos

Alojada en Neon PostgreSQL.

---

# 📈 Estado del Proyecto

Versión actual:

text v1.0.0 

Estado:

✅ Funcional

✅ Desplegado

✅ Conectado a PostgreSQL

✅ API REST operativa

✅ Producción activa

---

# 👨‍💻 Autor

Iván Ezequiel Bussio Scavarelli

Estudiante de Administración de Sistemas Informáticos en Red (ASIR)

Proyecto desarrollado como práctica académica de Desarrollo Full Stack.

Año: 2026

---

© 2026 Iván Ezequiel Bussio Scavarel
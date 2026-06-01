# 📦 Learning Inventory

### Inventory Management System with React, Express and PostgreSQL

Logline:  
Aplicación web full-stack para la gestión de inventario, desarrollada con React, Express y PostgreSQL, que permite consultar productos, visualizar estadísticas, filtrar información y gestionar inventario mediante una API REST.

---

# 📖 Descripción

Learning Inventory es un proyecto académico desarrollado para practicar el desarrollo full-stack moderno utilizando React para el frontend, Express para el backend y PostgreSQL como base de datos.

La aplicación consume datos desde una API REST, muestra métricas relevantes del inventario, permite filtrar productos por categoría y realizar búsquedas dinámicas, todo dentro de una interfaz responsive compatible con dispositivos móviles y escritorio.

---

# 🚀 Despliegue

| Servicio | URL |
|-----------|-----|
| Frontend | https://learning-inventory-pi.vercel.app |
| Repositorio | https://github.com/IvanBussio/learning-inventory |

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

✅ Base de datos PostgreSQL (Neon)

---

# 🛠️ Tecnologías

## Frontend

| Tecnología | Uso |
|------------|-----|
| React | Interfaz de usuario |
| Vite | Entorno de desarrollo y build |
| CSS3 | Estilos personalizados |
| JavaScript | Lógica del cliente |

---

## Backend

| Tecnología | Uso |
|------------|-----|
| Node.js | Runtime JavaScript |
| Express | API REST |
| PostgreSQL | Base de datos |
| Neon | Hosting de PostgreSQL |

---

## Auxiliares

| Tecnología | Uso |
|------------|-----|
| Git | Control de versiones |
| GitHub | Repositorio remoto |
| Vercel | Despliegue frontend |

---

# 📂 Estructura del proyecto

text learning-inventory/ │ ├── backend/ │   ├── server.js │   ├── package.json │   └── node_modules/ │ ├── frontend/ │   ├── public/ │   ├── src/ │   │   ├── App.jsx │   │   ├── App.css │   │   └── main.jsx │   │ │   ├── package.json │   └── vite.config.js │ ├── docs/ │ ├── sql/ │   ├── schema.sql │   └── seed.sql │ └── README.md 

---

# 💾 Base de Datos

La aplicación utiliza PostgreSQL alojado en Neon.

Tabla principal:

sql products 

Campos:

- id
- name
- price
- stock
- category

---

# 🔍 Investigación ORM

Se realizó una investigación sobre Drizzle ORM como alternativa al uso de SQL puro.

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

Clonar repositorio:

bash git clone https://github.com/IvanBussio/learning-inventory.git 

Entrar al proyecto:

bash cd learning-inventory 

Frontend:

bash cd frontend npm install npm run dev 

Backend:

bash cd backend npm install node server.js 

---

# 🌐 Despliegue en Vercel

## Frontend

1. Conectar repositorio GitHub.
2. Seleccionar carpeta frontend.
3. Configurar Vite.
4. Realizar deploy.

## Backend

1. Configurar variables de entorno.
2. Conectar PostgreSQL Neon.
3. Desplegar API.

---

# 👨‍💻 Autor

Iván Ezequiel Bussio Scavarelli

Estudiante de Administración de Sistemas Informáticos en Red (ASIR)

Proyecto desarrollado como práctica académica de desarrollo Full Stack.

Año: 2026

---

© 2026 Iván Ezequiel Bussio Scavare
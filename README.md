# Learning Inventory

## Descripción

Learning Inventory es una aplicación desarrollada para aprender los fundamentos de bases de datos relacionales utilizando PostgreSQL en Neon, una API REST construida con Express y un frontend desarrollado con React y Vite.

El proyecto permite gestionar productos y categorías almacenados en una base de datos PostgreSQL, consultándolos desde una aplicación web mediante una API.

---

## Tecnologías utilizadas

### Base de datos
- PostgreSQL
- Neon

### Backend
- Node.js
- Express
- @neondatabase/serverless
- dotenv
- cors

### Frontend
- React
- Vite

### Control de versiones
- Git
- GitHub

### Despliegue
- Vercel

---

## Estructura del proyecto

text learning-inventory/ │ ├── backend/ │   ├── lib/ │   │   └── db.js │   ├── server.js │   ├── package.json │   └── .env │ ├── frontend/ │   ├── src/ │   ├── public/ │   ├── package.json │   └── vite.config.js │ ├── docs/ │   ├── arquitectura-datos.md │   ├── analisis-sql.md │   └── seguridad-db.md │ ├── sql/ │   ├── schema.sql │   └── seed.sql │ └── README.md 

---

## Modelo de datos

### Tabla categories

| Campo | Tipo |
|---------|---------|
| id | UUID |
| name | VARCHAR(100) |
| description | TEXT |

### Tabla products

| Campo | Tipo |
|---------|---------|
| id | UUID |
| name | VARCHAR(150) |
| price | NUMERIC(10,2) |
| stock | INTEGER |
| category_id | UUID |

### Relación

- Una categoría puede tener muchos productos.
- Cada producto pertenece a una categoría.
- La relación se implementa mediante una Foreign Key.

---

## Funcionalidades implementadas

### Base de datos

- Creación de tablas.
- Restricciones de integridad.
- Claves primarias UUID.
- Claves foráneas.
- Inserción de datos.
- Actualización de datos.
- Eliminación de datos.
- Consultas JOIN.
- Consultas GROUP BY.

### Backend

#### GET /products

Obtiene todos los productos junto con su categoría.

Ejemplo de respuesta:

json [   {     "id": "82db8221-e8ec-4a5c-a038-39943b6739bb",     "name": "Monitor Gamer",     "price": "299.99",     "stock": 8,     "category": "Hogar"   } ] 

#### POST /products

Permite insertar productos en la base de datos mediante consultas parametrizadas.

---

## Seguridad

La aplicación utiliza consultas parametrizadas para prevenir ataques de SQL Injection.

Ejemplo:

javascript await sql` INSERT INTO products (   name,   price,   stock,   category_id ) VALUES (   ${name},   ${price},   ${stock},   ${category_id} ) `; 

Esto evita que los datos enviados por el usuario sean interpretados como código SQL.

---

## Frontend

El frontend fue desarrollado con React y Vite.

Características:

- Consumo de API mediante fetch().
- Uso de useEffect().
- Renderizado dinámico de productos.
- Visualización de datos reales almacenados en PostgreSQL.

---

## Despliegue

Frontend desplegado en Vercel:

https://learning-inventory-pi.vercel.app/

Repositorio GitHub:

https://github.com/IvanBussio/learning-inventory

---

# Investigación: Drizzle ORM

## ¿Qué es Drizzle ORM?

Drizzle ORM es un ORM moderno para TypeScript que permite trabajar con bases de datos relacionales como PostgreSQL utilizando un esquema tipado. A diferencia de escribir consultas SQL manualmente, Drizzle proporciona seguridad de tipos, autocompletado y validación durante el desarrollo.

## Instalación

bash npm install drizzle-orm npm install postgres npm install -D drizzle-kit 

## Definición del esquema

typescript import { pgTable, uuid, varchar, numeric, integer } from "drizzle-orm/pg-core";  export const products = pgTable("products", {   id: uuid("id").primaryKey(),   name: varchar("name", { length: 150 }).notNull(),   price: numeric("price", { precision: 10, scale: 2 }).notNull(),   stock: integer("stock").default(0), }); 

## Consulta con Drizzle ORM

typescript const result = await db.select().from(products); 

## Ventajas de un ORM tipado

- Autocompletado en el editor.
- Validación de tipos en tiempo de desarrollo.
- Menor riesgo de errores en consultas.
- Mejor mantenibilidad del código.
- Integración sencilla con TypeScript.
- Mayor productividad en proyectos grandes.

## Comparación con SQL puro

Durante este proyecto se utilizó SQL puro para comprender los fundamentos de PostgreSQL, relaciones, JOINs, claves foráneas y consultas avanzadas. Sin embargo, en aplicaciones empresariales de mayor tamaño, un ORM como Drizzle puede mejorar la productividad y la seguridad del desarrollo gracias a su sistema de tipos y abstracciones.

## Conclusión

SQL puro sigue siendo fundamental para comprender el funcionamiento interno de una base de datos relacional. Sin embargo, Drizzle ORM ofrece una capa de abstracción moderna y tipada que facilita el desarrollo de aplicaciones escalables, reduce errores y mejora la experiencia de desarrollo en proyectos basados en TypeScript.


Autor

Iván Ezequiel Bussio Scavarelli
Estudiante de Administración de Sistemas Informáticos en Red (ASIR)

Proyecto: Learning Inventory
Fecha de entrega: 1 de junio de 2026

⸻

© 2026 Iván Ezequiel Bussio Scavarelli. Proyecto desarrollado con fines académicos.
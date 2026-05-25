# Learning Inventory

Proyecto de práctica full stack utilizando PostgreSQL y Neon como base de datos serverless.

## Tecnologías utilizadas

- PostgreSQL
- Neon
- SQL
- Git & GitHub
- VS Code

## Estructura del proyecto

```bash
learning-inventory/
│
├── sql/
│   ├── schema.sql
│   └── seed.sql
│
├── docs/
│
├── backend/
│
├── frontend/
│
└── README.md
```

## Base de datos

La base de datos fue diseñada siguiendo el modelo relacional.

### Tablas principales

#### categories
Almacena las categorías de productos.

Campos:
- id
- name
- description

#### products
Almacena los productos del inventario.

Campos:
- id
- name
- price
- stock
- category_id

## Relaciones

La tabla `products` está relacionada con `categories`
mediante una foreign key:

```sql
category_id REFERENCES categories(id)
```

## Restricciones implementadas

- PRIMARY KEY
- FOREIGN KEY
- UNIQUE
- NOT NULL
- CHECK

Ejemplos:
- El precio debe ser mayor a 0.
- El stock no puede ser negativo.
- El nombre de categoría debe ser único.

## Seguridad

Se utilizó:

```sql
ON DELETE RESTRICT
```

para evitar eliminar categorías con productos asociados.

## Scripts SQL

### schema.sql
Contiene la creación de tablas y relaciones.

### seed.sql
Contiene datos iniciales de prueba.

## Estado actual

- [x] Configuración de Neon
- [x] Diseño del esquema relacional
- [x] Creación de tablas
- [x] Inserción de datos
- [x] Configuración de Git y GitHub

## Autor

Ivan Bussio

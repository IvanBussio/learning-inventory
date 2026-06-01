# Seguridad en Base de Datos

## ¿Qué es una inyección SQL?

La inyección SQL es una vulnerabilidad de seguridad que ocurre cuando datos introducidos por el usuario son concatenados directamente dentro de una consulta SQL.

Ejemplo inseguro:

js const query =   "SELECT * FROM products WHERE id = " + userId; 

Un atacante podría enviar:

txt 1 OR 1=1 

y alterar el comportamiento de la consulta.

## Prevención mediante consultas parametrizadas

En este proyecto se utilizan consultas parametrizadas proporcionadas por el driver oficial de Neon.

Ejemplo:

js await sql`   INSERT INTO products (     name,     price,     stock,     category_id   )   VALUES (     ${name},     ${price},     ${stock},     ${category_id}   ) `; 

Los valores son enviados por separado de la consulta SQL, evitando que código malicioso pueda ejecutarse dentro de la base de datos.

## Beneficios

- Prevención de SQL Injection.
- Mayor seguridad.
- Mejor mantenimiento del código.
- Validación automática de parámetros.
# Análisis SQL

## INNER JOIN

INNER JOIN devuelve únicamente los registros que tienen coincidencia en ambas tablas.

Ejemplo utilizado:

```sql
SELECT
    p.name AS producto,
    p.price AS precio,
    c.name AS categoria
FROM products p
INNER JOIN categories c
ON p.category_id = c.id;
```

### Caso real

Una tienda online necesita mostrar cada producto junto con el nombre de su categoría.

Si un producto no tiene categoría válida, no aparecerá en el resultado.

---

## LEFT JOIN

LEFT JOIN devuelve todos los registros de la tabla izquierda y las coincidencias encontradas en la tabla derecha.

Si no existe coincidencia, los campos de la tabla derecha aparecen como NULL.

Ejemplo utilizado:

```sql
SELECT
    c.name AS categoria,
    COUNT(p.id) AS total_productos
FROM categories c
LEFT JOIN products p
ON c.id = p.category_id
GROUP BY c.name;
```

### Caso real

Un administrador quiere visualizar todas las categorías del sistema, incluso aquellas que actualmente no tienen productos asociados.

Gracias a LEFT JOIN, categorías sin productos siguen apareciendo en el resultado.
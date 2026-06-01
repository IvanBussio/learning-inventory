# Arquitectura de Datos

## Modelo relacional

La base de datos fue diseñada utilizando PostgreSQL sobre Neon.

Se crearon dos tablas principales:

- categories
- products

La relación entre ambas tablas es de uno a muchos (1:N), donde una categoría puede tener varios productos.

## Foreign Key

La columna `category_id` de la tabla `products` actúa como una Foreign Key.

Esto significa que referencia la columna `id` de la tabla `categories`.

Gracias a esta relación:

- Un producto siempre pertenece a una categoría válida.
- No pueden existir productos asociados a categorías inexistentes.
- Se mantiene la integridad referencial de la base de datos.

## ON DELETE RESTRICT

Se eligió la opción `ON DELETE RESTRICT`.

Este comportamiento impide eliminar una categoría que tenga productos asociados.

Por ejemplo, si existe la categoría "Electrónica" con productos vinculados, PostgreSQL bloqueará la eliminación hasta que esos productos sean eliminados o reasignados.

Este enfoque es más seguro que `ON DELETE CASCADE` para sistemas de inventario, ya que evita la pérdida accidental de información.
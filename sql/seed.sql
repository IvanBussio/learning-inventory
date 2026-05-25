INSERT INTO categories (name, description)
VALUES
('Electrónica', 'Dispositivos tecnológicos'),
('Hogar', 'Muebles y decoración'),
('Deportes', 'Artículos deportivos');

INSERT INTO products (name, price, stock, category_id)
VALUES
(
    'Mouse Gamer',
    49.99,
    15,
    (SELECT id FROM categories WHERE name = 'Electrónica')
),
(
    'Teclado Mecánico',
    89.99,
    10,
    (SELECT id FROM categories WHERE name = 'Electrónica')
),
(
    'Silla de Oficina',
    199.99,
    5,
    (SELECT id FROM categories WHERE name = 'Hogar')
),
(
    'Pelota de Fútbol',
    29.99,
    20,
    (SELECT id FROM categories WHERE name = 'Deportes')
);
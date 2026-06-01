const express = require('express');
const cors = require('cors');
const sql = require('./lib/db');

const app = express();

app.use(cors());
app.use(express.json());

// Comprobar que Express funciona
app.get('/ping', (req, res) => {
  res.json({ ok: true });
});

// Comprobar conexión con Neon
app.get('/test', async (req, res) => {
  try {
    const result = await sql`SELECT NOW()`;
    res.json(result);
  } catch (error) {
    console.error('ERROR COMPLETO:', error);

    res.status(500).json({
      message: error.message,
      error: String(error)
    });
  }
});

// Obtener productos con su categoría
app.get('/products', async (req, res) => {
  try {
    const products = await sql`
      SELECT
        p.id,
        p.name,
        p.price,
        p.stock,
        c.name AS category
      FROM products p
      INNER JOIN categories c
      ON p.category_id = c.id
      ORDER BY p.name;
    `;

    res.json(products);

  } catch (error) {
    console.error('PRODUCTS ERROR:', error);

    res.status(500).json({
      error: 'Database error',
      message: error.message
    });
  }
});

// Insertar un producto nuevo
app.post('/products', async (req, res) => {
  try {
    const { name, price, stock, category_id } = req.body;

    if (!name || !price || category_id === undefined) {
      return res.status(400).json({
        error: 'Missing required fields'
      });
    }

    const result = await sql`
      INSERT INTO products (
        name,
        price,
        stock,
        category_id
      )
      VALUES (
        ${name},
        ${price},
        ${stock || 0},
        ${category_id}
      )
      RETURNING *;
    `;

    res.status(201).json(result);

  } catch (error) {
    console.error('INSERT ERROR:', error);

    res.status(500).json({
      error: 'Insert failed',
      message: error.message
    });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
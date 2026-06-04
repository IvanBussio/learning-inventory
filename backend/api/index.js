const express = require("express");
const cors = require("cors");
const sql = require("../lib/db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/ping", (req, res) => {
  res.json({ ok: true });
});

app.get("/products", async (req, res) => {
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
    console.error(error);

    res.status(500).json({
      error: error.message
    });
  }
});

module.exports = app;
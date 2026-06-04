const { neon } = require("@neondatabase/serverless");

const sql = neon(process.env.DATABASE_URL);

module.exports = async (req, res) => {
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

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};
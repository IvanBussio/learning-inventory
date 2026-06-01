import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todas");
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  const categories = [
    "Todas",
    ...new Set(products.map((p) => p.category)),
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "Todas" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });

  const totalValue = products
    .reduce((acc, p) => acc + Number(p.price), 0)
    .toFixed(2);

  const lowStock = products.filter(
    (p) => p.stock < 10
  ).length;

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <div className="particles">
        {[...Array(10)].map((_, i) => (
          <span key={i}></span>
        ))}
      </div>

      <div className="container">
        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <h1 className="title">
          📦 Learning Inventory
        </h1>

        <p className="subtitle">
          Inventory Management Dashboard
        </p>

        <div className="stats">
          <div className="card">
            <h2>{products.length}</h2>
            <p>Productos</p>
          </div>

          <div className="card">
            <h2>€ {totalValue}</h2>
            <p>Valor Total</p>
          </div>

          <div className="card">
            <h2>{lowStock}</h2>
            <p>Stock Bajo</p>
          </div>

          <div className="card">
            <h2>{categories.length - 1}</h2>
            <p>Categorías</p>
          </div>
        </div>

        <div className="filters">
          <input
            type="text"
            placeholder="🔍 Buscar producto..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
          >
            {categories.map((cat) => (
              <option
                key={cat}
                value={cat}
              >
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio (€)</th>
                <th>Stock</th>
                <th>Categoría</th>
              </tr>
            </thead>

            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>

                  <td>
                    € {product.price}
                  </td>

                  <td
                    className={
                      product.stock < 10
                        ? "stock-low"
                        : "stock-ok"
                    }
                  >
                    {product.stock}
                  </td>

                  <td>{product.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <footer className="footer">
          <h3>Learning Inventory</h3>

          <p>
            Developed by Iván Ezequiel Bussio Scavarelli
          </p>

          <p>
            ASIR Final Project · June 2026
          </p>
        </footer>

      </div>
    </div>
  );
}

export default App;

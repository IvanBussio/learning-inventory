import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((response) => response.json())
      .then((data) => {
        console.log('DATOS:', data);
        setProducts(data);
      })
      .catch((error) => {
        console.error('ERROR:', error);
      });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Learning Inventory</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio (€)</th>
            <th>Stock</th>
            <th>Categoría</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>{product.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
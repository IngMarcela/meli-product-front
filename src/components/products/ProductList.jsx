import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:3000/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Error al obtener productos:', err));
  }, []);

  return (
    <main className="product-page">
      <h1 className="product-title">Productos disponibles</h1>
      <div className="product-grid">
        {products.map(product => (
          <Link to={`/products/${product.id}`} key={product.id} className="product-card">
            <img src={product.images[0]} alt={product.title} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}

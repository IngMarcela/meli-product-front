import { Routes, Route, Navigate } from 'react-router-dom';
import ProductDetail from './components/products/ProductDetail';
import Header from './components/common/Header';
import Footer from './components/common/Footer'

function App() {
  const defaultProductId = import.meta.env.VITE_PRODUCT_ID || '1001';

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to={`/products/${defaultProductId}`} />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

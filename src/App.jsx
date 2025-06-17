import { Routes, Route, Navigate } from 'react-router-dom';
import ProductDetail from './components/products/ProductDetail';
import Header from './components/common/Header';
import Footer from './components/common/Footer'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/products/1001" />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

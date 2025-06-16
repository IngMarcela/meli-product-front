import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [zoomEnabled, setZoomEnabled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setProduct(prevProduct => ({
          ...prevProduct,
          // Hardcode seller details for visual consistency if backend only provides name string
          seller: {
            name: data.seller, // Use the name from backend
            productsCount: '+5',
            level: 'MercadoLíder Platinum',
            slogan: '¡Uno de los mejores del sitio!',
            metrics: {
              completedSales: '+1000',
              goodAttention: true,
              onTimeDelivery: true,
            },
          },
        }));
      })
      .catch(err => console.error('Error al obtener producto:', err));
  }, [id]);

  if (!product) return <p className="loading-message">Cargando producto...</p>;

  return (
    <div className="product-page-container">
      <div className="product-main-layout">
        <div className="product-content-area">

          {/* Image Gallery and Product Info (left & center columns) */}
          <div className="product-gallery-and-info">
            <div className="thumbnails-column">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.title} - vista ${index + 1}`}
                  className={`thumbnail ${selectedImage === index ? 'selected' : ''}`}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
            <div className="main-image-column">
              <img
                src={product.images[selectedImage]}
                alt={product.title}
                onLoad={(e) => setImageSize({ width: e.target.naturalWidth, height: e.target.naturalHeight })}
                onMouseEnter={() => setZoomEnabled(true)}
                onMouseLeave={() => setZoomEnabled(false)}
                onMouseMove={(e) => {
                  const { left, top, width, height } = e.target.getBoundingClientRect();
                  const x = (e.clientX - left) / width;
                  const y = (e.clientY - top) / height;
                  setMousePosition({ x, y });
                }}
              />
              {zoomEnabled && (
                <div
                  className="magnifying-glass"
                  style={{
                    backgroundImage: `url(${product.images[selectedImage]})`,
                    backgroundPosition: `${mousePosition.x * 100}% ${mousePosition.y * 100}%`,
                  }}
                ></div>
              )}
            </div>
            <div className="product-info-column">
              <div className="store-info-top">
                <Link to="#" className="official-store-link">Tienda oficial de {product.seller ? (typeof product.seller === 'string' ? product.seller : product.seller.name) : 'Vendedor Desconocido'}</Link>
              </div>
              <span className="product-status">Nuevo | +1000 vendidos <i className="far fa-heart heart-icon"></i></span>
              <span className="recommended-tag">RECOMENDADO</span>
              <h1>{product.title}</h1>
              
              <div className="product-rating">
                <span className="rating-value">{product.rating}</span>
                <div className="stars-container">
                  {[...Array(5)].map((_, i) => {
                    const starValue = i + 1;
                    return (
                      <span
                        key={i}
                        className="star"
                      >
                        {product.rating >= starValue ? '★' : (product.rating > i ? '☆' : '☆')}
                      </span>
                    );
                  })}
                </div>
                <span className="reviews">({product.reviews})</span>
              </div>

              <p className="current-price-text">$ {product.price} </p>
              <p className="installments-text">en 3 cuotas de $ {(product.price / 3).toFixed(0)} con 0% interés</p>
              <button className="discount-cta">15% OFF Banco Popular</button>
              <a href="#" className="payment-options-link">Ver medios de pago y promociones</a>

              <div className="purchase-options">
                <span>Opciones de compra: </span>
                <Link to="#">3 productos nuevos desde US$ {product.price}</Link>
              </div>
            </div>
          </div>

          {/* Description and Characteristics (full width sections) */}
          <div className="product-description-section">
            <h2>Descripción</h2>
            <p>{product.description}</p>
            <p className="description-paragraph">Capacidad y eficiencia<br/>Con su potente procesador y 8 GB de RAM, su computadora logrará un alto rendimiento con una alta velocidad de transmisión de contenido y ejecutará varias aplicaciones al mismo tiempo, sin demoras.</p>
            <p className="description-paragraph">Capacidad de almacenamiento ilimitada<br/>Olvídate de borrar. Con su memoria interna de 256 GB puedes descargar todos los archivos y aplicaciones que necesites, guardar fotos y almacenar tus películas, series y vídeos favoritos para reproducirlos cuando quieras.</p>
          </div>

        </div>

        {/* Right Sidebar */} 
        <div className="product-sidebar">
          <div className="delivery-info">
            <span className="free-shipping-tag">Envío gratis a todo el país</span>
            <p>Conoce los tiempos y las formas de envío.</p>
            <a href="#">Calcular cuándo llega</a>
          </div>

          <div className="quantity-selector">
            <p className="stock-available-text">Stock disponible</p>
            <div className="quantity-input-row">
              <span className="quantity-label">Cantidad: </span>
              <select>
                <option value="1">1 unidad</option>
              </select>
              <span className="available-stock">({product.stock} disponibles)</span>
            </div>
          </div>

          <div className="action-buttons-sidebar">
            <button className="buy-now-button">Comprar ahora</button>
            <button className="add-to-cart-button">Agregar al carrito</button>
          </div>

          <div className="seller-shop-info">
            <h3 className="seller-name">Vendido por {product.seller.name}</h3>
            <p className="seller-products-count">{product.seller.productsCount} Productos</p>
            {product.seller.level && (
              <div className="mercadolider-info">
                <div className="mercadolider-icon"></div>
                <span className="mercadolider-level">{product.seller.level}</span>
                <span className="mercadolider-slogan">{product.seller.slogan}</span>
              </div>
            )}
            <div className="seller-metrics">
              <div className="metric-item">
                <i className="fas fa-shopping-bag metric-icon"></i>
                <span className="metric-value">{product.seller.metrics?.completedSales}</span>
                <span className="metric-label">Ventas concretadas</span>
              </div>
              <div className="metric-item">
                <i className={`metric-icon ${product.seller.metrics?.goodAttention ? 'fas fa-comment-alt check-icon' : 'fas fa-comment-alt'}`}></i>
                <span className="metric-label">Brinda buena atención</span>
              </div>
              <div className="metric-item">
                <i className={`metric-icon ${product.seller.metrics?.onTimeDelivery ? 'fas fa-clock check-icon' : 'fas fa-clock'}`}></i>
                <span className="metric-label">Entrega sus productos a tiempo</span>
              </div>
            </div>
            <button className="go-to-shop-button">Ver más productos del vendedor</button>
          </div>

          <div className="delivery-guarantees">
            <p><i className="fas fa-undo-alt"></i> Devolución gratis. Tienes 30 días desde que lo recibes.</p>
            <p><i className="fas fa-shield-alt"></i> Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.</p>
            <p><i className="fas fa-clock"></i> 1 año de garantía de fábrica.</p>
          </div>

          {/* Payment Methods Section */}
          <div className="payment-methods-section">
            <div className="payment-banner">
              <span>¡Paga en hasta 12 cuotas sin interés!</span>
            </div>
            <p className="payment-subtitle">Tarjetas de crédito</p>
            <p className="payment-description">¡Cuotas sin interés con bancos seleccionados!</p>
            <div className="credit-card-logos">
              <img src="https://w7.pngwing.com/pngs/616/571/png-transparent-visa-payment-card-debit-card-mastercard-visa-blue-text-service.png" alt="Visa" />
              <img src="https://e7.pngegg.com/pngimages/910/492/png-clipart-mastercard-logo-credit-card-visa-brand-mastercard-text-label-thumbnail.png" alt="Mastercard" />
              <img src="https://www.tarjetasdecredito.com.uy/images/emisorImg/6342161f6ecba.png" alt="Oca" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/2052px-American_Express_logo_%282018%29.svg.png" alt="American Express" />
            </div>

            <p className="payment-subtitle">Tarjetas de débito</p>
            <div className="debit-card-logos">
              <img src="https://w7.pngwing.com/pngs/616/571/png-transparent-visa-payment-card-debit-card-mastercard-visa-blue-text-service.png" alt="Visa Débito" />
              <img src="https://e7.pngegg.com/pngimages/910/492/png-clipart-mastercard-logo-credit-card-visa-brand-mastercard-text-label-thumbnail.png" alt="Mastercard Débito" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Maestro_Logo.svg" alt="Maestro" />
            </div>

            <p className="payment-subtitle">Efectivo</p>
            <div className="cash-payment-logos">
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Abitab_S.A.png" alt="Abitab" />
              <img src="https://www.redpay.cl/wp-content/uploads/2024/08/Logo-RedPay-H_01.webp" alt="Redpagos" />
            </div>
            <a href="#" className="other-payment-methods-link">Conoce otros medios de pago</a>
          </div>

        </div>
      </div>

    </div>
  );
}

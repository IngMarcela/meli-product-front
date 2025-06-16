import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import MercadoLibreLogo from '../../assets/images/mercadolibre-logo.png';

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-top">
        <div className="logo-container">
          <Link to="/">
            <img src={MercadoLibreLogo} alt="Mercado Libre" className="mercadolibre-logo" />
          </Link>
        </div>
        <div className="search-bar-container">
          <input type="text" placeholder="Buscar productos, marcas y más..." className="search-input" />
          <button className="search-button"></button>
        </div>
        <div className="promo-banner">
          <span>ENVÍO GRATIS</span>
          <span className="promo-text">EN TU PRIMERA COMPRA EXCLUSIVO EN APP</span>
        </div>
      </div>
      <div className="header-bottom">
        <div className="location-selector">
          <i className="fas fa-map-marker-alt"></i>
          <span>Ingresa tu ubicación</span>
        </div>
      </div>
    </header>
  );
} 
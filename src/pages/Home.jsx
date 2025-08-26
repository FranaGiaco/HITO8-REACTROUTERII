// src/pages/Home.jsx
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Bienvenid@ a Pizza App 🍕</h1>
      <p>Elige tu pizza favorita o revisa tu carrito:</p>
      
      <div style={{ marginTop: '1rem' }}>
        <Link to="/cart" style={{ marginRight: '1rem' }}>Ver Carrito</Link>
        <Link to="/pizza/1">Ver Pizza de ejemplo</Link>
      </div>
    </div>
  );
}

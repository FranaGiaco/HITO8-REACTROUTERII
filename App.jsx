// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute.jsx';
import GuestRoute from './routes/GuestRoute.jsx';

import Home from './src/pages/Home.jsx';
import Login from './src/pages/Login.js';
import Register from './src/pages/Register.js';
import Profile from './src/pages/Profile.js';
import Cart from './src/pages/Cart.js';
import Pizza from './src/pages/Pizza.js';
import NotFound from './src/pages/NotFound.js';

export default function App() {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/" element={<Home />} />
      <Route path="/pizza/:id" element={<Pizza />} />
      <Route path="/cart" element={<Cart />} />

      {/* Rutas solo para invitados */}
      <Route element={<GuestRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Rutas protegidas (requieren login) */}
      <Route element={<ProtectedRoute />}>
        <Route path="/profile" element={<Profile />} />
        {/* Si tu checkout es página protegida, colócala aquí */}
        {/* <Route path="/checkout" element={<Checkout />} /> */}
      </Route>

      {/* Ruta 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

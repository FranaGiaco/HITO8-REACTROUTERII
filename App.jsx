// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute.jsx';
import GuestRoute from './routes/GuestRoute.jsx';

import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Profile from './pages/Profile.jsx';
import Cart from './pages/Cart.jsx';
import Pizza from './pages/Pizza.jsx';
import NotFound from './pages/NotFound.jsx';

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

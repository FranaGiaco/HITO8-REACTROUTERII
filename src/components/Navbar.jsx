// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext.jsx';

export default function Navbar() {
  const { token, logout } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
      
      {token ? (
        <>
          <Link to="/profile">Profile</Link>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
}

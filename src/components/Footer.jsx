// src/components/Footer.jsx
export default function Footer() {
    return (
      <footer style={{ textAlign: 'center', padding: '1rem', borderTop: '1px solid #ccc' }}>
        <p>🍕 Pizza App &copy; {new Date().getFullYear()}</p>
        <p>Desafío 8 — React + JWT</p>
      </footer>
    );
  }
  
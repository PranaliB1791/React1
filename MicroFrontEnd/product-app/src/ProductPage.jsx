import React from 'react';

const ProductPage = () => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #f9a825, #f44336)',
      color: '#fff',
      padding: '2rem',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
      marginTop: '2rem',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center'
    }}>
      <h2>🛍️ Welcome to the Product Micro Frontend</h2>
      <p>This section is rendered from <strong>product-app</strong>.</p>
      <div style={{
        marginTop: '1rem',
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem'
      }}>
        <div style={{
          background: '#ffccbc',
          padding: '1rem',
          borderRadius: '8px',
          color: '#d84315',
          width: '150px',
        }}>
          Product 1
        </div>
        <div style={{
          background: '#dcedc8',
          padding: '1rem',
          borderRadius: '8px',
          color: '#558b2f',
          width: '150px',
        }}>
          Product 2
        </div>
        <div style={{
          background: '#b3e5fc',
          padding: '1rem',
          borderRadius: '8px',
          color: '#0277bd',
          width: '150px',
        }}>
          Product 3
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

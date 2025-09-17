import React from 'react';

const ProductPage = React.lazy(() => import('product/ProductPage'));

function App() {
  return (
    <div style={{
      background: 'linear-gradient(to right, #8e24aa, #3949ab)',
      minHeight: '100vh',
      padding: '2rem',
      color: '#fff',
      fontFamily: 'Verdana, sans-serif'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        marginBottom: '1rem'
      }}>
        🌟 Host Application (Shell)
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        This page is served from <strong>host-app</strong> and includes content from the <strong>product-app</strong> micro frontend.
      </p>

      {/* Remove Suspense, directly render */}
      <React.Suspense fallback={<div></div>}>
        <ProductPage />
      </React.Suspense>
    </div>
  );
}

export default App;

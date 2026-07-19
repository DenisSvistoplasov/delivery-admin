import React from 'react';
import { Link } from '@tramvai/module-router';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        fontFamily: 'sans-serif',
      }}
    >
      <header
        style={{
          height: '60px',
          background: '#1f2937',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          padding: '0 24px',
        }}
      >
        <h2>Панель ресторана (Т-Еда)</h2>
      </header>

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <aside
          style={{
            width: '250px',
            background: '#f3f4f6',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            borderRight: '1px solid #e5e7eb',
          }}
        >
          <Link
            url="/"
            style={{
              padding: '12px',
              background: '#fff',
              borderRadius: '6px',
              textDecoration: 'none',
              color: '#374151',
              fontWeight: 'bold',
              border: '1px solid #d1d5db',
            }}
          >
            📊 Дашборд
          </Link>
          <Link
            url="/menu"
            style={{
              padding: '12px',
              background: '#fff',
              borderRadius: '6px',
              textDecoration: 'none',
              color: '#374151',
              fontWeight: 'bold',
              border: '1px solid #d1d5db',
            }}
          >
            📜 Меню ресторана
          </Link>
          <Link
            url="/favorites"
            style={{
              padding: '12px',
              background: '#fff',
              borderRadius: '6px',
              textDecoration: 'none',
              color: '#374151',
              fontWeight: 'bold',
              border: '1px solid #d1d5db',
            }}
          >
            ⭐ Избранное
          </Link>
        </aside>

        <main
          style={{
            flex: 1,
            padding: '24px',
            overflowY: 'auto',
            background: '#f9fafb',
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

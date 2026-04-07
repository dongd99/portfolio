import React from 'react';

const Footer = () => {
  return (
    <footer style={{ 
      padding: '2.5rem 0', 
      textAlign: 'center', 
      backgroundColor: 'var(--bg-color)',
      borderTop: '1px solid var(--border-color)',
      color: 'var(--text-secondary)',
      fontSize: '0.9rem'
    }}>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Portfolio. Built with React & Framer Motion.</p>
      </div>
    </footer>
  );
};

export default Footer;

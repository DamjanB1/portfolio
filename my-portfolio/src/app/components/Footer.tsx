import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        color: 'white',
        height: '50px',
        width: '100%',
        position: 'fixed',
        bottom: '0',
        left: '0',
        zIndex: '10',
      }}
    >
      <p>&copy; 2025 Damjan - All rights reserved</p>
    </footer>
  );
};

export default Footer;
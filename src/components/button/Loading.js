// Loading.js
import React from 'react';

const Loading = () => {
  const loadingContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Altura completa de la pantalla
    textAlign: 'center',
  };

  const loadingImageStyle = {
    width: '100px', // Ajusta el tamaño de la imagen según sea necesario
    marginBottom: '20px', // Espacio entre la imagen y el texto
  };

  return (
    <div style={loadingContainerStyle}>
      <img src="https://forbes.es/wp-content/uploads/2023/08/fotonoticia_20230822112020_9999.jpg" alt="Loading" style={loadingImageStyle} />
      <div>Loading...</div>
    </div>
  );
};

export default Loading;

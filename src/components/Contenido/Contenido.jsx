import React from 'react';
import { useState } from 'react';

const Contenido = ({ texto }) => {
    const colores = ['yellow', 'cyan', 'orange'];
    const [colorIndex, setColorIndex] = useState(0);
  
    const cambiarColor = () => {
      setColorIndex((colorIndex + 1) % colores.length);
    };
  
    return (
      <div style={{ backgroundColor: colores[colorIndex], padding: '10px' }}>
        <p>{texto}</p>
        <button onClick={cambiarColor}>Cambiar Color</button>
      </div>
    );
  };
  
  export default Contenido;
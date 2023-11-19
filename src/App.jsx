import './App.css';
import Contenido from './components/Contenido/Contenido';
import Encabezado from './components/Encabezado/Encabezado';
import Fichas from './components/Fichas/Fichas';
import { useState } from 'react';


const App = () => {
    const [selectedFicha, setSelectedFicha] = useState(null);
  
    const handleFichaClick = (fichaInfo) => {
      setSelectedFicha(fichaInfo);
    };
  
    const renderMensaje = () => {
      if (selectedFicha) {
        return (
          <p style={{ color: selectedFicha.backgroundColor }}>
            {`ID: ${selectedFicha.id}, Fila: ${selectedFicha.row}, Columna: ${selectedFicha.col}, Contador: ${selectedFicha.contador}`}
          </p>
        );
      } else {
        return <p style={{ color: 'blue' }}>Seleccione una ficha</p>;
      }
    };
  return (
    <>
      <Encabezado titulo="Soy un titulo" />
      <Contenido texto="Este es el párrafo"/>
      <div>
      {renderMensaje()}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
        {[1, 2, 3].map((row) =>
          [1, 2, 3].map((col) => (
            <Fichas key={col + (row - 1) * 3} id={col + (row - 1) * 3} row={row} col={col} onClick={handleFichaClick} />
            
          ))
        )}
      </div>
    </div>
      
    </>
  )
}


export default App;

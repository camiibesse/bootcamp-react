import { useState } from "react";
import './Fichas.css'

const Fichas = ({ id, row, col, onClick }) => {
  const [contador, setContador] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('gray');

  const handleClick = () => {
    setContador(contador + 1);

    if (row === col) {
      setBackgroundColor('red');
    } else {
      setBackgroundColor('black');
    }

    onClick({ id, row, col, contador });
  };

  return (
    <div
      className="ficha"
      style={{ backgroundColor}}
      onClick={handleClick}
    >
      <p>ID: {id}</p>
      <p>Fila: {row}</p>
      <p>Columna: {col}</p>
      <p>Contador: {contador}</p>
    </div>
  );
};

export default Fichas;
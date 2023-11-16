import './App.css';
import Contenido from './components/Contenido/Contenido';
import Encabezado from './components/Encabezado/Encabezado';


function App() {
  return (
    <>
      <Encabezado titulo="Soy un titulo" />
      <Contenido texto="Este es el párrafo"/>
    </>
  )
}

export default App;

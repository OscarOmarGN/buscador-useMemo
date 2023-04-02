
import { useState } from 'react';
import './App.css';
import BarraBusqueda from './componentes/BarraBusqueda';

const gente = [
  {
    id: 'persona 1',
    nombre: 'Oscar Garcia' 
  },
  {
    id: 'persona 2',
    nombre: 'Osvaldo Garcia' 
  },
  {
    id: 'persona 3',
    nombre: 'Mario Garcia' 
  },
  {
    id: 'persona 4',
    nombre: 'Maria Navarro' 
  },
  {
    id: 'persona 5',
    nombre: 'Juan Perez' 
  }
];

const calendario = [
  {
    id: 'calendario 1',
    nombre: 'recordadorio 1'
  },
  {
    id: 'calendario 2',
    nombre: 'recordadorio 2'
  },
  {
    id: 'calendario 3',
    nombre: 'recordadorio 3'
  },
  {
    id: 'calendario 4',
    nombre: 'recordadorio 4'
  },
  {
    id: 'calendario 5',
    nombre: 'recordadorio 5'
  }
];

const correos = [
  {
    id: 'correo 1',
    nombre: 'correo.com 1'
  },
  {
    id: 'correo 2',
    nombre: 'correo.com 2'
  },
  {
    id: 'correo 3',
    nombre: 'correo.com 3'
  },
  {
    id: 'correo 4',
    nombre: 'correo.com 4'
  },
  {
    id: 'correo 5',
    nombre: 'correo.com 5'
  },
];


function App() {
  
  const [datos, setdatos] = useState([...gente, ...calendario, ...correos]);

  const [seleccion, setSeleccion] = useState('');
  const [tituloSeleccion, setTituloSeleccion] = useState('todos');
  
  const opcion = (e) => {
    
    const op = e.target.name;

    switch (op) {
      case 'todos':
        setdatos([...gente, ...calendario, ...correos])
        break;
      case 'gente':
        setdatos([...gente])
        break;
      case 'calendario':
        setdatos([...calendario])
        break;
      case 'correos':
        setdatos([...correos])
        break;
      default:
        break;
    }
  }

  const titulo = (e) => {
    setTituloSeleccion(e.target.name);
  }

  const manejarItem = (item) => {
    setSeleccion(item)
  }

  return (
    <div className="App">
      <h1>Buscador</h1>
      <div className="botones-busqueda">
        <div onClick={titulo}>
          <button onClick={opcion} name='todos' seleccionado=''>Todos</button>
        </div>
        <div onClick={titulo}>
          <button onClick={opcion} name='gente' seleccionado=''>Gente</button>
        </div>
        <div onClick={titulo}>
          <button onClick={opcion} name='calendario' seleccionado=''>Calendario</button>
        </div>
        <div onClick={titulo}>
          <button onClick={opcion} name='correos' seleccionado=''>Correos</button>
        </div>
      </div>
      {tituloSeleccion !== '' ? `Buscar en: ${tituloSeleccion}` : ''}
      <BarraBusqueda datos={datos} seleccionItem={manejarItem}/>
      {seleccion ? <div>Selección: {seleccion.nombre}</div> : ''}
    </div>
  )
}

export default App;

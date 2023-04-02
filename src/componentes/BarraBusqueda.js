import React, { useState } from 'react'
import Resultados from './Resultados';

const BarraBusqueda = ({datos, seleccionItem}) => {
  
  const [busqueda, setBusqueda] = useState('');
  const [resultados, setResultados] = useState([]);
  
  const valorInput = (e) => {
    // console.log(e.target.value)
    setBusqueda(e.target.value);
  }

  const manejarResultados = (datos) => {
    setResultados(datos);
  }
  console.log(resultados)

  
  return (
    <div className='barra-busqueda'>
      <input type="text" placeholder='Buscar...' onChange={valorInput} defaultValue={busqueda} />
      {resultados.length !== 0 ? resultados && <div>Resultados: {resultados.length}</div> : ''}
      <Resultados datos={datos} seleccionItem={seleccionItem} busqueda={busqueda} totalResultados={manejarResultados}/>
    </div>
  )
}

export default BarraBusqueda;
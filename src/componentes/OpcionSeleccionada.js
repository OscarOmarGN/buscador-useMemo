import React, { useMemo } from 'react';

const OpcionSeleccionada = ({item, busqueda, onClick}) => {

  
  const getPosicion = (item, busqueda) => {
    const index = item.nombre.toLowerCase().indexOf(busqueda);
    const izquierda = item.nombre.slice(0, index);
    const derecha = item.nombre.slice(index + busqueda.length);
    const centro = item.nombre.slice(index, + index + busqueda.length);
    return{
      izquierda,
      centro, 
      derecha
    }
  }
  
  const {izquierda, centro, derecha} = useMemo(() => getPosicion(item, busqueda), [item, busqueda]);

  const seleccionarResultado = () => {
    onClick(item);
  }

  return (
    <button onClick={seleccionarResultado} >
      {izquierda}
      <span style={{backgroundColor: 'yellow', fontWeight: 'bolder'}}>{centro}</span>
      {derecha}
    </button>
  )
}

export default OpcionSeleccionada;
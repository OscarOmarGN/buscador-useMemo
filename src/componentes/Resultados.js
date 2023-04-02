import { useEffect, useMemo, useState } from "react";
import OpcionSeleccionada from "./OpcionSeleccionada";

export default function Results({
  datos, busqueda, seleccionItem, totalResultados
}) {
  const [resultados, setResultados] = useState([]);
  const filteredItems = useMemo(() => findMatch(datos, busqueda), [datos, busqueda]);

  useEffect(() => {
    totalResultados(resultados);
  }, [resultados, totalResultados])

  function findMatch(datos, busqueda) {
    const res = datos.filter((q) => {
      return (
        q.nombre.toLowerCase().indexOf(busqueda) >= 0 &&
        busqueda.length > 0 &&
        busqueda !== ""
      );
    });
    setResultados(res);

    return res;
  }


  return (
    <div className="resultado-content">
      {busqueda !== ""
        ? filteredItems.map((item) => (
            <OpcionSeleccionada key={item.id} busqueda={busqueda} item={item} onClick={seleccionItem} />
          ))
        : ""}
    </div>
  );
}
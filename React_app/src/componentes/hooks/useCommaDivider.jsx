import { useEffect, useState } from "react";


export const useCommaDivider = (
  claveCategoriaCommaDivider,
  string,
  stringInicial
) => {
  ///////////nameNewEntri es el nombre que va a llevar en la base de datos los elementos separados por coma

  const [state, setState] = useState({});
  const [categorias, setCaterias] = useState({});
  const [newEntryObjeto, setNewEntryObjeto] = useState({});
  const handleCrearCategorias = (value) => {

    if (value && typeof value === 'string') {
      const arreglo = value.split(",");
      
      arreglo.forEach((nuevaCategoria) => {

        if (!categorias[nuevaCategoria]) {
          setCaterias((ObjetoCategorias) => ({
            ...ObjetoCategorias,
            [nuevaCategoria]: nuevaCategoria,
          }));
        }
      });
    }
  };

  ////////// cambios del cheched del componente
  const handleChangeChecked = (e) => {
    if (!state[e.target.value]) {

      
      setState((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.checked,
      }));
    } else {
      
      setState((prevState) => ({
        ...prevState,
        [e.target.value]: ![e.target.checked],
      }));

    }
  };

  const stateInicial = (categoriasiniciales) => {

    if(categoriasiniciales && typeof categoriasiniciales === 'string'){


      const arreglo = categoriasiniciales.split(",");
      const newCategoryState = {};
  
      arreglo.forEach((nuevaCategoria) => {

        newCategoryState[nuevaCategoria] = true;
      });
  
      setState(newCategoryState);
    }
  };

  useEffect(() => {
    
    handleCrearCategorias(stringInicial);
    handleCrearCategorias(string);
    stateInicial(stringInicial);

  }, []);

  useEffect(() => {
    const arregloFiltrados = Object.keys(state).filter(
      (clave) => state[clave] === true
    ); ///filtra los estados que esten verdaderos
    const arregloToString = arregloFiltrados.join(","); /// el arrey devuelto lo transforma en in string
    setNewEntryObjeto({
      [claveCategoriaCommaDivider]:arregloToString,
    });
  }, [state]);

  return {
    handleChangeChecked,
    state,
    newEntryObjeto,
    handleCrearCategorias,
    categorias,
  };
};

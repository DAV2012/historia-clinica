import { useEffect, useState } from "react";
import { useCommaDivider } from "../hooks/useCommaDivider";
import TypeFieldInput from "../typefieldInput";
import { Box, IconButton, TextField } from "@mui/material";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default function SeccionCategorias({
  listDataBD,
  objetoList,
  handleChange,
  disabled
}) {

  const {
    handleChangeChecked,
    state,
    newEntryObjeto,
    handleCrearCategorias,
    categorias,
  }=useCommaDivider(objetoList.value,objetoList.option,listDataBD[objetoList.value])

  const[agregarCategoria, setAgregarCategoria] = useState('')

  useEffect(()=>{

    handleChange(newEntryObjeto)
  },[newEntryObjeto])

  return (
    <>
      {!disabled && <Box display='flex'maxWidth={'300px'} margin={'2rem 0'}>
        <TextField
        label="Agrega nueva categoria"
        variant="standard"
        value={agregarCategoria}
        onChange={(e)=>setAgregarCategoria(e.target.value)}
       
        />
        <IconButton onClick={()=>handleCrearCategorias(agregarCategoria)}>
        <AddCircleIcon />
        </IconButton>

      </Box>}
      <Grid2 container spacing={2}>
        
        {Object.entries(categorias).map(
        (
          [clave,valor],
          index
        ) => {
          
          return (
          <Grid2 key={index} xs={"auto"} >
            <TypeFieldInput
            
            name={clave}
            value={clave}
            label={valor}
            value_boolean={state[clave]}
            error={{}}
            onChange={handleChangeChecked}
            typefieldInput='checkBox'
            disabled={disabled}

          />
          </Grid2>
          )
         
          }
      )}
        
      </Grid2>
    </>
  );
}


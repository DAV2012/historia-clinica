
import { Checkbox, InputAdornment, TextField, styled as muiStyled } from "@mui/material";
import { colorSecondary400 } from "../../globalStyle/variables";

import { PatternFormat } from "react-number-format";
import "./styled.css"





export const StyledTextField = muiStyled(TextField)`
    .MuiFormLabel-root{
      font-size: 15px;
    }
    .MuiInputBase-root{
      margin: 10;
      font-size: 12px;
      font-weight: 600;
      color:${colorSecondary400};
    }
`;

const StyleCheckBox = muiStyled(Checkbox)`
  &.MuiButtonBase-root.MuiCheckbox-root{
    padding: 0;
  }
`

////telefono


export default function NumericFieldTelefono({disabled, label,value, type,onChange,name,handleBlur, handleSubmit,error}) {
  
  const handleChange =(e)=>{
    
    
    const amountWithDollarSign = e.target.value;
    const amountWithoutDollarSign = amountWithDollarSign.replace(/[\$\(\)\s]/g, ""); // Eliminar el símbolo de dólar y la coma
    const parsedAmount = parseFloat(amountWithoutDollarSign).toFixed(0);
    const data = {
      [name]: parsedAmount,
    };
    onChange(data);
    handleBlur(data)
  }
  return (  
    <PatternFormat
    name={name}
    customInput={StyledTextField}
    label={label}
    value={value}
    disabled={disabled}
    format="(###) #### ###"
    variant="standard"
    onChange={(e)=>handleChange(e)}
    onBlur={(e)=>handleChange(e)} 
    onSubmit={handleSubmit}
    error={error[name] && true}
    helperText={error[name]}
    InputLabelProps={{
      shrink: true,
    }}
  />
   
  )
  
}



import { TextField as MuiTextField, styled as muiStyled } from "@mui/material";

import { colorSecondary400 } from "../../globalStyle/variables";

import "dayjs/locale/es";
import "./styled.css"



export const StyledTextField = muiStyled(MuiTextField)`
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

export default function TextField({disabled,label,type,value,onChange,name,handleBlur, handleSubmit,error,multiline}){

    return (
      <StyledTextField
        name={name}
        variant="standard"
        label={label}
        type={type}
        multiline={multiline}
        value={value}
        onChange={onChange}
        onBlur={handleBlur} 
        onSubmit={handleSubmit}
        error={error[name] && true}
        helperText={error[name]}
        disabled={disabled}
        InputLabelProps={{
          shrink: true,
        }}
      />
    );
  
}

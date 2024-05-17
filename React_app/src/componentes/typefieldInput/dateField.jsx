
import {
  DatePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer} from "@mui/x-date-pickers/internals/demo";
import { styled as muiStyled } from "@mui/material";

import dayjs from "dayjs";
import { colorSecondary400 } from "../../globalStyle/variables";
import "dayjs/locale/es";
import "./styled.css";
import { useState } from "react";

const StyleDatePicker = muiStyled(DatePicker)`
      flex-grow:1;
      .MuiStack-root>.MuiStack-root{
        overflow:hidden !important;
      }
      &.MuiTextField-root {
        min-width: initial;  
        & .MuiInputBase-root {
          font-size: 12px;
          color: ${colorSecondary400};
          font-weight: 600;
          width: 100%;
        }
      }
      .MuiButtonBase-root.MuiIconButton-root{
        margin: 0;
      }
    
    `;

export function DateField({
  disabled,
  label,
  value,
  onChange,
  name,
  handleBlur,
  handleSubmit,
  error,
}) {

  const[errorDate, setErrorDate]=useState("")

  const validarCampo =(value, context)=>{
    if(value){
      const date = {
        [name]: !context ? value.format("YYYY-MM-DD"):null,
      };
      onChange(date)
      handleBlur(date)
    }

  }
  


// Convert the dayjs instance to a JavaScript Date object
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
      <DemoContainer components={["DateField"]}>
        <StyleDatePicker       
          label={label}
          disabled={disabled}
          handleSubmit={handleSubmit}
          onAccept={(value)=>validarCampo(value)}         
          className="Personal"
          value={dayjs(value,"YYYY-MM-DD")}
                
          slotProps={{
            textField: { 
              name:name,
              variant: "standard" ,
              helperText:error[name],          
              error:error[name] && true,
              onBlur: !errorDate  ? handleBlur:undefined,
              
            },
            stack: {
              direction: "row",
              alignItems: "stretch",
              
            },
          }}
          format="YYYY-MM-DD"
          onChange={(value,context) => {
            validarCampo(value,context.validationError)
            
          }} 
          onError={(error,value)=>setErrorDate(error)}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

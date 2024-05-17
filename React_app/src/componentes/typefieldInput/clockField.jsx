import {
  LocalizationProvider,
  TimePicker,
  renderTimeViewClock,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer} from "@mui/x-date-pickers/internals/demo";
import { styled as muiStyled } from "@mui/material";
import dayjs from "dayjs";
import { colorSecondary400 } from "../../globalStyle/variables";
import {  useState } from "react";
import "dayjs/locale/es";
import "./styled.css";
import "./styled.css";



const StyleTimePicker = muiStyled(TimePicker)`
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


export function ClockField({
  disabled,
  label,
  onChange,
  name,
  value,
  handleBlur,
  handleSubmit,
  error,
}) {

  const[errorDate, setErrorDate]=useState("")

  const validarCampo =(value, context)=>{

    const date = {
      [name]: !context ? value.format("hh:mm A"):"Invalid Date",
    };
    onChange(date)
    handleBlur(date)
  }

  
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["TimePicker"]}>
        <StyleTimePicker
          name={name}
          label={label}
          handleSubmit={handleSubmit}
          disabled={disabled}
          className="Personal"
          onAccept={(value)=>validarCampo(value)}
          value={dayjs(value)}
          format="hh:mm A"
          ampm
          slotProps={{
            textField: {
              name:name,
              variant: "standard",
              helperText:error[name],          
              error:error[name] && true,
              onBlur: !errorDate  ? handleBlur:undefined,
              
              


            },
            stack: {
              direction: "row",
              alignItems: "stretch",
              
            },
          }}
         
          onChange={(value,context) => {
            validarCampo(value,context.validationError)
            
          }} 
          onError={(error,value)=>setErrorDate(error)}

          viewRenderers={{
            hours: renderTimeViewClock,
            minutes: renderTimeViewClock,
            seconds: renderTimeViewClock,
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

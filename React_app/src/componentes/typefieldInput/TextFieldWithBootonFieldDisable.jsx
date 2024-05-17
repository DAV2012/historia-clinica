import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  Checkbox,
  FormControlLabel,
} from "@mui/material";

import "./styled.css"




////Currency

export default function TextFieldWithBootonFieldDisable({ disabled,label, type,value,value_boolean,name_boolean,value_vulean,onChange,name,handleBlur, handleSubmit,error }) {

  return (
  
    <FormControlLabel
    id={label}
    name={name}
    value={value}
    label={label}
    checked={value_boolean}
    onChange={onChange}
    disabled={disabled}


    control={
      <Checkbox
        name={name}
        icon={<AddCircleIcon />}
        checkedIcon={<CheckCircleIcon/>}
        disabled={disabled}
        checked={value_boolean && true}
        value ={value_boolean}
        onChange={(e)=>{
          const data = {
            [name_boolean]:(e.target.checked)
          }
          onChange(data)
        }}   
      />
    }
  />
  );
}

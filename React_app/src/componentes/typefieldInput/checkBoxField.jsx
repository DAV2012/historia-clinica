
import FormControlLabel from "@mui/material/FormControlLabel";
import {

  Checkbox, Typography,

} from "@mui/material";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {

  colorPrimary50,
  colorPrimary500,

} from "../../globalStyle/variables";
import "./styled.css";
import { red } from "@mui/material/colors";


export default function CheckBoxField({
  disabled,
  label,
  name,
  value,
  onChange,
  handleBlur,
  value_boolean,
}) {
  return (
    <FormControlLabel
      id={value}
      name={name}
      value={value}
      label={label}
      checked={value_boolean}
      onChange={onChange}
      onBlur={handleBlur}
      disabled={disabled}
      
      sx={{
        borderRadius:5,
        backgroundColor:value_boolean ? colorPrimary500:colorPrimary50,
        color:"secundary",
        padding:'0 10px 0 0',

      }}
      InputLabelProps={{
        shrink: true,

              
      }}
      slotProps ={{
        typography:{
          color:value_boolean ? colorPrimary50:colorPrimary500
        }
      }}

      

      control={
        <Checkbox
          icon={<AddCircleIcon />}
          checkedIcon={<CheckCircleIcon    
          sx={{
            borderRadius:5,
            backgroundColor:value_boolean ? colorPrimary500:colorPrimary50,
            color: value_boolean ? colorPrimary50:colorPrimary500,
          }}/>}

        />
      }
      
    />
  );
}

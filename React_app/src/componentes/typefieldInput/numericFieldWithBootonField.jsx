import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import {
  Box,
  Checkbox,
  TextField as MuiTextField,
  styled as muiStyled,
} from "@mui/material";
import { colorSecondary400 } from "../../globalStyle/variables";
import { NumericFormat } from "react-number-format";
import "./styled.css"

const StyledTextField = muiStyled(MuiTextField)`

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
    margin-right: 9px;;
  }
`;

////Currency

export default function NumericFieldWithBootonField({disabled, label, type,value,value_boolean,onChange,name,name_boolean,handleBlur, handleSubmit,error}) {

  const handleChange =(e)=>{
    
    const amountWithDollarSign = e.target.value;
    const amountWithoutDollarSign = amountWithDollarSign.replace(/\$|,/g, ""); // Eliminar el símbolo de dólar y la coma
    const parsedAmount = parseFloat(amountWithoutDollarSign).toFixed(2);
    const data = {
      [e.target.name]: parsedAmount,
    };
    onChange(data);
    
  }
  return (
    <Box sx={{ display: "flex", alignItems: "flex-end"}}>
      <StyleCheckBox
        name={name_boolean}
        disabled={disabled}
        icon={<CheckCircleOutlineIcon />}
        checkedIcon={<CheckCircleIcon />}
        checked={value_boolean && true}
        value ={value_boolean}
        onChange={(e)=>{
          const data = {
            [name_boolean]:(e.target.checked)
          }
          onChange(data)
        }}
      />
      <NumericFormat
       name={name}
        value={value}
        customInput={StyledTextField}
        label={label}
        thousandSeparator={true}
        prefix={type === "currency" ? "$" : ""}

        decimalScale={2}
        allowNegative={false}
        variant="standard"
        onChange={handleChange}
        onBlur={handleBlur} 
        onSubmit={handleSubmit}
        error={error[name] && true}
        helperText={error[name]}
        disabled={disabled}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Box>
  );
}

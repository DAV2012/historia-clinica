import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import {
  Box,
  Checkbox,
  TextField as MuiTextField,
  styled as muiStyled,
} from "@mui/material";
import { colorSecondary400 } from "../../globalStyle/variables";
import "./styled.css";

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

export default function TextFieldWithBootonField({
  disabled,
  label,
  type,
  value,
  value_boolean,
  onChange,
  name,
  handleBlur,
  handleSubmit,
  error,
  name_boolean,
}) {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
      <StyleCheckBox
        name={name_boolean}
        icon={<CheckCircleOutlineIcon />}
        checkedIcon={<CheckCircleIcon />}
        checked={value_boolean && true}
        value ={value_boolean}
        disabled={disabled}
        onChange={(e)=>{
          const data = {
            [name_boolean]:(e.target.checked)
          }
          onChange(data)
        }}
      />
      <StyledTextField
        name={name}
        value={value}
        id={label}
        label={label}
        variant="standard"
        type={type}
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
    </Box>
  );
}

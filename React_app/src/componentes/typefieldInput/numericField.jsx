import {
  TextField,
  styled as muiStyled,
} from "@mui/material";
import { colorSecondary400 } from "../../globalStyle/variables";
import { NumericFormat } from "react-number-format";
import "./styled.css";

export const StyledTextField = muiStyled(TextField)`
    .MuiFormLabel-root{
      font-size: 15px;
    }
    .MuiInputBase-root{
      margin: 10;
      font-size: 12px;
      font-weight: 600;
      color:${colorSecondary400};
      width: 100%;
    }
`;


////Currency

export default function NumericField({
  disabled,
  label,
  value,
  type,
  onChange,
  name,
  handleBlur,
  handleSubmit,
  error,
}) {
  const handleChange = (e) => {


    const amountWithDollarSign = e.target.value;
    const amountWithoutDollarSign = amountWithDollarSign.replace(/\$|,/g, ""); // Eliminar el símbolo de dólar y la coma
    const parsedAmount = parseFloat(amountWithoutDollarSign);
    const data = {
      [e.target.name]: parsedAmount,
    };
    onChange(data);
    handleBlur(data)
  };
  return (
    <NumericFormat
      name={name}
      customInput={StyledTextField}
      label={label}
      value={value}
      disabled={disabled}
      thousandSeparator={true}
      prefix={type === "currency" ? "$" : ""}
      decimalScale={2}
      allowNegative={false}
      variant="standard"
      onChange={handleChange}
      onSubmit={handleSubmit}
      error={error[name] && true}
      helperText={error[name]}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
}

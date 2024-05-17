import {
  Chip,
  Typography,
  styled as muiStyled,
} from "@mui/material";
import { colorPrimary50 } from "../../globalStyle/variables";
import { NumericFormat } from "react-number-format";
import "./styled.css"


export const StyledChip = muiStyled(Chip)`
  background-color:${({ estado }) =>
    estado === "PENDIENTE" ? "#e77779" : colorPrimary50};
  color:${({ estado }) => estado === "PENDIENTE" ? "#fff":'#606060'};
  font-size: 12px;
  font-weight: 600;
`;

export default function ChipCurrencyFiel({disabled, label, estado,type,onChange,name,handleBlur, handleSubmit,error }) {
  return (
    <StyledChip
    name={name}
    estado={estado}
    disabled={disabled}
    label={
      <NumericFormat
          name={name}
          customInput={Typography}
          thousandSeparator={true}
          prefix={type === 'currency' ? "$" : ''}
          decimalScale={2}
          displayType="text"
          value={label}
          onChange={onChange}
      />
    
    }
    variant="standard"
  />
  )
}

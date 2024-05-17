import {
  Chip,
  styled as muiStyled,
} from "@mui/material";
import { colorPrimary50 } from "../../globalStyle/variables";
import "./styled.css";

export const StyledChip = muiStyled(Chip)`
  background-color:${({ estado }) => estado  ? "#e77779" : colorPrimary50};
  color:${({ estado }) => estado  ? "#fff" : "#606060"};
  font-size: 14;
  font-weight: 700;
  margin: 0.3rem;

`;
export default function ChipsField({ disabled,label, estado,onChange,name,handleBlur, handleSubmit }) {

  return (
    <StyledChip
      name={name}
      estado={estado}
      label={label}
      color="secondary"
      size="small"
      onChange={onChange}
      disabled={disabled}
    />
  );
}

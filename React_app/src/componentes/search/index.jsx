import SearchIcon from "@mui/icons-material/Search";
import { InputBase, Paper, useMediaQuery } from "@mui/material";
import { styled as muiStyled } from "@mui/material/styles";

const Search = muiStyled(Paper)`
// Estilos para la barra de navegación lateral
box-sizing: border-box;
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem;
gap:1rem;

`;

export default function SearchBasic({
  setItemSelecIdComponent,
}) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <Search elevation={2} sx={{ width: isMobile ? "inherit" : "300px" }}>
      <InputBase
        startAdornment={
          <SearchIcon
            color="primary"
            sx={{ fontSize: "1.5rem", paddingRight: "1rem" }}
          />
        }
        fullWidth
        placeholder="Buscar por documento..."
        inputProps={{ "aria-label": "search" }}
        onChange={(e) => setItemSelecIdComponent(e.target.value)}
      />
    </Search>
  );
}

import { createTheme } from "@mui/material";
import {  colorPrimary50, colorPrimary500, colorSecondary400,colorSecondary50,fontFamily} from "./variables";
import { Subtitles } from "@mui/icons-material";
import { lime, purple } from "@mui/material/colors";



const theme = createTheme({
  palette: {
    primary: {
      main:colorPrimary500,
      contrastText:colorPrimary50
    },
    secondary: {
      main:colorSecondary400,
      contrastText:colorSecondary50
    },

  },
  typography: {
    fontFamily: 'Poppins',
    h2: {
      fontSize: '0.75rem',
      color:colorPrimary500,
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: '0.75rem',
      fontWeight: 600,
    },
    subtitle2: {
      fontSize: '0.75rem',
      color:colorPrimary500,
      fontWeight: 600,
    },
    body1: {
      fontSize: '0.75rem',
      color:colorPrimary500,
      fontWeight: 300,
    }

  },

});
    


export default theme
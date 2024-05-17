import { Box, SpeedDial, SpeedDialIcon, ThemeProvider } from "@mui/material";
import Schedule from "../componentes/schedule";
import { DataProvider } from "../contexts/FirebaseProvider";
import theme from "../globalStyle/globalStyled-mui";
import { NotificationProvider } from "../contexts/NotificationContext";
import Loging from "../componentes/loging";


export default function ViewLoging() {
  return (
    <ThemeProvider theme={theme}>
      
        <NotificationProvider>
          <Loging/>
        </NotificationProvider>
      
    </ThemeProvider>
  );
}

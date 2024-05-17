import { Box, SpeedDial, SpeedDialIcon, ThemeProvider } from "@mui/material";
import Schedule from "../componentes/schedule";
import { DataProvider } from "../contexts/FirebaseProvider";
import theme from "../globalStyle/globalStyled-mui";
import { NotificationProvider } from "../contexts/NotificationContext";


export default function ViewAgenda() {
  return (
    <ThemeProvider theme={theme}>
        <NotificationProvider>
          <Schedule />
        </NotificationProvider>
    </ThemeProvider>
  );
}

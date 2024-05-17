import React, { useContext, useEffect, useState } from "react";
import { DataProvider } from "../contexts/FirebaseProvider";
import theme from "../globalStyle";
import {
  ThemeProvider,
  alpha,
  styled as muiStyled,
} from "@mui/material/styles";

import DatosGenerales from "../componentes/datosGenerales";
import { NotificationProvider } from "../contexts/NotificationContext";

export default function ViewDatos() {
  return (
    <ThemeProvider theme={theme}>
      
        <NotificationProvider>
          <DatosGenerales />
        </NotificationProvider>
      
    </ThemeProvider>
  );
}

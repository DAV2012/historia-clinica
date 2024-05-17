import React, { useContext, useEffect, useState } from "react";
import { DataProvider } from "../contexts/FirebaseProvider";
import theme from "../globalStyle";
import {
  ThemeProvider,
  alpha,
  styled as muiStyled,
} from "@mui/material/styles";
import Paciente from "../componentes/paciente";
import { NotificationProvider } from "../contexts/NotificationContext";

export default function ViewPaciente() {
  return (
    <ThemeProvider theme={theme}>
      
        <NotificationProvider>
          <Paciente />
        </NotificationProvider>
      
    </ThemeProvider>
  );
}

import React, { useContext, useEffect, useState } from "react";
import { DataProvider } from "../contexts/FirebaseProvider";
import theme from "../globalStyle";
import {
  ThemeProvider,
  alpha,
  styled as muiStyled,
} from "@mui/material/styles";

import Dashboard from "../componentes/Dashboard";
import { NotificationProvider } from "../contexts/NotificationContext";
import BasicDrawer from "../componentes/Drawer";
import { CircularProgress } from "@mui/material";

export default function ViewDashboard() {
  return (
    <ThemeProvider theme={theme}>
      
      <NotificationProvider>
        <Dashboard />
        </NotificationProvider>
      
    </ThemeProvider>
  );
}

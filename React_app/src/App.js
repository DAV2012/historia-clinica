import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import GlobalStyle from './globalStyle';
import theme from './globalStyle/globalStyled-mui';
import { ThemeProvider } from '@mui/material';
import ViewAgenda from './routes/view-agenda';
import ViewDatos from './routes/view-data';
import ViewPaciente from './routes/view-paciente';
import ViewLoging from './routes/view-loging';
import { FirebaseContext } from './contexts/FirebaseContext';
import './index.css';
import ViewDashboard from './routes/view-dashboard';
import PDFViewerComponent from './routes/view-pdf';


function App() {
  const { isAuthenticated } = useContext(FirebaseContext);

  
  return (
    <React.StrictMode>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<ViewLoging />} />
            <Route path="/pdf" element={<PDFViewerComponent />} />

            <Route
              path="/dashboard"
              element={isAuthenticated ? <ViewDashboard /> : <Navigate to="/" />}
            />
            <Route
              path="/datos"
              element={isAuthenticated ? <ViewDatos /> : <Navigate to="/" />}
            />
            <Route
              path="/paciente"
              element={isAuthenticated ? <ViewPaciente /> : <Navigate to="/" />}
            />
            <Route
              path="/agenda"
              element={isAuthenticated ? <ViewAgenda /> : <Navigate to="/" />}
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;

import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { DataProvider } from './contexts/FirebaseProvider';
import BasicDrawer from './componentes/Drawer';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
   
    <DataProvider>
        <App />
    </DataProvider>
  </React.StrictMode>,
);

reportWebVitals();
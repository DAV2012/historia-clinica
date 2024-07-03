import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Backdrop, Box, Button, CircularProgress, FormControl, IconButton, Input, InputAdornment, InputLabel, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../../contexts/FirebaseContext";
import { useNavigate } from "react-router-dom";

function sleep(delay = 0) {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
  }


export default function Loging() {

    const {
        getAuth,
        isAuthenticated,
        setIsAuthenticated

    }=useContext(FirebaseContext)



    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [openBackdrop, setOpenBackdrop] = useState(false);

    

  const navigate = useNavigate();

    


    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();

    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes realizar la lógica de autenticación o enviar los datos al servidor
        setOpenBackdrop(true);

        const userData = {
            login:username,
            clave:password
          };
          
          
          getAuth(userData)
          .then(data => {
              // Aquí puedes trabajar con los datos de la respuesta
              setIsAuthenticated(true);
              sessionStorage.setItem('jwtToken', data.jwTtoken);
          })
          .then(() => {           
            sleep(1500).then(() => {
              setOpenBackdrop(false);
              navigate("/datos")
            });
          })
          .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            setIsAuthenticated(false);
            setOpenBackdrop(false);
          });
    
      };



      return (
        <Box
          display="flex"
          flexDirection="column"
          minHeight="100vh"
          justifyContent="center"
          alignItems="center"
        >
          <Backdrop
            open={openBackdrop}
            sx={{ color: "#fff", backgroundColor: "rgba(0, 0, 0, 0.25)" }}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
          <Paper
            elevation={3}
            sx={{ p: 4, width: "300px", textAlign: "center" }}
          >
            <Typography variant="h4" gutterBottom>
              Iniciar sesión
            </Typography>
            <form onSubmit={handleSubmit}>
              <FormControl fullWidth variant="standard" sx={{ mb: 2 }}>
                <InputLabel
                  htmlFor="standard-adornment-user"
                  style={{ fontSize: "16px" }}
                >
                  Usuario
                </InputLabel>
                <Input
                  id="standard-adornment-user"
                  type="text"
                  autoComplete="username"
                  onChange={(e) => setUsername(e.target.value)}
                  style={{ fontSize: "18px" }}
                />
              </FormControl>
              <FormControl fullWidth variant="standard" sx={{ mb: 2 }}>
                <InputLabel
                  htmlFor="standard-adornment-password"
                  style={{ fontSize: "16px" }}
                >
                  Contraseña
                </InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  style={{ fontSize: "18px" }}
                />
              </FormControl>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Ingresar
              </Button>
            </form>
          </Paper>
        </Box>
      );
}
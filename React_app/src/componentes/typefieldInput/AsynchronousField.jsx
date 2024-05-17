import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import {
  Fragment,
  useContext,
  useEffect,
  useState,
} from "react";
import "./styled.css";
import {
  styled as muiStyled,
} from "@mui/material";

import { colorSecondary400 } from "../../globalStyle/variables";
import { FirebaseContext } from "../../contexts/FirebaseContext";
import { servicesObjet } from "../help";

export const StyledTextField = muiStyled(TextField)`
  .MuiAutocomplete-root{
    width: auto;
  }
  .MuiFormLabel-root{
    font-size: 15px;
  }
  .MuiInputBase-root{
    margin: 10;
    font-size: 12px;
    font-weight: 600;
    color:${colorSecondary400};
    
  }
`;

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default function AsynchronousField({
  disabled,
  label,
  value,
  onChange,
  name,
  handleBlur,
  error,
}) {
  const {
    getPacienteDocumento,
  } = useContext(FirebaseContext);

  const [open, setOpen] = useState(false);
  const [valor, setValue] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(undefined);


  useEffect(() => {
    let active = true;

    if (inputValue === "") {
      setOptions(valor ? [valor] : []);
      return undefined;
    }

    if (inputValue) {
      setLoading(true);
      getPacienteDocumento(inputValue)
        .then((respuesta) => {
          if (respuesta && !respuesta["error"]) {
            const arrayDocumentos = respuesta.content.map(
              (item) => item.documentodouble
            );
            const data = respuesta.content;

            return { arrayDocumentos, data };
          } else {
            const arrayDocumentos = [];
            const data = [];

            return { arrayDocumentos, data };
          }
        })
        .then(({ arrayDocumentos, data }) => {
          // Simulación de carga asíncrona con sleep
          sleep(1000).then(() => {
            if (active && data) {
              setOptions(arrayDocumentos);
              setLoading(false);
            }
          });
        });
    }

    return () => {
      active = false;
    };
  }, [inputValue, valor, getPacienteDocumento]);

  useEffect(() => {
    if (open && options.length === 0) {
      setLoading(true);
    }
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const handleChange = (value, reason) => {

    if (!disabled) {
      if (reason === "selectOption") {
        getPacienteDocumento(value)
        .then((respuesta) => {
          if (respuesta) {
            onChange(respuesta.content[0]);
          }
        });
      }
      if (reason === "clear") {
        onChange(servicesObjet.inicialPaciente);
      }

    }
  };

  const handleChangeInput =(value,reason)=>{
    if (reason === "input") {
      const date = {
        [name]: value,
      };
      onChange(date);
    }
  }

  return (
    <Autocomplete
      id="google-map-demo"
      name={name}
      options={options}
      value={value}
      freeSolo
      onBlur={handleBlur}
      disabled={disabled}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
        handleChangeInput(inputValue, "input")
      }}
      getOptionLabel={(option) =>
        typeof option === "string" ? option : "No hay documentos"
      }
      onChange={(event, newValue, reason) => {
        // setOptions(newValue ? [newValue, ...options] : options);
        handleChange(newValue, reason);
      }}
      onInputChange={(event, newInputValue, reason) => {
        setInputValue(newInputValue);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          name={name}
          label={label}
          variant="standard"
          // value={valor}
          error={error[name] && true}
          helperText={error[name]}
          disabled={disabled}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </Fragment>
            ),
          }}
        />
      )}
    />
  );
}

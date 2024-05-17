import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import "./styled.css";


export default function AutocompleteField({
  disabled,
  options,
  label,
  value,
  onChange,
  name,
  handleBlur,
  error,
}) {
 

  const handleChange = (value, reason) => {
      if(!disabled){
        if (reason === "clear") {
          const date = {
            [name]: "",
          };
          onChange(date);
        } else {
          const date = {
            [name]: value,
          };
          onChange(date);
        }
      }
  };

  return (
    <Autocomplete
      value={value ?? ``}
      options={options}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      disabled={disabled}
      onInputChange={(event, newInputValue) => {
        
        handleChange(newInputValue);
      }}
      onBlur={handleBlur}
      renderInput={(params) => (
        <TextField
          {...params}
          name={name}
          label={label}
          value={value}
          variant="standard"
          error={error[name] && true}
          helperText={error[name]}
          InputLabelProps={{
            shrink: true,
          }}
        />
      )}
    />
  );
}

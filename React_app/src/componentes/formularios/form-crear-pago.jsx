
import TypeFieldInput from "../typefieldInput";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { servicesObjet } from "../help";

export default function FormCrearPago({
  listDataBD,
  handleChange,
  handleBlur,
  handleSubmit,
  error,
}) {
  return (
    <>
      <form action="" method="post">
        <Grid2 container spacing={2} xs={12}>
          {Object.values(servicesObjet.objetoPago).map(
            (
              {
                label,
                typeValueInput,
                typefieldInput,
                value,
                value_boolean,
                inicialvalue,
                option,
                disabled,
              },
              index
            ) => {
              return (
                <Grid2 xs={6} key={index}>
                  <TypeFieldInput
                    key={index}
                    name={value}
                    label={label}
                    typeValueInput={typeValueInput}
                    typefieldInput={typefieldInput}
                    value={listDataBD[value] ? listDataBD[value] : ``}
                    name_boolean={value_boolean}
                    value_boolean={listDataBD[value_boolean]}
                    option={option}
                    onChange={handleChange}
                    handleBlur={handleBlur}
                    handleSubmit={handleSubmit}
                    error={error}
                    disabled={disabled}
                  />
                </Grid2>
              );
            }
          )}
        </Grid2>
      </form>
    </>
  );
}

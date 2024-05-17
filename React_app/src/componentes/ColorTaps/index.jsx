import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import TypeFieldInput from "../typefieldInput";
import { useCommaDivider } from "../hooks/useCommaDivider";
import { Box, useMediaQuery } from "@mui/material";

export default function ColorTabs({ listDataBD, objetoTabs }) {
  const { categorias: categoriaEnfermedades } = useCommaDivider(
    "enfermedades_text",
    listDataBD.enfermedades_text,
    listDataBD.enfermedades_text
  );

  const { categorias:categoriacomonosconoce } = useCommaDivider(
    "comonosconoce",
    listDataBD.comonosconoce,
    listDataBD.comonosconoce,
  );
  const { categorias:motivo_consulta } = useCommaDivider(
    "motivo_consulta",
    listDataBD.motivo_consulta,
    listDataBD.motivo_consulta,
  );

  const [value, setValue] = useState("paciente");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <>
      <Tabs 
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        sx={{ marginBottom: "2rem", "& .MuiTabs-flexContainer":{justifyContent:"space-between"} }}
        
        
      >
        <Tab value={"paciente"} label="Paciente" />
        <Tab value={"enfermedades"} label="Enfermedades" />
        <Tab value={"motivoConsulta"} label="motivoConsulta" />
        <Tab value={"Info Medica"} label="Info Medica" />
        <Tab value={"Examen fisico"} label="Examen fisico" />
        <Tab value={"Medidas"} label="Medidas" />

      </Tabs>

      {value === "paciente" && (
        <Grid2 container  xs={12} alignItems="flex-end" spacing={2} padding={!isMobile?"0 3rem 2rem 3rem":"0 0 0 1rem"} boxSizing={"border-box"}>
          {Object.values(objetoTabs.informacionPersonal).map(
            (
              { label, typefieldInput, value, value_boolean, option },
              index
            ) => {
              return (
                <Grid2 xs={12} sm={2}  key={index}>
                  <TypeFieldInput
                    name={value}
                    label={label}
                    typefieldInput={typefieldInput}
                    value={listDataBD[value]}
                    name_boolean={value_boolean}
                    onChange={onchange}
                    option={option}
                    error={{}}
                    disabled={true}
                  />
                </Grid2>
              );
            }
          )}
        </Grid2>
      )}
      {value === "enfermedades" && (
        <Grid2 container spacing={0} justifyContent={'center'} padding={"1rem"}>
          {Object.values(categoriaEnfermedades).map((value, index) => {
            return (
              <Grid2   key={value}>
                <TypeFieldInput
                  key={value}
                  name={value}
                  label={value}
                  typefieldInput={"chip"}
                  estado={{}}
                />
              </Grid2>
            );
          })}
        </Grid2>
      )}
      {value === "motivoConsulta" && (
        <Grid2 container spacing={0} justifyContent={'center'} padding={"1rem"}>
          {Object.values(motivo_consulta).map((value, index) => {
            return (
              <Grid2   key={value}>
                <TypeFieldInput
              
                  name={value}
                  label={value}
                  typefieldInput={"chip"}
                  estado={{}}
                />
              </Grid2>
            );
          })}
        </Grid2>
      )}
    

      {value === "Info Medica" && (
        <Grid2 container spacing={2} xs={12} alignItems="flex-end" padding={"1rem"}>
          {Object.values(objetoTabs.informacionMedica).map(
            (
              { label, typefieldInput, value, value_boolean, option },
              index
            ) => {
              
              return (
                <Grid2  xs={12} sm={4} md={2} key={index}>
                  <TypeFieldInput
                    id={value}
                    name={value}
                    label={label}
                    typefieldInput={typefieldInput}
                    value={listDataBD[value]}
                    name_boolean={value_boolean}
                    value_boolean={listDataBD[value_boolean]}
                    option={option}
                    error={{}}
                    disabled={true}
                  />
                </Grid2>
              );
            }
          )}
        </Grid2>
      )}
      {value === "Examen fisico" && (
        <Grid2 container spacing={2} xs={12} alignItems="flex-end" padding={"1rem"}>
          {Object.values(objetoTabs.examenFisico).map(
            (
              { label, typefieldInput, value, value_boolean, option },
              index
            ) => {
              return (
                <Grid2  xs={12} sm={4} md={2} key={index}>
                  <TypeFieldInput
                    name={value}
                    label={label}
                    typefieldInput={typefieldInput}
                    value={listDataBD[value]}
                    name_boolean={value_boolean}
                    value_boolean={listDataBD[value_boolean]}
                    option={option}
                    error={{}}
                    disabled={true}
                  />
                </Grid2>
              );
            }
          )}
        </Grid2>
      )}
      {value === "Medidas" && (
        <Grid2 container spacing={2} xs={12} alignItems="flex-end" padding={"1rem"}>
          {Object.values(objetoTabs.medidas).map(
            (
              { label, typefieldInput, value, value_boolean, option },
              index
            ) => {
              return (
                <Grid2  xs={12} sm={4} md={2} key={index}>
                  <TypeFieldInput
                    name={value}
                    label={label}
                    typefieldInput={typefieldInput}
                    value={listDataBD[value]}
                    name_boolean={value_boolean}
                    value_boolean={listDataBD[value_boolean]}
                    option={option}
                    error={{}}
                    disabled={true}
                  />
                </Grid2>
              );
            }
          )}
        </Grid2>
      )}
    </>
  );
}

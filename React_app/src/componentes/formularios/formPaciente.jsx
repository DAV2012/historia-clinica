import {useEffect, useState } from "react";
import { Box, Button, Step, StepLabel, Stepper, useMediaQuery } from "@mui/material";
import TypeFieldInput from "../typefieldInput";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import SeccionCategorias from "../SeccionCategoria";

const steps = [
  "Informacion personal",
  "Motivo consulta",
  "Como nos conoce",
  "Enfermedades",
  "Información medica",
  "Examen Fisico",
  "Medidas",
];

export default function FormPaciente({
  listDataBD,
  objetoList,
  xs,
  handleChange,
  handleBlur,
  handleSubmit,
  error,
  services,
  activeStepinicial
}) {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(()=>{

    if(activeStepinicial> 0){
      setActiveStep(activeStepinicial)
    }else{
      setActiveStep(0)
    }
  },[activeStepinicial])


  const handleNext = () => {
    setActiveStep((prevActiveStep) => {return prevActiveStep + 1});
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => {return prevActiveStep - 1});
  };

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        sx={{ margin: "0 0 3rem 0",overflow:"hidden" }}
        
      >
     
          {!isMobile && Object.entries(steps).map(([clave, valor], index) => {

            return (
              <Step key={index}>
                <StepLabel>{valor}</StepLabel>
              </Step>
            );
          })}

        {isMobile && 
          <Step >
            <StepLabel>{steps[activeStep-1]}</StepLabel>
          </Step>
        }
        {isMobile  &&
          <Step >
            <StepLabel>{steps[activeStep]}</StepLabel>
          </Step>
        }

      </Stepper>
      <form>
        {activeStep === 0 && (
           <Grid2 container spacing={2}  xs={"auto"} alignItems={"flex-end"}>
           {Object.values(objetoList.informacionPersonal).map(
             (
               {
                 label,
                 typeValueInput,
                 typefieldInput,
                 value,
                 inicialvalue,
                 option,
                 value_boolean,
                 disabled
               },
               index
             ) => {
               return (
                 <Grid2  key={index} xs={12} sm={4} md={2}>
                   <TypeFieldInput
                     name={value}
                     label={label}
                     typeValueInput={typeValueInput}
                     typefieldInput={typefieldInput}
                     value={listDataBD[value] ? listDataBD[value]: ``}
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
        )}
        {activeStep === 1 && (
          <SeccionCategorias
            listDataBD={listDataBD}
            objetoList={objetoList.motivo_consulta.motivo_consulta}
            xs={xs}
            handleChange={handleChange}
          />
        )}
        {activeStep === 2 && (
          <SeccionCategorias
            listDataBD={listDataBD}
            objetoList={objetoList.comonosconoce.comonosconoce}
            xs={xs}
            handleChange={handleChange}
          />
        )}
        {activeStep === 3 && (
          <SeccionCategorias
            listDataBD={listDataBD}
            objetoList={objetoList.enfermedades_text.enfermedades_text}
            xs={xs}
            handleChange={handleChange}
          />
        )}
        {activeStep === 4 && (
          <Grid2 container spacing={2} xs={12} alignItems="flex-end">
            {Object.values(objetoList.informacionMedica).map(
              (
                {
                  label,
                  typeValueInput,
                  typefieldInput,
                  value,
                  value_boolean,
                  inicialvalue,
                  option,
                  disabled
                },
                index
              ) => {
   
                return (
                  <Grid2 xs={12} sm={4} md={2} key={index}>
                    <TypeFieldInput
                      name={value}
                      label={label}
                      typeValueInput={typeValueInput}
                      typefieldInput={typefieldInput}
                      value={listDataBD[value]}
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
        )}
        {activeStep === 5 && (
          <Grid2 container spacing={2} xs={12} alignItems="flex-end">
            {Object.values(objetoList.examenFisico).map(
              (
                {
                  label,
                  typeValueInput,
                  typefieldInput,
                  value,
                  value_boolean,
                  inicialvalue,
                  option,
                  disabled
                },
                index
              ) => {
   
                return (
                  <Grid2 xs={12} sm={4} md={2} key={index}>
                    <TypeFieldInput
                      name={value}
                      label={label}
                      typeValueInput={typeValueInput}
                      typefieldInput={typefieldInput}
                      value={listDataBD[value]}
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
        )}
        {activeStep === 6 && (
          <Grid2 container spacing={2} xs={12} alignItems="flex-end">
            {Object.values(objetoList.medidas).map(
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
                  multiline
                },
                index
              ) => {
   
                
                return (
                  value !== "plan" ? <Grid2 xs={12} sm={4} md={2} key={index}>
                    <TypeFieldInput
                      name={value}
                      label={label}
                      typeValueInput={typeValueInput}
                      typefieldInput={typefieldInput}
                      value={listDataBD[value]}
                      name_boolean={value_boolean}
                      value_boolean={listDataBD[value_boolean]}
                      option={option}
                      onChange={handleChange}
                      handleBlur={handleBlur}
                      handleSubmit={handleSubmit}
                      error={error}
                      disabled={disabled}
                      
                    />
                  </Grid2>:<Grid2 xs={12} sm={4} md={12} key={index}>
                  <TypeFieldInput
                      name={value}
                      label={label}
                      typeValueInput={typeValueInput}
                      typefieldInput={typefieldInput}
                      value={listDataBD[value]}
                      name_boolean={value_boolean}
                      value_boolean={listDataBD[value_boolean]}
                      option={option}
                      onChange={handleChange}
                      handleBlur={handleBlur}
                      handleSubmit={handleSubmit}
                      error={error}
                      disabled={disabled}
                      multiline
                    />
                  </Grid2>
                );
              }
            )}
          </Grid2>
        )}
      </form>
      <Box margin="4rem 0 0 0">
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mt: 1, mr: 1 }}
        >
          Atras
        </Button>
        <Button
          data-services={services}
          variant="contained"
          onClick={activeStep < steps.length ? handleNext : handleSubmit}
          sx={{ mt: 1, mr: 1 }}
          type="submit"
        >
          {activeStep === steps.length ? "Guardar" : "Continue"}
        </Button>
      </Box>
    </>
  );
}

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useContext, useEffect} from "react";
import { useForm } from "../hooks/useForm";
import { validationsForm, validationsFormSubmit } from "../../validacion";
import TypeFieldInput from "../typefieldInput";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { NotificationContext } from "../../contexts/FirebaseContext";
import { colorAnalogo600, colorPrimary50 } from "../../globalStyle/variables";

export default function ModalServices({
  openModal,
  objetoModal,
  listDataBD,
  setItemSelec,
  setData,
  handlecloseModal,
  services,
  xs,
}) {
  const {
    form,
    error,
    respose,
    loading,
    setResponse,
    handleChange,
    handleBlur,
    handleSubmit,
    setForm,
  } = useForm(validationsForm, validationsFormSubmit, objetoModal.inicialForm);
  const {     
    showNotification, 
  } =
    useContext(NotificationContext);
    
    useEffect(() => {
   
      if (openModal && listDataBD) {
        handleChange(listDataBD); 

      }
    }, [openModal, listDataBD]);
 

  useEffect(()=>{

    if(respose === "guardar"){
      
      handlecloseModal()
      setForm(null)
      showNotification(`se creo `,`Excelente`,"exitosamente la agenda","success")
    }
    if(respose === "cancel"){
      handlecloseModal()
      setForm(null)
      showNotification(`se cancelo la cracion de la agenda `,`Excelente`,"exitosamente ","warning")

    }
    if(respose === "Error"){

      showNotification(`no se creo, `,`!Error!`,"varifica que no exita errores con los datos del paciente","error")

    }

  },[respose,loading])

  
  return (
    
    <Dialog open={openModal} onClose={()=>setResponse("cancel")} fullWidth={true} >
      <DialogTitle sx={{backgroundColor:colorAnalogo600, marginBottom:"2rem"}} color={colorPrimary50}>{objetoModal.titulo}</DialogTitle>
      <DialogContent>
        <DialogContentText>{objetoModal.DialogContentText}</DialogContentText>
        <form action="" method="post">
          <Grid2 container spacing={2} xs={12} >
            {Object.values(objetoModal.arreyTextFiel).map(

              (
                {
                  label,
                  typeValueInput,
                  typefieldInput,
                  value,
                  value_boolean,
                  option,
                  disabled
                },
                index
              ) => {

                
                return (
                  <Grid2 xs={6} key={index} >
                    <TypeFieldInput
                      name={value}
                      label={label}
                      typeValueInput={typeValueInput}
                      typefieldInput={typefieldInput}
                      value={form[value]}
                      name_boolean={value_boolean}
                      option={option}
                      onChange={handleChange}
                      handleBlur={handleBlur}
                      error={error}
                      disabled={services==="crearAgenda"?false:disabled}
                      setItemSelec={setItemSelec}
                      setData={setData}
                     
                    />
                  </Grid2>
                );
              }
            )}
          </Grid2>
        </form>
      </DialogContent>
      <DialogActions>
      <Button onClick={()=>setResponse("cancel")}>Cancel</Button>
        <Button onClick={handleSubmit} data-services={services}>
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

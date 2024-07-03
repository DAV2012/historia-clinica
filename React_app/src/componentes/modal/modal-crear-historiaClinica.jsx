import Button from "@mui/material/Button";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useContext, useEffect} from "react";
import { servicesObjet } from "../help";
import { useForm } from "../hooks/useForm";
import { validationsForm, validationsFormSubmit } from "../../validacion";
import FormPaciente from "../formularios/formPaciente";
import { NotificationContext } from "../../contexts/FirebaseContext";
import { colorAnalogo600, colorPrimary50 } from "../../globalStyle/variables";




export default function ModalCrearHistoriaClinica({
  openModal,
  objetoModal,
  listDataBD,
  handlecloseModal,
  services,
  xs,
  modalSize,
  activeStepinicial

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
  } = useForm(validationsForm, validationsFormSubmit, servicesObjet.inicialHistoriaClinica);
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
      setForm(null)
      handlecloseModal()
      showNotification(`se creo `,`Excelente`,"exitosamente la agenda","success")


    }
    if(respose === "cancel"){
      setForm(null)
      handlecloseModal()
      showNotification(`se cancelo la cracion de la agenda `,`Excelente`,"exitosamente ","warning")

    }
    if(respose === "error"){
      showNotification(`no se creo, `,`!Error!`,"varifica que no exita errores con los datos del paciente","error")

    }

  },[respose,loading,handlecloseModal,setForm])

  return (
    <Dialog open={openModal} onClose={()=>setResponse("cancel")} maxWidth={modalSize}>

      <DialogTitle sx={{backgroundColor:colorAnalogo600, marginBottom:"2rem"}} color={colorPrimary50}>{objetoModal.titulo}</DialogTitle>
      <DialogContent >
        <DialogContentText>{objetoModal.DialogContentText}</DialogContentText>
            <FormPaciente
              listDataBD={form}
              objetoList={objetoModal.arreyTextFiel}
              xs={xs}
              handleChange={handleChange}
              handleBlur={handleBlur}
              handleSubmit={handleSubmit}
              error={error}
              services={services}
              activeStepinicial={activeStepinicial}
            />
      </DialogContent>
      <DialogActions>
      <Button onClick={()=>setResponse("cancel")}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}

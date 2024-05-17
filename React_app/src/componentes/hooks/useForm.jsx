import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FirebaseContext, NotificationContext } from "../../contexts/FirebaseContext.js";
import dayjs from "dayjs";

export const useForm = (
  validationsForm,
  validationsFormSubmit,
  inicialform
) => {
  const {
    createAgenda,
    putAgenda,
    createHistoriaClinica,
    CrarPaciente,
    crateFactura,
    putFactura,
    putHistoriaClinica,
    putPago,
    createPago,
    putPaciente,
  } = useContext(FirebaseContext);

  const {     
    showNotification, 
  } =
    useContext(NotificationContext);

  const [form, setForm] = useState(inicialform);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [respose, setResponse] = useState("");

  useEffect(() => {
    setResponse("");
  }, [respose]);

  const handleChange = (e) => {
    if (e.target) {
      const { name, value } = e.target;

      // Verificar si el campo 'name' existe en 'form'
      if (form.hasOwnProperty(name)) {
        const valorUper = name !== "correo_email" ? value.toUpperCase():value
        setForm((prevForm) => ({
          ...prevForm,
          [name]: valorUper,
        }));
      }
    } else {
      Object.entries(e).forEach(([name, value]) => {
        // Verificar si el campo 'name' existe en 'form'

        if (form.hasOwnProperty(name)) {
          setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
          }));
        }
      });
    }
  };

  const handleBlur = (e, services) => {
    const targetName = e.currentTarget

    if (e.target && targetName !=="crearAgenda") {
      const { name, value } = e.target;
      const validationErrors = validationsForm(name, value, error);
      setError(validationErrors);
    } else {
      Object.entries(e).forEach(([name, value]) => {
        const validationErrors = validationsForm(name, value, error);
        setError(validationErrors);
      });
    }
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    const targetName = e.target.dataset.services;


     const errors = validationsFormSubmit(form);

    
  
    if (Object.keys(errors).length === 0) {
      try {
       
        let response = null;
  
        switch (targetName) {
          case "crearAgenda":
            response = await createAgenda(form);
            break;
  
          case "editarAgenda":

            response = await putAgenda(form);
            break;
  
          case "crearHistoriaClinica":
            response = await createHistoriaClinica({
              ...form,
              fachadate: dayjs().format("YYYY-MM-DD")
            });
            break;
  
          case "crearPaciente":
            if (!form.idpaciente) {
              const data = {
                ...form,
                idpaciente: uuidv4(),
                fachadate: dayjs().format("YYYY-MM-DD")
              };
              response = await CrarPaciente(data);
            } else {
              setResponse("error");
            }
            break;
  
          case "crearFactura":
            response = await crateFactura({
              ...form,
              facturadate: dayjs().format("YYYY-MM-DD")
            });
            break;
  
          case "editarFactura":
            response = await putFactura(form);
            break;
  
          case "editarHistoriaClinica":
            response = await putHistoriaClinica(form);
            break;
  
          case "editarPago":
            response = await putPago(form);
            break;
          case "pagosFactura":
            response = await putPago(form);
            break;
          case "editarPaciente":
            response = await putPaciente(form);
            break;
  
          case "crearPago":
            const data = {
              ...form,
              idfactura: e.target.id,
              id: "",
              codigo_pago_text: e.target.dataset.codigofactura,
              fechadate: dayjs().format("YYYY-MM-DD")
            };
            response = await createPago(data);
            break;
  
          default:
            throw new Error(`Tipo de servicio desconocido: ${targetName}`);
            
        }
  
        if (response !== null) {
          setResponse("guardar");
        }
      } catch (error) {
        showNotification(
          `Ocurrió un error inesperado`,
          `Error`,
          error.message,
          "error"
        );
        
      }
    } else {
      setError(errors);
    }
  
    setLoading(false);
  };
  

  return {
    form,
    setForm,
    error,
    loading,
    setLoading,
    setResponse,
    respose,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};

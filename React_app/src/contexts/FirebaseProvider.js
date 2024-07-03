import {  useState } from "react";
import { FirebaseContext } from "./FirebaseContext";
import { apiDelete, apiGet, apiPost, apiPut} from "../apiUtils/apiUtils";



const DataProvider = ({ children }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);


  const getAuth = async (form) => {

      try {
        return await fetch("/api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
          
        })
        .then((response) => {
          return response.json()})
    } catch (err) {
        
    }

  }



  const getAgendaDate = async(fechaInicio,fechaFin,id) => {
    if (!fechaInicio && !fechaFin) {
      return Promise.resolve({ error: "Fecha de cita no proporcionada." });
    }

    const url =  `/api/agenda/fechas?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}&id=${id}`;

    return await apiGet(url)
      .then(data => data)
      .catch(error => ({ error: error.message }));
  };

  const getPacienteDate = async(fechaInicio,fechaFin) => {
    if (!fechaInicio && !fechaFin) {
      return Promise.resolve({ error: "Fecha de creacion del paciente no proporcionada." });
    }

    const url =  `/api/paciente/fechas?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`;

    return await apiGet(url)
      .then(data => data)
      .catch(error => ({ error: error.message }));
  };
  const getFacturaDate = async(fechaInicio,fechaFin,id) => {
    if (!fechaInicio && !fechaFin) {
      return Promise.resolve({ error: "Fecha de creacion del paciente no proporcionada." });
    }

    const url =  `/api/factura/fechas?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}&id=${id}`;

    return await apiGet(url)
      .then(data => data)
      .catch(error => ({ error: error.message }));
  };
  const getPagoDateFactura = async(fechaInicio,fechaFin,id) => {
    if (!fechaInicio && !fechaFin) {
      return Promise.resolve({ error: "Fecha de creacion del paciente no proporcionada." });
    }

    const url =  `/api/pago/fechas?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}&id=${id}`;

    return await apiGet(url)
      .then(data => data)
      .catch(error => ({ error: error.message }));
  };


  const getAgenda = async(id) => {
    if (!id) {
      return Promise.resolve({ error: "Fecha de cita no proporcionada." });
    }

    const url =  `/api/agenda/${id}`;

    return await apiGet(url)
      .then(data => data)
      .catch(error => ({ error: error.message }));
  };





  
  const getPaciente = async(id) => {
    if (!id) {
      return Promise.resolve({ error: "Fecha de cita no proporcionada." });
    }

    const url =  `/api/paciente/${id}`;

    return await apiGet(url)
      .then(data => data)
      .catch(error => ({ error: error.message }));


  };


  const getAgendaIdPaciente = async(id) => {

    if (!id) {
      return Promise.resolve({ error: "Fecha de cita no proporcionada." });
    }

    const url =  `/api/agenda/paciente/${id}`;

    return await apiGet(url)
      .then(data => data)
      .catch(error => ({ error: error.message }));
  };




  

  const getHistoriaClinicaDocumento = async(documento, page) => {
    
    if (documento === undefined || documento === null) {
      return Promise.resolve({ error: "Documento no proporcionado." });
    }
  
    let url;
  
    if (documento !== "") {
      url =  `/api/historia_clinica/documento/${documento}?page=${page}`;
    } else {
      url =  `/api/historia_clinica?page=${page}`;
    }
  
    return await apiGet(url)
      .then(data => data)
      .catch(error => ({ error: error.message }));

  };

  const getHistoriaClinicaIdPaciente = async(id) => {

    if (!id) {
      return Promise.resolve({ error: "Fecha de cita no proporcionada." });
    }

    const url =  `/api/historia_clinica/id/${id}`;

    return await apiGet(url)
      .then(data => data)
      .catch(error => ({ error: error.message }));
  };


  const getHistoriaClinica = async (id) => {
    if (!id) {
      return Promise.resolve({ error: "Fecha de cita no proporcionada." });
    }

    const url =  `/api/historia_clinica/${id}`;

    return await apiGet(url)
      .then(data => data)
      .catch(error => ({ error: error.message }));

  };

  const getFactura = async (id) => {

    if (!id) {
      return Promise.resolve({ error: "Fecha de cita no proporcionada." });
    }

    const url =  `/api/factura/${id}`;

    return await apiGet(url)
      .then(data => data)
      .catch(error => ({ error: error.message }));

  };

  const getFacturaIdPaciente = async (id) => {

    if (!id) {
      return Promise.resolve({ error: "Fecha de cita no proporcionada." });
    }

    const url =  `/api/factura/id/${id}`;

    return await apiGet(url)
      .then(data => data)
      .catch(error => ({ error: error.message }));
  };

  const getPagosByFactura = async (id) => {

    if (!id) {
      return Promise.resolve({ error: "Fecha de cita no proporcionada." });
    }

    const url =  `/api/pago/factura/${id}`;

    return await apiGet(url)
      .then(data => data)
      .catch(error => ({ error: error.message }));

    


  };
  const getPago = async (id) => {

    if (!id) {
      return Promise.resolve({ error: "Fecha de cita no proporcionada." });
    }

    const url =  `/api/pago/${id}`;

    return await apiGet(url)
      .then(data => data)
      .catch(error => ({ error: error.message }));
 };
  

  const getPagosDocumento = async(documento, page) => {

    let url

    if (documento === undefined || documento === null) {
      return { error: "Documento no proporcionado." };
    }

    if (document && documento !== "") {
      url =  `/api/pago/search/${documento}?page=${page}`
    }
    else {
      url =  `/api/pago?page=${page}`
    }

    return await apiGet(url)
      .then(data => data)
      .catch(error => ({ error: error.message }));
  };
  const getFacturaDocumento = async(documento, page) => {
    let url
    
    if (documento === undefined || documento === null) {
      return Promise.resolve({ error: "Documento no proporcionado." });
    }


    if (document && documento !== "") {
      url =  `/api/factura/documento/${documento}?page=${page}`
    }
    else {
      url =  `/api/factura?page=${page}`
    }

    return await apiGet(url)
    .then(data => data)
    .catch(error => ({ error: error.message }));

  };
  const getPacienteDocumento =  async(documento, page) => {

    let url= null


    if (documento === undefined || documento === null) {
      return { error: "Documento no proporcionado." };
    }

    if (document && documento !== "") {
      url =  `/api/paciente/documento/${documento}?page=${page}`
    }
    else {
      url =  `/api/paciente?page=${page}`
    }

    
    return await apiGet(url)
    .then(data => data)
    .catch(error => ({ error: error.message }));


  };

    const getAgendasDocumento = async(documento, page) => {

      let url

      if (documento === undefined || documento === null) {
        return Promise.resolve({ error: "Documento no proporcionado." });
      }

      if (document && documento !== "") {
        url =  `/api/agenda/documento/${documento}?page=${page}`
      }
      else {
        url =  `/api/agenda?page=${page}`
      }

      return await apiGet(url)
      .then(data => data)
      .catch(error => ({ error: error.message }));

    };

   






































  


  const CrarPaciente = async (form) => {


    if (!form) {
      return Promise.resolve({ error: "Fecha de cita no proporcionada." });
    }

    const url =  `/api/paciente`;

    return apiPost(url, form)
      .then(data => data)
      .catch(error => ({ error: error.message }));
  };

  const createAgenda = async (form) => {

    if (!form) {
      return Promise.resolve({ error: "Fecha de cita no proporcionada." });
    }

    const url =  `/api/agenda`;
    

    return apiPost(url, form)
    .then(data => data)
    .catch(error => ({ error: error.message }));
  }


  const createHistoriaClinica = async (form) => {
    if (!form) {
      return Promise.resolve({ error: "Fecha de cita no proporcionada." });
    }

    const url =  `/api/historia_clinica`;

    return apiPost(url, form)
    .then(data => data)
    .catch(error => ({ error: error.message }));
  }


  const crateFactura = async (form) => {
    if (!form) {
      return Promise.resolve({ error: "Fecha de cita no proporcionada." });
    }

    const url =  `/api/factura`;

    return apiPost(url, form)
    .then(data => data)
    .catch(error => ({ error: error.message }));
  };

  const createPago = async (form) => {

    if (!form) {
      return Promise.resolve({ error: "Fecha de cita no proporcionada." });
    }

    const url =  `/api/pago`;

    return apiPost(url, form)
    .then(data => data)
    .catch(error => ({ error: error.message }));
  };












































  const putPaciente = async (form) => {

    if (!form) {
      return Promise.resolve({ error: "Fecha de cita no proporcionada." });
    }

    const url =  `/api/paciente`;

    return apiPut(url, form)
    .then(data => data)
    .catch(error => ({ error: error.message }));

  };

  
  const putAgenda = async (form) => {

    
    if (!form) {
      return Promise.resolve({ error: "Fecha de cita no proporcionada." });
    }

    const url =  `/api/agenda`;

    return apiPut(url, form)
    .then(data => data)
    .catch(error => ({ error: error.message }));
   
  }

  const putFactura = async (form) => {
    if (!form) {
      return Promise.resolve({ error: "Fecha de cita no proporcionada." });
    }

    const url =  `/api/factura`;

    return apiPut(url, form)
    .then(data => data)
    .catch(error => ({ error: error.message }));

  };
  const putHistoriaClinica = async (form) => {
    if (!form) {
      return Promise.resolve({ error: "Fecha de cita no proporcionada." });
    }

    const url =  `/api/historia_clinica`;

    return apiPut(url, form)
    .then(data => data)
    .catch(error => ({ error: error.message }));

  };
  const putPago = async (form) => {
    if (!form) {
      return Promise.resolve({ error: "Fecha de cita no proporcionada." });
    }

    const url =  `/api/pago`;

    return apiPut(url, form)
    .then(data => data)
    .catch(error => ({ error: error.message }));

  };
















































  const deleteAgenda = async (id) => {
    if (!id) {
      return Promise.resolve({ error: "Fecha de cita no proporcionada." });
    }

    const url =  `/api/agenda/${id}`;

    return apiDelete(url, id)
    .then(data => data)
    .catch(error => ({ error: error.message }));
    
  }
  


  
 
  
  
  const deleteFactura = async (id) => {
    if (!id) {
      return Promise.resolve({ error: "Fecha de cita no proporcionada." });
    }

    const url =  `/api/factura/${id}`;

    return apiDelete(url, id)
    .then(data => data)
    .catch(error => ({ error: error.message }));

  }
 

  

  const deletePago = async (id) => {
    if (!id) {
      return Promise.resolve({ error: "Fecha de cita no proporcionada." });
    }

    const url =  `/api/pago/${id}`;

    return apiDelete(url, id)
    .then(data => data)
    .catch(error => ({ error: error.message }));
   

  }
  const deletePaciente = async (id) => {
    if (!id) {
      return Promise.resolve({ error: "Fecha de cita no proporcionada." });
    }

    const url =  `/api/paciente/${id}`;

    return apiDelete(url, id)
    .then(data => data)
    .catch(error => ({ error: error.message }));

  }
  const deleteHistoriaClinica = async (id) => {
    if (!id) {
      return Promise.resolve({ error: "Fecha de cita no proporcionada." });
    }

    const url =  `/api/historia_clinica/${id}`;

    return apiDelete(url, id)
    .then(data => data)
    .catch(error => ({ error: error.message }));
  }



  const data = {
    getAgendaDate,
    getAgenda,
    createAgenda,
    putAgenda,
    deleteAgenda,
    getHistoriaClinicaDocumento,
    createHistoriaClinica,
    getPaciente,
    getPacienteDocumento,
    CrarPaciente,
    crateFactura,
    getHistoriaClinicaIdPaciente,
    getFacturaIdPaciente,
    getFactura,
    getPagosByFactura,
    putFactura,
    deleteFactura,
    putHistoriaClinica,
    createPago,
    deletePago,
    getAgendaIdPaciente,
    getAgendasDocumento,
    getPagosDocumento,
    getFacturaDocumento,
    getHistoriaClinica,
    deleteHistoriaClinica,
    getPago,
    putPago,
    putPaciente,
    deletePaciente,
    getAuth,
    isAuthenticated,
    setIsAuthenticated,
    getPacienteDate,
    getFacturaDate,
    getPagoDateFactura,
  }



  return (

    <FirebaseContext.Provider value={data}>
      {children}
    </FirebaseContext.Provider>
  );

};

export { DataProvider }
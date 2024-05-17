// hooks/useServiceActions.js
import { useContext, useState } from "react";
import {
  FirebaseContext,
  NotificationContext,
} from "../../contexts/FirebaseContext";
import { servicesObjetModal } from "../../apiUtils/modalUtils";
import ModalServices from "../modal/modal-services";

import ModalCrearHistoriaClinica from "../modal/modal-crear-historiaClinica";
import ModalPagosFactura from "../modal/modal-vista-pagos.jsx";

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}





const modalState = {
  crearAgenda: {
    estado: false,
    modal: servicesObjetModal.objetoModalCrearAgenda,
    modalServices:ModalServices
  },
  crearFactura: {
    estado: false,
    modal: servicesObjetModal.objetoModalCrearFactura,
    modalServices:ModalServices
  },
  crearHistoriaClinica: {
    estado: false,
    modal: servicesObjetModal.objetoModalCrearHistoriaClinica,
    modalServices:ModalCrearHistoriaClinica
  },
  crearPaciente: {
    estado: false,
    modal: servicesObjetModal.objetoModalCrearPaciente,
    modalServices:ModalServices
  },
  crearPago: {
    estado: false,
    modal: servicesObjetModal.objetoModalCrearPago,
    modalServices:ModalServices
  },
  editarAgenda: {
    estado: false,
    modal: servicesObjetModal.objetoModalEditarAgenda,
    modalServices:ModalServices
  },
  editarFactura: {
    estado: false,
    modal: servicesObjetModal.objetoModalEditarFactura,
    modalServices:ModalServices
  },
  editarHistoriaClinica: {
    estado: false,
    modal: servicesObjetModal.objetoModalEditarHistoriaClinica,
    modalServices:ModalCrearHistoriaClinica
  },
  editarPaciente: {
    estado: false,
    modal: servicesObjetModal.objetoModalEditarPaciente,
    modalServices:ModalServices
    
  },
  editarPago: {
    estado: false,
    modal: servicesObjetModal.objetoModalEditarPago,
    modalServices:ModalServices
  },
  pagosFactura: {
    estado: false,
    modal: servicesObjetModal.objetoModalEditarFactura,
    modalServices:ModalPagosFactura,
  },
};

const useServiceActions = () => {
  const { showNotification } = useContext(NotificationContext);
  const {

    getAgenda,
    deleteAgenda,
    getHistoriaClinica,
    getPaciente,
    getFactura,
    deleteFactura,
    deletePago,
    getPago,
    deleteHistoriaClinica,
  } = useContext(FirebaseContext);

 

  const [actualizar, setActualizar] = useState(false);

  const [itemSelecIdComponent, setItemSelecIdComponent] = useState("");


  const [getDataList, setGetDataList] = useState(null);
  const [getDataItem, setGetDataItem] = useState("");

  const [openBackdrop, setOpenBackdrop] = useState(false);

  // const [actualiced, setActualiced] = useState(false);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [countDataPaciente, setCountDataPaciente] = useState(0);

  const [stateModal, setStateModal] = useState(null);

  const handleGetDataItem = (id, funcion) => {
    // setOpen(false);
    setOpenBackdrop(true);

    if (id) {
      funcion(id)
        .then((respuesta) => {
          if (respuesta) {
            setGetDataItem(respuesta);
            
          } else {
            setGetDataItem({});
            showNotification(
              `Revisa el documento o no hay calores asociados`,
              `No hay datos `,
              null,
              "warning"
            );
          }
        })
        .then(() => {
          setActualizar(!actualizar)
          sleep(1500).then(() => {
            setOpenBackdrop(false);
            
          });
        });
    } else {
      setGetDataList([]);
      showNotification(
        `ocurrio un error documento null o indefinido `,
        `Error`,
        null,
        "error"
      );
      setOpenBackdrop(false);
    }
  };

  const handlecloseModal = () => {
    setItemSelecIdComponent("");
    setGetDataItem("");
    setStateModal(null);
  };

  const handleCrear = (e) => {
    try {
      const { services, name } = e.currentTarget.dataset;


      const data = {
        ...modalState[services],
        estado: true,
        services: services,
      };

      setStateModal(data);
      showNotification(`Se va a crear. ${services} `, `Crear`, name, "warning");
    } catch (error) {
      showNotification(
        `Ocurrió un error inesperado`,
        `Error`,
        error.message,
        "error"
      );
    }
  };

  const handleEdit = (e) => {
    
    try {
      const { services, name } = e.currentTarget.dataset;
      let getDataFunction;
    
      const data = {
        ...modalState[services],
        estado: true,
        services: services,
      };


      switch (services) {
        case "editarPaciente":
          getDataFunction = getPaciente;
          setStateModal(data);
          break;
        case "editarAgenda":
          getDataFunction = getAgenda;
          setStateModal(data);
          break;
        case "editarHistoriaClinica":
        
          getDataFunction = getHistoriaClinica;
          setStateModal(data);
          break;
        case "editarFactura":
          getDataFunction = getFactura;
          setStateModal(data);
          break;
        case "editarPago":
          getDataFunction = getPago;
          setStateModal(data);
          break;
        case "pagosFactura":
          getDataFunction = getPago;
          break;
        
        default:
          throw new Error(`Tipo de servicio desconocido: ${services}`);
      }

      handleGetDataItem(e.currentTarget.id, getDataFunction);

      showNotification(
        `Se va a editar. ${services} `,
        `Editar`,
        name,
        "warning"
      );
      
    } catch (error) {
      showNotification(
        `Ocurrió un error inesperado`,
        `Error`,
        error.message,
        "error"
      );
    }
  };

  const handleDelete = (e) => {

    try {
      const { services, name } = e.currentTarget.dataset;

      let getDataFunction;
      let id = e.currentTarget.id;
      
      switch (services) {
        case "deletePaciente":
          throw new Error(`No se puede eliminar pacientes: MEJOR EDITELO`);
        
        case "deleteAgenda":
          getDataFunction = deleteAgenda;
          break;
        case "deleteHistoriaClinica":
          getDataFunction = deleteHistoriaClinica;
          break;
        case "deleteFactura":
          getDataFunction = deleteFactura;
          break;
        case "deletePago":
          getDataFunction = deletePago;
          break;
        default:
          throw new Error(`Tipo de servicio desconocido: ${services}`);
      }

      handleGetDataItem(id, getDataFunction);
      
      showNotification(
        `Se elimino un/una ${services} `,
        `Eliminar`,
        name,
        "success"
      );
    } catch (error) {
      showNotification(
        `Ocurrió un error inesperado `,
        `Error`,
        error.message,
        "error"
      );
    }
  };



  const handleGetDataList = (funcion) => {

    if (itemSelecIdComponent || itemSelecIdComponent === "") {
      funcion(itemSelecIdComponent, page)
        .then((respuesta) => {
          if (respuesta && respuesta.totalElements > 0) {
            setGetDataList(respuesta.content);
            setPage(respuesta.number);
            setRowsPerPage(respuesta.size);
            setCountDataPaciente(respuesta.totalElements);
          } else {
            setGetDataList([]);
            setPage(0);
            setRowsPerPage(0);
            setCountDataPaciente(0);
            showNotification(
              `Revisa el documento o no hay valores asociados`,
              `No hay datos `,
              null,
              "warning"
            );
          }
        })
        .then(() => {
          sleep(1500).then(() => {
            setOpenBackdrop(false);
          });
        });
    } else {
      setGetDataList([]);
      showNotification(
        `ocurrio un error documento null o indefinido `,
        `Error`,
        null,
        "error"
      );
      setOpenBackdrop(false);
    }
  };



  const PropsGenerales={
    id:stateModal && stateModal.services,
    openModal:stateModal && stateModal.estado,
    objetoModal:stateModal && stateModal.modal,
    listDataBD:getDataList,
    getDataItem:getDataItem,
    handleEdit,
    handleDelete,
    setItemSelec:setItemSelecIdComponent,
    services:stateModal && stateModal.services,
    setActualizar,
    actualizar,
    servicesEditar:"pagosFactura",
    servicesDelete:"deletePago",
    xs:2,
    modalSize:"lg",
    handlecloseModal,
  }

  return {
    handleCrear,
    handleGetDataItem,
    stateModal,
    handlecloseModal,
    handleEdit,
    getDataItem,
    setGetDataItem,
    getDataList,
    itemSelecIdComponent,
    setItemSelecIdComponent,
    handleDelete,
    handleGetDataList,
    setPage,
    page,
    rowsPerPage,
    countDataPaciente,
    setOpenBackdrop,
    openBackdrop,
    PropsGenerales,
    actualizar,
    setGetDataList

  };
};

export default useServiceActions;

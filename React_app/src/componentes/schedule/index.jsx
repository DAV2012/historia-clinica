import { useContext, useEffect, useState } from "react";
import {
  Box,
  Paper,
  SpeedDial,
  SpeedDialAction,
  useMediaQuery,
} from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import BasicRangeShortcuts from "../BasicDateCalendar";
import ContentTimeline from "../timeLine";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import { servicesObjet } from "../help";
import dayjs from "dayjs";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import {
  FirebaseContext,
  NotificationContext,
} from "../../contexts/FirebaseContext";
import BasicDrawer from "../Drawer";
import useServiceActions from "../hooks/servicesAction";
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import SpeedDialBasic from "../SpeedDial/speedDial";




const objetoTimeLine = {
  date: "",
  time: "horatime",
  header: "nombre_text",
  subheader: "documentodouble",
  body: "procedimiento_text",
  observaciones: "observaciones_text",
  firsChip: "status_boolean",
  SeconChip: "status_double",
  thirdChip: "",
  boton: true,
};


export default function Schedule() {
  const {
    handleCrear,
    stateModal,
    handleEdit,
    getDataItem,
    handleDelete,
    setOpenBackdrop,
    openBackdrop,
    PropsGenerales,
    setGetDataItem,
    actualizar,
  } = useServiceActions();

  const {
    getAgendaDate,
    getHistoriaClinicaIdPaciente,
    getAgendaIdPaciente,
  } = useContext(FirebaseContext);

  const { showNotification } = useContext(NotificationContext);
  const [dataAgenda, setDataAgenda] = useState(null);
  const [itemSelectDate, setItemSelectDate] = useState(
    dayjs().startOf("day").format("YYYY-MM-DD")
  );


  function sleep(delay = 0) {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
  }

  useEffect(() => {
    setOpenBackdrop(true);
    getAgendaDate(itemSelectDate, itemSelectDate, "")
    .then((respuesta) => {
      if (respuesta) {
        if (!respuesta.empty) {
          setDataAgenda(respuesta.content);
        } else {
          setDataAgenda(null);
          showNotification(
            `No hay citas `,
            `¡Informacion!`,
            `${itemSelectDate}`,
            "info"
          );
        }
        setOpenBackdrop(false);
      } else {
        showNotification(`Ocurrio un error `, `¡ERROR!`, ``, "error");
      }
    });
  }, [itemSelectDate, stateModal,getAgendaDate,setOpenBackdrop,actualizar]);

  const handleOpenModal = (e) => {
    const idPaciente = e.currentTarget.id;

    setOpenBackdrop(true);

    handleCrear(e);

    if (idPaciente) {
      Promise.all([
        getHistoriaClinicaIdPaciente(idPaciente),
        getAgendaIdPaciente(idPaciente),
      ])
        .then(([respuestaHistoria, respuestaPaciente]) => {
          if (respuestaHistoria) {
            setGetDataItem(respuestaHistoria.content);
          } else if (respuestaPaciente) {
            setGetDataItem(respuestaPaciente.content);
          }
        })
        .catch((error) => {
          console.error("Error en la cadena de promesas:", error);
        })
        .finally(() => {
          sleep(500).then(() => {
            setOpenBackdrop(false);
          });
        });
    }
  };

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <>
      {/* <Box display={"flex"}  overflow={"hidden"}> */}
        <BasicDrawer />
        <Box  boxSizing={"border-box"}  gap={"2rem"} display={"flex"} flexDirection={"row-reverse"} flexWrap={isMobile ? "wrap":"nowrap"} flexGrow={1} justifyContent={"center"} marginLeft={"3rem"} paddingTop={"3rem"}>
        
          <BasicRangeShortcuts
            name="DatePicker"
            setItemSelect={setItemSelectDate}
          />
       
      
          <ContentTimeline
            ItemSelec={itemSelectDate}
            entidad="citas"
            objetoTimeLine={objetoTimeLine}
            listDataBD={dataAgenda}
            align="center"
            IconosEdicion={true}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handleCrear={handleOpenModal}
            servicesButton1="crearHistoriaClinica"
            servicesButton2="crearFactura"
          />
     
        </Box>
      {/* </Box> */}
      <Box height={"8rem"} />
      <Backdrop
        open={openBackdrop}
        sx={{ color: "#fff", backgroundColor: "rgba(0, 0, 0, 0.25)" }}
      />
      {stateModal && stateModal.services !== "editarAgenda" && (
        <stateModal.modalServices
          {...PropsGenerales}
          listDataBD={getDataItem ? getDataItem[0] : getDataItem}
        />
      )}
      {stateModal && stateModal.services === "editarAgenda" && (
        <stateModal.modalServices
          {...PropsGenerales}
          listDataBD={getDataItem}
        />
      )}
      <SpeedDialBasic
        handleCrear={handleCrear}
        setOpenBackdrop={setOpenBackdrop}
        openBackdrop = {openBackdrop}
      />
    </>
  );
}

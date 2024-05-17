import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useContext, useEffect, useState } from "react";
import {
  FirebaseContext,
} from "../../contexts/FirebaseContext";
import {

  Backdrop,
  Card,
  CircularProgress,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  useMediaQuery,
} from "@mui/material";

import BasicTable from "../tableData";
import Rotate90DegreesCwIcon from "@mui/icons-material/Rotate90DegreesCw";
import Rotate90DegreesCcwIcon from "@mui/icons-material/Rotate90DegreesCcw";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import AddCardOutlinedIcon from "@mui/icons-material/AddCardOutlined";
import BasicDrawer from "../Drawer";
import useServiceActions from "../hooks/servicesAction";
import SearchBasic from "../search";
import SpeedDialBasic from "../SpeedDial/speedDial";







const objetoTablaPaciente = {
  header: "nombre_text",
  subheader: "documentodouble",
  date: "",
  header2: "",
  dateCrate: "",
  horatime: "",
  body: "correo_email",
  telefono: "telefono_double",
  firsChip: "",
  SeconChip: "",
  thirdChip: "",
  mostrarPaginacion: true,
  IconosEdicion: true,
  iconPago: false,
};
const objetoTablahistoriaClinica = {
  header: "nombre_text",
  subheader: "documentodouble",
  date: "",
  header2: "",
  dateCrate: "fachadate",
  horatime: "",
  body: "correo_email",
  telefono: "telefono_double",
  firsChip: "",
  SeconChip: "",
  thirdChip: "",
  mostrarPaginacion: true,
  IconosEdicion: true,
  iconPago: false,
};
const objetoTablaAgenda = {
  header: "nombre_text",
  subheader: "documentodouble",
  date: "fechacitadate",
  header2: "procedimiento_text",
  dateCrate: "",
  horatime: "horatime",
  body: "correo_email",
  telefono: "telefono_double",
  firsChip: "",
  SeconChip: "",
  thirdChip: "",
  mostrarPaginacion: true,
  IconosEdicion: true,
  iconPago: false,
};
const objetoTablaFactura = {
  header: "codigofactura",
  subheader: "nombre_text",
  date: "",
  header2: "procedimiento_text",
  dateCrate: "factura_date",
  horatime: "",
  body: "documentodouble",
  telefono: "",
  firsChip: "total_factura",
  SeconChip: "",
  thirdChip: "",
  mostrarPaginacion: true,
  IconosEdicion: true,
  iconPago: true,
};
const objetoTablaPago = {
  header: "codigo_pago_text",
  subheader: "nombre_text",
  date: "",
  header2: "codigofactura",
  dateCrate: "factura_date",
  horatime: "",
  body: "documentodouble",
  telefono: "",
  firsChip: "valor_pago_double",
  SeconChip: "",
  thirdChip: "",
  mostrarPaginacion: true,
  IconosEdicion: true,
};

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function VerticalTabs() {
  const {
    handleCrear,
    stateModal,
    handleEdit,
    getDataItem,
    getDataList,
    itemSelecIdComponent,
    setItemSelecIdComponent,
    handleDelete,
    handleGetDataList,
    page,
    rowsPerPage,
    countDataPaciente,
    setOpenBackdrop,
    openBackdrop,
    setPage,
    PropsGenerales,
    actualizar,
  } = useServiceActions();

  const {
    getAgendasDocumento,
    getPagosDocumento,
    getFacturaDocumento,
    getHistoriaClinicaDocumento,
    getFactura,
    getPagosByFactura,
    getPacienteDocumento,
  } = useContext(FirebaseContext);

  const [value, setValue] = useState(0);

  const [dataPagos, setDataPagos] = useState([]);
  const [itemselectPagoPorFactura, setItemselectPagoPorFactura] =useState("");

  useEffect(() => {
    setOpenBackdrop(true);
    if (value === 0) {
      handleGetDataList(getPacienteDocumento);
    }
    if (value === 1) {
      handleGetDataList(getHistoriaClinicaDocumento);
    }
    if (value === 2) {
      handleGetDataList(getAgendasDocumento);
    }
    if (value === 3) {
      handleGetDataList(getFacturaDocumento);
    }
    if (value === 4) {
      handleGetDataList(getPagosDocumento);
    }
  }, [itemSelecIdComponent,value, page, stateModal,actualizar]);

  useEffect(() => {
    setOpenBackdrop(true);
    if (itemselectPagoPorFactura) {
      

      Promise.all([
        getPagosByFactura(itemselectPagoPorFactura),
        getFactura(itemselectPagoPorFactura),
      ])
        .then(([respuestaPagosByFactura, respuestaFacturaId]) => {
          if (respuestaPagosByFactura && respuestaFacturaId) {
            const data = {
              ...respuestaFacturaId,
              pago: respuestaPagosByFactura.content,
            };

            return data;
          }
        })
        .catch((error) => {
          console.error("Error en la cadena de promesas:", error);
        })
        .finally(() => {
          sleep(500).then(() => {
            setOpenBackdrop(false);
          });
        })
        .then((data) => {
          if (data) {
            setDataPagos(data); // Update the state here
          }
        });
    }
  }, [itemselectPagoPorFactura, actualizar,getPagosByFactura,setOpenBackdrop,getFactura]);

  const handleopenModalPAgoFactura = (e) => {
    setItemselectPagoPorFactura(e.currentTarget.id);
    handleCrear(e);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <>
      

      <Backdrop
        open={openBackdrop}
        sx={{ color: "#fff", backgroundColor: "rgba(0, 0, 0, 0.25)" }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box display={"flex"} width={"100%"}>
        <BasicDrawer />
        <Box padding={"2rem"} boxSizing={"border-box"} gap={"2rem"} display={"flex"} flexWrap={isMobile ? "wrap":"nowrap"} flexGrow={1} overflow={"hidden"}>
        <Tabs
          orientation={isMobile ? "horizontal" : "vertical"}
          variant="scrollable"
          value={value}
          onChange={handleChange}
          sx={{
            "& .MuiTab-wrapper": {
              flexDirection: "row", // Alinear el icono y el texto en fila
              justifyContent: "flex-start", // Alinear el contenido al inicio del contenedor
            },
            "& .MuiSvgIcon-root": {
              marginRight: "8px", // Espacio entre el icono y el texto
            },
          }}
        >
          <Tab
            wrapped
            value={0}
            label={<Typography sx={{ flexGrow: 1 }}>Paciente</Typography>}
            icon={
              value === 0 ? (
                <Rotate90DegreesCwIcon />
              ) : (
                <Rotate90DegreesCcwIcon />
              )
            }
            iconPosition="end"
          />
          <Tab
            wrapped
            value={1}
            label={
              <Typography sx={{ flexGrow: 1 }}>Historia clinica</Typography>
            }
            icon={
              value === 1 ? (
                <Rotate90DegreesCwIcon />
              ) : (
                <Rotate90DegreesCcwIcon />
              )
            }
            iconPosition="end"
          />
          <Tab
            wrapped
            value={2}
            label={<Typography sx={{ flexGrow: 1 }}>Agenda</Typography>}
            icon={
              value === 2 ? (
                <Rotate90DegreesCwIcon />
              ) : (
                <Rotate90DegreesCcwIcon />
              )
            }
            iconPosition="end"
          />
          <Tab
            wrapped
            value={3}
            label={<Typography sx={{ flexGrow: 1 }}>Factura</Typography>}
            icon={
              value === 3 ? (
                <Rotate90DegreesCwIcon />
              ) : (
                <Rotate90DegreesCcwIcon />
              )
            }
            iconPosition="end"
          />
          <Tab
            wrapped
            value={4}
            label={<Typography sx={{ flexGrow: 1 }}>Pagos</Typography>}
            icon={
              value === 4 ? (
                <Rotate90DegreesCwIcon />
              ) : (
                <Rotate90DegreesCcwIcon />
              )
            }
            iconPosition="end"
          />
        </Tabs>
        <Box
          display={"flex"}
          flexDirection={"column"}
          flexGrow={1}
          height={"100%"}
          gap={"2rem"}
          minWidth={"250px"}
          flex-grow= {1}
        >
          <SearchBasic setItemSelecIdComponent={setItemSelecIdComponent}/>

          {value === 0 && (
            <Card >
              <BasicTable
                id="paciente"
                listDataBD={getDataList}
                objetoTabla={objetoTablaPaciente}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                page={page}
                rowsPerPage={rowsPerPage}
                count={countDataPaciente}
                setPage={setPage}
                servicesEditar="editarPaciente"
                servicesDelete="deletePaciente"
              />
            </Card>
          )}
          {value === 1 && (
            <Card>
              <BasicTable
                listDataBD={getDataList}
                objetoTabla={objetoTablahistoriaClinica}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                page={page}
                rowsPerPage={rowsPerPage}
                count={countDataPaciente}
                setPage={setPage}
                servicesEditar="editarHistoriaClinica"
                servicesDelete="deleteHistoriaClinica"
              />
            </Card>
          )}
          {value === 2 && (
            <Card>
              <BasicTable
                listDataBD={getDataList}
                objetoTabla={objetoTablaAgenda}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                page={page}
                rowsPerPage={rowsPerPage}
                count={countDataPaciente}
                setPage={setPage}
                servicesEditar="editarAgenda"
                servicesDelete="deleteAgenda"
              />
            </Card>
          )}
          {value === 3 && (
            <Card>
              <BasicTable
                listDataBD={getDataList}
                objetoTabla={objetoTablaFactura}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                page={page}
                rowsPerPage={rowsPerPage}
                count={countDataPaciente}
                setPage={setPage}
                handlePagos={handleopenModalPAgoFactura}
                servicesEditar="editarFactura"
                servicesDelete="deleteFactura"
              />
            </Card>
          )}
          {value === 4 && (
            <Card>
              <BasicTable
                listDataBD={getDataList}
                objetoTabla={objetoTablaPago}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                page={page}
                rowsPerPage={rowsPerPage}
                count={countDataPaciente}
                setPage={setPage}
                servicesEditar="editarPago"
                servicesDelete="deletePago"
              />
            </Card>
          )}
        </Box>
        </Box>
      </Box>
      <Box height={"8rem"}/>
      {stateModal && stateModal.services !== "pagosFactura" && (
        <stateModal.modalServices
          {...PropsGenerales}
          listDataBD={getDataItem}
        />
      )}
      {stateModal && stateModal.services === "pagosFactura" && (
        <stateModal.modalServices {...PropsGenerales} listDataBD={dataPagos} />
      )}
      <SpeedDialBasic
        handleCrear={handleCrear}
        setOpenBackdrop={setOpenBackdrop}
        openBackdrop = {openBackdrop}
      />

    </>
  );
}

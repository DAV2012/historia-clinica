import { useContext, useEffect, useState } from "react";
import { styled as muiStyled } from "@mui/material/styles";
import {
  Backdrop,
  Box,
  CircularProgress,
  IconButton,
  ListItemText,
  Paper,
  Tooltip,
  Typography,
  useMediaQuery,

} from "@mui/material";
import { servicesObjet } from "../help";
import BasicTable from "../tableData";
import Cards from "../card";
import { FirebaseContext } from "../../contexts/FirebaseContext";
import CardDate from "../cardDate";
import BasicDrawer from "../Drawer";
import useServiceActions from "../hooks/servicesAction";
import SearchBasic from "../search";
import SpeedDialBasic from "../SpeedDial/speedDial";
import { NumericFormat } from "react-number-format";
import { PDFDownloadLink, usePDF } from "@react-pdf/renderer";
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import MyFactura from "../PDF/facturas";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";




const objetoTabla = {
  header: "nombre_text",
  subheader: "documentodouble",
  date: null,
  body: "correo_email",
  firsChip: null,
  SeconChip: null,
  thirdChip: null,
  mostrarPaginacion: true,
  numerodeFilas: 10,
};
const objetoTablaFactura = {
  header: "codigoPago",
  subheader: "procedimiento_text",
  date: "facturadate",
  body: "",
  firsChip: "total_factura",
  SeconChip: null,
  thirdChip: "",
  mostrarPaginacion: false,
  IconosEdicion: true,
  iconPago: true,
};

const objetoCard = {
  title: "nombre_text",
  subheader1: "telefono_double",
  subheader2: "fecha_date",
  titleBody1: "procedimiento",
  body1: "procedimiento",
  titleBody2: "edad_double",
  body2: "edad",
  chip: "comonosconoce",
};

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default function Paciente() {
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
    getHistoriaClinicaIdPaciente,
    getFacturaIdPaciente,
    getFactura,
    getPagosByFactura,
    getAgendaIdPaciente,
    getPacienteDocumento,
  } = useContext(FirebaseContext);


  const [itemSelectIdPaciente, setItemSelectIdPaciente] = useState(null);

  const [dataPaciente, setDataPaciente] = useState({});

  const [dataPagos, setDataPagos] = useState([]);
  const [itemselectPagoPorFactura, setItemselectPagoPorFactura] =
    useState(null);

  const [open, setOpen] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [totalSum, setTotalSum] = useState(0);



  useEffect(() => {
    setOpenBackdrop(true);
    handleGetDataList(getPacienteDocumento);

  }, [itemSelecIdComponent, page, actualizar]);

  // useEffect(() => {
  //   setOpenBackdrop(true);

  //   if (itemSelectIdPaciente) {
  //     Promise.all([
  //       getHistoriaClinicaIdPaciente(itemSelectIdPaciente),
  //       getFacturaIdPaciente(itemSelectIdPaciente),
  //       getAgendaIdPaciente(itemSelectIdPaciente),
  //     ])
  //       .then(([respuestaHistoria, respuestaFactura, respuestaAgenda]) => {
  //         let data = {
  //           historia_clinica: respuestaHistoria.content,
  //           factura: respuestaFactura.content,
  //           agenda: respuestaAgenda.content,
  //         };
  //         setDataPaciente(data);
  //       }
  //       )
  //       .catch((error) => {
  //         setOpenBackdrop(false);
  //         setDataPaciente({})
  //       })
  //       .finally(() => {
  //         sleep(500).then(() => {
  //           setOpen(true);
  //           setOpenBackdrop(false);
  //         });
  //       });
  //   }
  // }, [itemSelectIdPaciente,stateModal,actualizar ]);

  useEffect(() => {
    setOpenBackdrop(true);
      Promise.all([
        getPagosByFactura(itemselectPagoPorFactura),
        getFactura(itemselectPagoPorFactura),
        getHistoriaClinicaIdPaciente(itemSelectIdPaciente),
        getFacturaIdPaciente(itemSelectIdPaciente),
        getAgendaIdPaciente(itemSelectIdPaciente),
      ])
        .then(([respuestaPagosByFactura, respuestaFacturaId,respuestaHistoria, respuestaFactura, respuestaAgenda]) => {
            
            if (respuestaPagosByFactura && respuestaPagosByFactura.content) {
              let totalPagos = respuestaPagosByFactura.content.reduce((total, pago) => total + pago.valor_pago_double, 0);
              setTotalSum(totalPagos)
            }

            let dataPaciente = {
              historia_clinica: respuestaHistoria.content,
              factura: respuestaFactura.content,
              agenda: respuestaAgenda.content,
            };
            
            const dataFactura = {
              ...respuestaFacturaId,
              pago: respuestaPagosByFactura.content,
            };

            return {dataFactura, dataPaciente};
          
        })
        .then(({dataFactura, dataPaciente}) => {
          if (dataFactura) setDataPagos(dataFactura); // Update the state here 
          if(dataPaciente) setDataPaciente(dataPaciente);
        })
        .catch((error) => {
          console.error("Error en la cadena de promesas:", error);
          setOpenBackdrop(false);
          setDataPaciente({})
          setDataPaciente({})
        })
        .finally(() => {
          sleep(500).then(() => {
            setOpen(true);
            setOpenBackdrop(false);

          });
        })

    
  }, [itemSelectIdPaciente,itemselectPagoPorFactura, stateModal, actualizar]);

  const handleItem = (e) => {
    const row = e.currentTarget.id;
    setItemselectPagoPorFactura(null)
    setOpen(false);
    if (row === itemSelectIdPaciente) {
      setOpen(!open);
    } else {
      setItemSelectIdPaciente(row);
    }
  };
  const handleItemFactura = (e) => {
    const row = e.currentTarget.dataset;
    setItemselectPagoPorFactura(row.codfactura)
  };

  const handleopenModalPAgoFactura = (e) => {
    setItemselectPagoPorFactura(e.currentTarget.id);
    handleCrear(e);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
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

      <BasicDrawer />

      <Box
        id="containerMain"
        margin={isMobile ? "0 0 0 3rem" : "3rem"}
        padding={isMobile ? "1rem 1rem 8rem 1rem" : "3rem"}
        display={"flex"}
        flexDirection={isMobile ? "column" : "row"}
        gap={"2rem"}
      >

        <Box
          open
          display={"flex"}
          flexDirection={"column"}
          gap={"1rem"}
          maxWidth={isMobile ? "inherit" : "360px"}
          flexGrow={isMobile ? 1 : 0}
        >
          <SearchBasic setItemSelecIdComponent={setItemSelecIdComponent} />
          <BasicTable
            listDataBD={getDataList}
            objetoTabla={objetoTabla}
            handleItem={handleItem}
            page={page}
            rowsPerPage={rowsPerPage}
            count={countDataPaciente}
            setPage={setPage}
          />
        </Box>
        {dataPaciente["historia_clinica"] && dataPaciente["factura"] && dataPaciente["agenda"] && (dataPaciente["historia_clinica"].length > 0 || dataPaciente["factura"].length > 0 || dataPaciente["agenda"].length > 0 || dataPaciente["agenda"].length > 0) && open && (
          <Grid2 
            xs={12} 
            container
            spacing={{ xs: 1, sm: 2, md: 3 }}
            
            id={"containerInfo"}
            alignContent={"center"}
            alignItems={"center"}

            flexGrow={1}

          >
            {dataPaciente["historia_clinica"] &&
              dataPaciente["historia_clinica"]
                .slice(0, 1)
                .map((dataHistoriaaclinica, index) => {

                  return (
                    <Grid2 xs={12} md={!expanded && 4}   key={index}>
                      <Cards
                 
                      listDataBD={dataHistoriaaclinica}
                      objetoCard={objetoCard}
                      setExpanded={setExpanded}
                      expanded={expanded}
                      handleCrear={handleCrear}
                      handleExpandClick={handleExpandClick}
                      servicesObjet={servicesObjet}
                      handleEdit={handleEdit}
                      dataPDF={dataPaciente}
                    />
                    </Grid2>
                  );
                })}


            {dataPaciente["agenda"] && dataPaciente["historia_clinica"] && !expanded && <Grid2 xs={12} md={8} display={"flex"} flexDirection={"column"} gap={"2rem"}  width={"100%"} height={"500px"}>

              {dataPaciente["agenda"] && dataPaciente["agenda"].length > 0 && !expanded && (<Box component={Paper} width={"100%" } id="agenda">

                <CardDate
                  listDataBD={dataPaciente["agenda"]}
                  hadleEdit={handleEdit}
                  handleDelete={handleDelete}
                  servicesEditar="editarAgenda"
                  servicesDelete="deleteAgenda"
                />

              </Box>
              )}

              {itemselectPagoPorFactura && dataPaciente["historia_clinica"] && !expanded && <Box
                sx={{ overflowY: "visible",overflowX:"auto", height: "-webkit-fill-available", paddingBottom: "1rem" }}
                component={Paper}
                width={"100%"}
                display="flex"
                position="relative" // Agrega esta propiedad

              >
                {dataPagos && dataPagos.pago && <Box
                  sx={{ height: isMobile ? "inherit" : "100%", padding: isMobile ? "1rem" : "1rem 2rem", width: "100%" }} 
                >

                  <Typography variant="h2" padding={"1rem 0"} fontSize={"18px"}>
                    {dataPagos.codigofactura || ""}  {<Typography>Seguimiento a esta factura</Typography>}
                  </Typography>


                  {dataPagos && dataPagos.pago && dataPagos.pago.map(({ codigo_pago_text, fechadate, observacionespago, valor_pago_double }, index) => {
                    return <Box key={index} display={"flex"} alignItems={"center"}>
                      <Typography variant="h2" fontSize={"8px"} paddingRight={"0.5rem"} width={"-webkit-fill-available"}>
                        {observacionespago}
                      </Typography>
                      <Box width={"120px"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} >
                        <ListItemText
                          sx={{ width: "6rem" }}
                          primary={<Typography variant="h2" fontSize={"8px"}>{codigo_pago_text}</Typography>}
                          secondary={<Typography variant="h2" fontSize={"8px"}>{fechadate}</Typography>}
                        />
                        <Typography variant="h2" sx={{ fontSize: "0.5rem", color: "#e77779" }}>
                          <NumericFormat
                            displayType="text"
                            customInput={Typography}
                            thousandSeparator={true}
                            prefix={"$"}
                            decimalScale={2}
                            value={valor_pago_double}
                          />
                        </Typography>
                      </Box>
                    </Box>
                  })}
                  <Box display={"flex"} alignItems={"center"} >
                    <Typography variant="h2" flexGrow={1} fontSize={"8px"} >

                    </Typography>
                    <Box width={"180px"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} borderTop={"1px solid #6A7E7C"}>
                      <ListItemText
                        sx={{ width: "6rem" }}
                        primary={<Typography variant="h2" fontSize={"8px"}>Total</Typography>}
                        secondary={<Typography variant="h2" fontSize={"8px"}></Typography>}
                      />
                      <Typography variant="h2" sx={{ fontSize: "0.5rem", color: "#e77779" }}>
                        <NumericFormat
                          displayType="text"
                          customInput={Typography}
                          thousandSeparator={true}
                          prefix={"$"}
                          decimalScale={2}
                          value={totalSum}
                        />
                      </Typography>
                    </Box>
                  </Box>
                </Box>}
                <IconButton
                  sx={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                  }}
                >
                  {dataPagos && dataPaciente && dataPagos.pago && dataPaciente.historia_clinica.length > 0 && <PDFDownloadLink document={<MyFactura data={dataPagos } dataPersonal={dataPaciente.historia_clinica[0]} totalSum={totalSum}/>} fileName="informe.pdf">
                    {({ blob, url, loading, error }) => (
                     
                      
                      error && <Box>Something went wrong: {error}</Box>,
                      !error && loading ? <Box fontSize={"0.5rem"}>Cargando ...</Box>:<a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Tooltip disableFocusListener title="Editar historia clínica" arrow>
                          <LocalPrintshopIcon ></LocalPrintshopIcon>
                        </Tooltip>
                      </a>
                      
                    )}
                  </PDFDownloadLink>}
                </IconButton>
              </Box>}

            </Grid2>}


            {dataPaciente["factura"] && dataPaciente["factura"].length > 0 && !expanded && (
              <Grid2  component={Paper} xs={12} id="factura">

                <BasicTable
                  listDataBD={dataPaciente["factura"]}
                  objetoTabla={objetoTablaFactura}
                  handleItem={handleItemFactura}
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

              </Grid2>
            )}
          </Grid2>
        )}
      </Box>
      <SpeedDialBasic
        handleCrear={handleCrear}
        setOpenBackdrop={setOpenBackdrop}
        openBackdrop={openBackdrop}
      />

      {stateModal && stateModal.services !== "pagosFactura" &&
        stateModal.services !== "editarFactura" &&
        stateModal.services !== "editarAgenda" &&
        stateModal.services !== "crearPaciente" && (
          <stateModal.modalServices
            {...PropsGenerales}
            listDataBD={dataPaciente["historia_clinica"] ? dataPaciente["historia_clinica"][0] : []}
            activestepinicial={stateModal.services === "editarHistoriaClinica" && 7}
          />
        )}
      {stateModal && stateModal.services === "pagosFactura" && (
        <stateModal.modalServices {...PropsGenerales} listDataBD={dataPagos} openBackdrop={openBackdrop} />
      )}
      {stateModal && stateModal.services === "crearPaciente" && (
        <stateModal.modalServices {...PropsGenerales} />
      )}

      {stateModal &&
        (stateModal.services === "editarFactura" ||
          stateModal.services === "editarAgenda") && (
          <stateModal.modalServices
            {...PropsGenerales}
            listDataBD={getDataItem}


          />
        )}

    </>
  );
}

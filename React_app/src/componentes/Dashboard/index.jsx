import { useContext, useEffect, useState } from "react";
import {
  Card,
  CardHeader,

  CircularProgress,

  Typography,
  useMediaQuery,
} from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import dayjs from "dayjs";

import {
  FirebaseContext,
} from "../../contexts/FirebaseContext";
import BasicDrawer from "../Drawer";
import useServiceActions from "../hooks/servicesAction";
import { PieGrafica } from "../graficas/pie";
import { LineGrafica } from "../graficas/line";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TypeFieldInput from "../typefieldInput";
import SpeedDialBasic from "../SpeedDial/speedDial";


function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}



export default function Dashboard() {
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
    getPacienteDate,
    getFacturaDate,
    getPagoDateFactura,
    getFacturaDocumento,
  } = useContext(FirebaseContext);

  const [dataGraficaPieAgendaVsPaciente, setDataGraficaPieAgendaVsPaciente] = useState({ data: [], label: [], });
  const [dataGraficaPieFacturaVsGastos, setDataGraficaPieFacturaVsGastos] = useState({ data: [], label: [], });
  const [dataGraficaLine, setDataGraficaLine] = useState({ dataFactura: [], dataPago: [], label: [], });
  const [countAgenda, setCountAgenda] = useState(0);
  const [countPaciente, setCountPaciente] = useState(0);
  const [totalFacturas, setTotalFacturas] = useState(0);
  const [totalPago, setTotalPago] = useState("");
  const [itemSelectIdpaciente, setItemSelectIdpaciente] = useState("");
  const [itemSelectDateInicial, setItemSelectDateInicial] = useState(
    dayjs().startOf("month").format("YYYY-MM-DD")
  );
  const [itemSelectDateFinal, setItemSelectDateFinal] = useState(
    dayjs().endOf("month").format("YYYY-MM-DD")
  );

  useEffect(() => {
    
    setOpenBackdrop(true);

    Promise.all([

      getPacienteDate(itemSelectDateInicial, itemSelectDateFinal),
      getAgendaDate(itemSelectDateInicial, itemSelectDateFinal, itemSelectIdpaciente),

      getFacturaDate(itemSelectDateInicial, itemSelectDateFinal, itemSelectIdpaciente),
      getPagoDateFactura(itemSelectDateInicial, itemSelectDateFinal, itemSelectIdpaciente),



    ])
      .then(([respuestaPaciente, respuestaAgendaDate, respuestaFacturaTotal, respuestaPagoTotal]) => {

        //Grafica Agenda Vs pacientes
        
        const countPacientes = respuestaPaciente.content.reduce((contador, { documentodouble }) => {
          if (!documentodouble.startsWith("00")) {
            return contador + 1; // Incrementa el contador si la condición se cumple
          } else {
            return contador; // Devuelve el contador sin cambios si la condición no se cumple
          }
        }, 0);


        const countAgenda = respuestaAgendaDate.content.reduce((contador, { documentodouble }) => {
          if (!documentodouble.startsWith("00")) {
            return contador + 1; // Incrementa el contador si la condición se cumple
          } else {
            return contador; // Devuelve el contador sin cambios si la condición no se cumple
          }
        }, 0);
        setDataGraficaPieAgendaVsPaciente({ data: [countAgenda,countPacientes], label: ["Citas agendadas", "Pacientes nuevos"] });
        //////////////


        /////Grafica Gastos Vs Facturas
        const sumaTotalFactura = respuestaFacturaTotal.content.reduce((total, { total_factura,documentodouble }) => {
          if (!documentodouble.startsWith("00")) {
            return total + total_factura; // Incrementa el contador si la condición se cumple
          } else {
            return total; // Devuelve el contador sin cambios si la condición no se cumple
          }
         
        },0);
        const sumaTotalFactura00 = respuestaFacturaTotal.content.reduce((total, { total_factura,documentodouble }) => {
          if (documentodouble.startsWith("00")) {
            return total + total_factura; // Incrementa el contador si la condición se cumple
          } else {
            return total; // Devuelve el contador sin cambios si la condición no se cumple
          }
         
        },0);
        const sumaTotalPago = respuestaPagoTotal.content.reduce((total, { valor_pago_double,documentodouble }) => {
          if (!documentodouble.startsWith("00")) {
            return total + valor_pago_double; // Incrementa el contador si la condición se cumple
          } else {
            return total; // Devuelve el contador sin cambios si la condición no se cumple
          }
         
        },0);

        setDataGraficaPieFacturaVsGastos({ data: [sumaTotalFactura, sumaTotalFactura00], label: [ "Facturas","Gastos",] });

        ///Grafica de abonos Vs deudas
        const newDataGrafiLineFactura = respuestaFacturaTotal.content.reduce((data, { codigofactura, total_factura, documentodouble }) => {
          if (!documentodouble.startsWith("00")) {
            data.dataFactura.push(total_factura);
            data.label.push(codigofactura);
          }
          return data;
        }, { dataFactura: [], label: [] });

        const objetoPagosFactura = respuestaPagoTotal.content.reduce((objeto, { valor_pago_double, codigofactura, documentodouble }) => {
          if (!documentodouble.startsWith("00")) {
            if (objeto[codigofactura]) {
              objeto[codigofactura] += valor_pago_double;
            } else {
              objeto[codigofactura] = valor_pago_double;
            }
          }
          return objeto;
        }, {});

        // Itera a través de newDataGrafiLineFactura.label y agrega los valores de pago en el mismo orden
        newDataGrafiLineFactura.dataPago = newDataGrafiLineFactura.label.map(codigofactura => {
          const valorPago = objetoPagosFactura[codigofactura] || 0; // Si no hay valor de pago, se establece en 0.
          return valorPago;
        });

        setDataGraficaLine(newDataGrafiLineFactura);
        //////////
        /////Card Facturas


        const sumaTotalFacturaEnPesos = sumaTotalFactura.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
        setTotalFacturas(sumaTotalFacturaEnPesos)
        ///////////
        /////Card abonos
        
        const sumaTotalPagoEnPesos = sumaTotalPago.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
        setTotalPago(sumaTotalPagoEnPesos)
        ///////////
        ///Card Citas
        setCountAgenda(countAgenda)
        ///
        ///Card Pacientes
        setCountPaciente(countPacientes)
        ///
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {

        sleep(500).then(() => {
          setOpenBackdrop(false);
        });
      });

  }, [itemSelectDateInicial, itemSelectDateFinal, stateModal, getAgendaDate, setOpenBackdrop, actualizar, itemSelectIdpaciente]);

  const handleChange = (paciente) => {
    setItemSelectIdpaciente(paciente.documentodouble)
  }

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <>
      <BasicDrawer>
        <CircularProgress color="inherit" />
      </BasicDrawer>
      <Backdrop
        open={openBackdrop}
        sx={{ color: "#fff", backgroundColor: "rgba(0, 0, 0, 0.25)" }}
      />
      <Grid2 container spacing={{ xs: "1rem", md: "5rem" }} height={"100%"} boxSizing={"border-box"} margin={isMobile ? "0 0 0 3rem" : "3rem"}>
        <Grid2 xs={12} md={3} height={"auto"}>
          <LocalizationProvider dateAdapter={AdapterDayjs} >
            <DemoContainer components={['DatePicker', 'DatePicker', 'DatePicker']} sx={{ padding: "2rem 0" }}>
              <DatePicker
                label={<Typography variant="h2" fontSize={20}>Fecha inicial</Typography>}
                defaultValue={dayjs().startOf("month")}
                onChange={(newValue) => setItemSelectDateInicial(dayjs(newValue).format("YYYY-MM-DD"))}
                format="YYYY-MM-DD"
                
              />
              <DatePicker
                label={<Typography variant="h2" fontSize={20}>Fecha final</Typography>}
                defaultValue={dayjs().endOf("month")}
                onChange={(newValue) => setItemSelectDateFinal(dayjs(newValue).format("YYYY-MM-DD"))}
                format="YYYY-MM-DD"
              />
            </DemoContainer>
            <TypeFieldInput
              name="documentodouble"
              label="Documento"
              typeValueInput="text"
              typefieldInput="AsynchronousField"
              option={[]}
              error={{}}
              onChange={handleChange}

            />
          </LocalizationProvider>
        </Grid2>
        <Grid2 xs={12} md={9} container justifyContent={isMobile && "center"} spacing={{ md: "1rem" }}>
          <Grid2 md={3}>
            <Card elevation={3} sx={{ textAlign: "center", display: "flex", height: "100%", justifyContent: "space-around" }}>
              <CardHeader
                sx={{ textAlign: "center" }}
                title={<Typography fontSize={isMobile ? 15 : 25} sx={{ fontWeight: 700 }} color="secondary" paragraph>{totalFacturas}</Typography>}
                subheader={<Typography fontSize={isMobile && 8} variant="h2" paragraph>{itemSelectIdpaciente?"Suma de cada factura del paciente": "Suma de cada factura"}</Typography>}

              />
            </Card>
          </Grid2>
          <Grid2 md={3}>
            <Card elevation={3} sx={{ textAlign: "center", display: "flex", height: "100%", justifyContent: "space-around" }}>
              <CardHeader
                sx={{ textAlign: "center" }}
                title={<Typography fontSize={isMobile ? 15 : 25} sx={{ fontWeight: 700 }} color="secondary" paragraph>{totalPago}</Typography>}
                subheader={<Typography fontSize={isMobile && 8} variant="h2" paragraph>{itemSelectIdpaciente?"Suma de cada abono realizado por el paciente": "Abonos realizados"}</Typography>}

              />
            </Card>
          </Grid2>
          <Grid2 md={3}>
            <Card elevation={3} sx={{ textAlign: "center", display: "flex", height: "100%", justifyContent: "space-around" }}>
              <CardHeader
                sx={{ textAlign: "center" }}
                title={<Typography fontSize={isMobile ? 15 : 25} sx={{ fontWeight: 700 }} color="secondary" paragraph>{countAgenda}</Typography>}
                subheader={<Typography fontSize={isMobile && 8} variant="h2" paragraph>Citas agendadas</Typography>}

              />
            </Card>
          </Grid2>
          <Grid2 md={3}>
            <Card elevation={3} sx={{ textAlign: "center", display: "flex", height: "100%", justifyContent: "space-around" }}>
              <CardHeader
                sx={{ textAlign: "center" }}
                title={<Typography fontSize={isMobile ? 15 : 25} sx={{ fontWeight: 700 }} color="secondary" paragraph>{countPaciente}</Typography>}
                subheader={<Typography fontSize={isMobile && 8} variant="h2" paragraph>Pacientes nuevos</Typography>}

              />
            </Card>
          </Grid2>
        </Grid2>
        <Grid2 xs={12} md={3} >
          <PieGrafica dataGrafica={dataGraficaPieAgendaVsPaciente} />
        </Grid2>
        <Grid2 xs={12} md={3} >
          <PieGrafica dataGrafica={dataGraficaPieFacturaVsGastos} />
        </Grid2>
        <Grid2 xs={12} md={6}>
          <LineGrafica dataGrafica={dataGraficaLine} />
        </Grid2>
      </Grid2>
      <SpeedDialBasic
        handleCrear={handleCrear}
        setOpenBackdrop={setOpenBackdrop}
        openBackdrop = {openBackdrop}
      />
      {stateModal && stateModal.services !== "pagosFactura" && (
        <stateModal.modalServices
          {...PropsGenerales}
          listDataBD={getDataItem}
        />
      )}
    </>
  );
}

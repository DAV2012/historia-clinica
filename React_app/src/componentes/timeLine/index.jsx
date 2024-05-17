import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {

  AccordionDetails,
  IconButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { styled as muiStyled } from "@mui/material";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import TypeFieldInput from "../typefieldInput";
import dayjs from "dayjs";
import { orderBy } from "lodash";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { Palette } from "@mui/icons-material";
import { orange, red } from "@mui/material/colors";

const StyledTimeline = muiStyled(Timeline)`

  margin:1rem;
  padding:0;
    & .MuiAccordionSummary-content{
      align-items: center;
      padding:0;
    },
    & .MuiAccordionSummary-content{
      gap:1.5rem;
      padding:0;
    }
`;

const Accordion = muiStyled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme,agendarepetida  }) => ({
  border: `1px solid ${theme.palette.divider}`,
  background: agendarepetida ? red[50]: "transparent",
  color: theme.palette,
  
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = muiStyled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({

  color: theme.palette.primary.main,
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));


const horarioAtencion = [
  { hora: "06:00:00", datos: null },
  { hora: "07:00:00", datos: null },
  { hora: "08:00:00", datos: null },
  { hora: "09:00:00", datos: null },
  { hora: "10:00:00", datos: null },
  { hora: "11:00:00", datos: null },
  { hora: "12:00:00", datos: null },
  { hora: "13:00:00", datos: null },
  { hora: "14:00:00", datos: null },
  { hora: "15:00:00", datos: null },
  { hora: "16:00:00", datos: null },
  { hora: "17:00:00", datos: null },
  { hora: "18:00:00", datos: null },
  { hora: "19:00:00", datos: null }
];

export default function ContentTimeline({
  IconosEdicion,
  listDataBD,
  objetoTimeLine,
  handleEdit,
  handleDelete,
  handleCrear,
  servicesButton1,
  servicesButton2,
}) {
  const [expanded, setExpanded] = useState("");
  const [datos, setDatos] = useState([]);


  const handleChange = (panel) => (event, newExpanded, align) => {
    setExpanded(newExpanded ? panel : false);
  };



  useEffect(() => {
    const newData = []; // Creamos un nuevo arreglo para almacenar los resultados
    if (listDataBD && listDataBD.length > 0) {
      

  
      const horaRepetida = {}; // Objeto para rastrear las horas repetidas
  
      listDataBD.forEach((datosoAgendados) => {
        const horaAgendada = dayjs(datosoAgendados.horatime,"hh:mm A").format("HH:mm:00");
        console.log(horaAgendada)
        if (horaAgendada !== "Invalid Date") {
          if (horaRepetida[horaAgendada]) {
            // Si es repetida, agregamos una propiedad "color" con valor booleano
            newData.push({ hora: horaAgendada, datos: datosoAgendados, horaRepetida: true });
          } else {
            newData.push({ hora: horaAgendada, datos: datosoAgendados});
            horaRepetida[horaAgendada] = true; // Marcamos como repetida
          }
        }
      });
  
      // Iteramos sobre horarioAtencion y verificamos si la hora ya existe en newData
      horarioAtencion.forEach(({ hora, datos }) => {
        const horaExistente = newData.find((item) => item.hora === hora);
        if (!horaExistente) {
          newData.push({ hora, datos });
        }
      });


    }
    const orderedData = orderBy(newData, ["hora"], ["asc"]);

    setDatos(orderedData);


  }, [listDataBD]);

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <>
      <StyledTimeline >
        {Array.isArray(datos) &&
          datos.length > 0 &&
          datos.map(({ hora, datos,horaRepetida }, index) => {
            return (
              <TimelineItem
                key={index}
                sx={{
                  flexDirection: { xs: "column", sm: "initial" },
                  overflow: "hidden",
                  padding:0,
                  margin:"1rem"
                }}
              >
                <TimelineOppositeContent
                  sx={{
                    m: "auto 0",
                    maxWidth: "100px",
                    minWidth: "100px",
                    display: { xs: "none", sm: "flex" },
                    padding:"1rem"
                  }}
                  color="secondary"
                >
                  <ListItemText
                    primary={
                      <Typography variant="h2">
                        {dayjs(hora, "HH:mm:00").format("hh:mm A")}
                      </Typography>
                    }
                  />
                </TimelineOppositeContent>
                <TimelineSeparator sx={{ display: { xs: "none", sm: "flex" } }}>
                  <TimelineConnector />
                  <TimelineDot color="secondary" />

                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent width={"100%"} sx={{margin:{ xs: "0",sm: "2rem" },padding:{ xs: "0",sm: "2rem" }}} boxSizing={"border-box"} >
                  {!datos && (
                    <Box
                      display={"flex"}
                      flexDirection={"row"}
                      sx={{ display: { xs: "flex", sm: "none"}}}
                      
                      
                    >
                      <ListItemIcon>
                        <AccessAlarmIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography variant="h2">
                            {dayjs(hora, "HH:mm:00").format("hh:mm A")}
                          </Typography>
                        }
                      />
                    </Box>
                  )}
                  {datos && (
                    <Accordion
                      expanded={expanded === index}
                      onChange={handleChange(index)}
                      agendarepetida={horaRepetida}
                      
                    >
                      <AccordionSummary >
                        <Box
                          display="flex"
                          width="100%"
                          alignItems="center"
                          flexWrap="wrap"
                          minWidth={"150px"}
                          boxSizing={"border-box"}
                          
                          
                                      
                        >
                          <Box flexGrow={1} overflow={"hidden"} >
                            <Box
                              display={"flex"}
                              flexDirection={"row"}
                              sx={{ display: { xs: "flex", sm: "none" } }}
                              
                            >
                              <ListItemIcon>
                                <AccessAlarmIcon />
                              </ListItemIcon>
                              <ListItemText 
                                primary={
                                  <Typography variant="h2" >
                                    {dayjs(hora, "HH:mm:00").format("hh:mm A")}
                                  </Typography>
                                }
                              />
                            </Box>
                            <ListItemText
                            
                              primary={
                                <Typography
                                  variant="h2"
                                  sx={{ fontSize: "1rem"}}
                                  
                                >
                                  {datos[objetoTimeLine.header]}
                                </Typography>
                              }
                              secondary={
                                <Typography variant="body1">
                                  {datos[objetoTimeLine.subheader]}
                                </Typography>
                              }
                            />
                          </Box>

                          <Box
                            xs={4}
                            display="flex"
                            gap="1rem"
                            flexWrap={"wrap"}
                            alignItems={"center"}
                            sx={{ flexWrap: { xs: "wrap", sm: "nowrap" } }}
                            justifyContent={"center"}
                            minWidth={isMobile?"100%":"40%"}
                            padding={0}
                          >
                            {!datos[objetoTimeLine.firsChip] && (
                              <TypeFieldInput
                                typefieldInput="chip"
                                label={
                                  !datos[objetoTimeLine.firsChip] && "PENDIENTE"
                                }
                                estado={
                                  datos[objetoTimeLine.firsChip]
                                    ? +false
                                    : +true
                                }
                              />
                            )}

                            {datos[objetoTimeLine.SeconChip] &&
                            datos[objetoTimeLine.SeconChip] > 0 ? (
                              <TypeFieldInput
                                typefieldInput="chipCurrency"
                                label={datos[objetoTimeLine.SeconChip]}
                              />
                            ) : (
                              <></>
                            )}

                            {objetoTimeLine.thirdChip && (
                              <TypeFieldInput
                                typefieldInput="chipCurrency"
                                type={"currency"}
                                label={datos[objetoTimeLine.thirdChip]}
                                estado={datos[objetoTimeLine.thirdChip]}
                              />
                            )}
                            
                            {IconosEdicion && (
                              <Box
                                width={"100%"}
                                display={"flex"}
                                justifyContent={"space-around"}
                              >
                                
                                <IconButton
                                  color="primary"
                                  id={datos.id}
                                  name={datos.nombre_text}
                                  data-services= "editarAgenda"
                                  data-name={datos[objetoTimeLine.header]}
                                  onClick={handleEdit}
                                >
                                  
                                  <EditCalendarIcon />
                                </IconButton>
                                <IconButton
                                  color="primary"
                                  id={datos.id}
                                  data-services= "deleteAgenda"
                                  data-name={datos[objetoTimeLine.header]}
                                  onClick={handleDelete}
                                >
                                  <EventBusyIcon />
                                </IconButton>
                              </Box>
                            )}
                          </Box>
                        </Box>
                      </AccordionSummary>
                      <AccordionDetails sx={{backgroundColor:"secondary"}}>
                        <ListItemText
                          sx={{backgroundColor:"primary"}}
                          primary={
                            <Typography
                              variant="subtitle2"
                              sx={{ fontSize: "1rem" }}
                              color="primary"
                            >
                              {datos[objetoTimeLine.body]}
                            </Typography>
                          }
                          secondary={
                            <Typography variant="body1" color="primary">
                              {datos[objetoTimeLine.observaciones]}
                            </Typography>
                          }
                        />
                        {[objetoTimeLine.boton] && (
                          <>
                            <Button
                              id={datos.idpaciente}
                              variant="contained"
                              sx={{ mt: 1, mr: 1 }}
                              onClick={handleCrear}
                              name="historiaClinica"
                              data-services= {servicesButton1}
                              data-name={datos[objetoTimeLine.header]}
                            >
                              Agregar historia
                            </Button>
                            <Button
                              id={datos.idpaciente}
                              sx={{ mt: 1, mr: 1 }}
                              onClick={handleCrear}
                              name="createFactura"
                              data-services= {servicesButton2}
                              data-name={datos[objetoTimeLine.header]}
                            >
                              Crear factura
                            </Button>
                          </>
                        )}
                      </AccordionDetails>
                    </Accordion>
                  )}
                </TimelineContent>
              </TimelineItem>
            );
          })}
      </StyledTimeline>
    </>
  );
}

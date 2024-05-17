import {
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import AddCardOutlinedIcon from "@mui/icons-material/AddCardOutlined";
import EventIcon from "@mui/icons-material/Event";


export default function SpeedDialBasic({handleCrear,setOpenBackdrop,openBackdrop}) {

    const handleOpen = () => setOpenBackdrop(true);
    const handleClose = () => setOpenBackdrop(false);
  
    const actions = [
      {
        icon: <PersonAddIcon />,
        name: "Crear paciente",
        onClick: handleCrear,
        services: "crearPaciente",
      },
      {
        icon: <EventIcon />,
        name: "Crear agenda",
        onClick: handleCrear,
        services: "crearAgenda",
      },
      {
        icon: <NoteAddIcon />,
        name: "Crear historia Clinica",
        onClick: handleCrear,
        services: "crearHistoriaClinica",
      },
      {
        icon: <AddCardOutlinedIcon />,
        name: "Crear factura",
        onClick: handleCrear,
        services: "crearFactura",
      },
    ];

    return(<SpeedDial
    ariaLabel="SpeedDial basic example"
    sx={{ position: "fixed", bottom: "5%", right: "5%" }}
    icon={<SpeedDialIcon />}
    onClose={handleClose}
    onOpen={handleOpen}
  >
    {actions.map(({ icon, name, onClick, services }, index) => (
      <SpeedDialAction
        key={index}
        name={name}
        id={name}
        data-services={services}
        icon={icon}
        onClick={onClick}
        open={openBackdrop}
      />
    ))}
  </SpeedDial>)
}
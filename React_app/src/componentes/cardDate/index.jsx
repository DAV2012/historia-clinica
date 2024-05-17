import {

  Box,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import dayjs from "dayjs";
import "dayjs/locale/es"; // Importa el módulo de localización para español
import styled from "@emotion/styled";


const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;

  @media (min-width: 500px) {
    width: fit-content;
    flex-direction: row;
  }
`;
const StyledBoxCenter = styled(Box)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: 1rem;

  @media (min-width: 500px) {
    flex-direction: row;
    align-items: center;
    gap: 3rem;
    justify-content: space-between;
  }
`;

// Configura el idioma local a español
dayjs.locale("es");

export default function CardDate({
  listDataBD,
  hadleEdit,
  handleDelete,
  servicesEditar,
  servicesDelete,
}) {




  return (
    <>
      <List dense>
      {Array.isArray(listDataBD) &&
        listDataBD != null &&
        listDataBD.slice(0,2).map(
          (
            { id, fechacitadate, horatime, procedimiento_text, nombre_text },
            index
          ) => {
            return (
              <ListItemButton key={index}>
                <Box>
                  <ListItemText
                    sx={{ minWidth: "6rem", maxWidth: "6rem" }}
                    primary={
                      <Typography component={"p"} variant="h2">
                        {dayjs(fechacitadate).format("MMM")}
                      </Typography>
                    }
                    secondary={
                      <Typography component={"div"} variant="h2">
                        <ListItemText
                          sx={{ display: "flex" }}
                          primary={
                            <Typography
                              sx={{
                                fontSize: "40px",
                                fontWeight: 600,
                                lineHeight: 1.2,
                              }}
                            >
                              {dayjs(fechacitadate).format("DD")}
                            </Typography>
                          }
                          secondary={
                            <Typography
                              sx={{
                                fontSize: "16px",
                                fontWeight: 300,
                                lineHeight: 1.2,
                              }}
                            >
                              {dayjs(fechacitadate).format("ddd")}
                            </Typography>
                          }
                        />
                      </Typography>
                    }
                  />
                </Box>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ margin: "0.5rem" }}
                />

                <StyledBoxCenter flexGrow={1}>
                  <Typography
                    component={"div"}
                    variant="h2"
                    noWrap
                    sx={{ flexGrow: 1 }}
                  >
                    {procedimiento_text}
                  </Typography>
                  <Box display={"flex"}>
                    <Typography
                      sx={{
                        fontSize: "20px",
                        fontWeight: 600,
                        lineHeight: 1.2,
                      }}
                    >
                      {dayjs(horatime,"hh:mm A").format("hh:mm")}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 300,
                        lineHeight: 1.2,
                      }}
                    >
                      {dayjs(horatime,"hh:mm A").format("A")}
                    </Typography>
                  </Box>
                </StyledBoxCenter>

                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ margin: "0.5rem" }}
                />

                <StyledBox>
                  <IconButton
                    onClick={hadleEdit}
                    id={id}
                    data-services={servicesEditar}
                    data-name={nombre_text}
                  >
                    <EventRepeatIcon />
                  </IconButton>

                  <IconButton
                    onClick={handleDelete}
                    id={id}
                    data-services={servicesDelete}
                    data-name={nombre_text}
                  >
                    <EventBusyIcon />
                  </IconButton>
                </StyledBox>
              </ListItemButton>
            );
          }
        )}
    </List>
    </>
  );
}

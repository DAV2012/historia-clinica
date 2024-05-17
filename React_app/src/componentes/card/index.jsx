import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import {

  Box,
  Card,
  CardActions,
  Collapse,
  Divider,
  ListItemText,
  Tooltip,
  styled,
  useMediaQuery,
} from "@mui/material";
import TypeFieldInput from "../typefieldInput";
import { useCommaDivider } from "../hooks/useCommaDivider";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import AddCardOutlinedIcon from "@mui/icons-material/AddCardOutlined";
import EventIcon from "@mui/icons-material/Event";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ColorTabs from "../ColorTaps";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "../PDF";
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';







export default function Cards({
  listDataBD,
  objetoCard,
  expanded,
  handleCrear,
  handleEdit,
  servicesObjet,
  handleExpandClick,
  dataPDF
}) {
  const { categorias } = useCommaDivider(
    "objetoCard.chip",
    listDataBD[objetoCard.chip],
    listDataBD[objetoCard.chip]
  );


  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));



  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <Card
      sx={{width:"100%", height:expanded?"100%":"500px"}}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }}>
            {listDataBD[objetoCard.title] &&
              listDataBD[objetoCard.title].charAt(0)}
          </Avatar>
        }
        title={
          <Typography variant="h2">{listDataBD[objetoCard.title]}</Typography>
        }
        subheader={
          <ListItemText
            primary={
              <Typography variant="body1">
                {listDataBD[objetoCard.subheader1]}
              </Typography>
            }
            secondary={
              <Typography variant="body1">
                {listDataBD[objetoCard.subheader2]}
              </Typography>
            }
          ></ListItemText>
        }
      >

      </CardHeader>

      <CardContent expanded={+expanded}>
        <Grid2 container spacing={1} alignItems="center" textAlign="center">
          <Grid2 xs>
            <ListItemText
              primary={
                <Typography 
                  variant="h2" 
                  color="secondary"
                  fontSize={"125%"}
                  sx={{
                    flex: "1", // Permite que el ListItemText ocupe el espacio disponible.
                    overflow: "hidden", // Oculta el contenido que no cabe en el contenedor.
                    
                  }}
                >
                    {listDataBD[objetoCard.titleBody1]}
                </Typography>
              }
              secondary={
                <Typography variant="subtitle1">
                  {objetoCard.body1.toUpperCase()}
                </Typography>
              }
            />
          </Grid2>
          <Divider orientation="vertical" flexItem  sx={{padding:isMobile?"0.5rem":"0 1rem"}}/>
          <Grid2 xs>
            <ListItemText
              primary={
                <Typography variant="h2" fontSize={"4rem"}>
                  {listDataBD[objetoCard.titleBody2]}
                </Typography>
              }
              secondary={
                <Typography variant="subtitle1">
                  {objetoCard.body2.toUpperCase()}
                </Typography>
              }
            />
          </Grid2>
        </Grid2>
        <Grid2
          container
          spacing={1}
          alignItems="center"
          textAlign="center"
          justifyContent={"center"}
          margin={"2rem 0"}

        >
          {Object.values(categorias).map((value, index) => {
            return (
              <Grid2 key={index} justifyContent={"center"} >
                <TypeFieldInput
                  name={value}
                  label={value}
                  typefieldInput={"chip"}
                  estado={{}}
                />
              </Grid2>
            );
          })}
        </Grid2>
        <Grid2 container xs={12}>
          <Grid2 xs textAlign={"center"}>

            <IconButton
              id={listDataBD.id}
              data-name={listDataBD[objetoCard.title]}
              key={listDataBD.id}
            >
              <PDFDownloadLink document={<MyDocument data={dataPDF.historia_clinica[0]} />} fileName="informe.pdf">
                {({ blob, url, loading, error }) => (

                  error && <Box>Something went wrong: {error}</Box>,
                  !error && loading ? <Box fontSize={"0.5rem"}>Cargando ...</Box> : <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Tooltip disableFocusListener title="Imprimir historia clínica" arrow>
                      <LocalPrintshopIcon ></LocalPrintshopIcon>
                    </Tooltip>
                  </a>

                )}
              </PDFDownloadLink>
            </IconButton>
          </Grid2>
          <Grid2 xs textAlign={"center"}>
            <IconButton
              onClick={handleCrear}
              data-services="crearHistoriaClinica"
              data-name={listDataBD[objetoCard.title]}>
              <Tooltip disableFocusListener title="Crear historia clinica" arrow>
                <NoteAddIcon/>
              </Tooltip>
            </IconButton>
          </Grid2>
          <Grid2 xs textAlign={"center"}>
            <IconButton
              onClick={handleCrear}
              data-services="crearFactura"
              data-name={listDataBD[objetoCard.title]}>
              <Tooltip disableFocusListener title="Crear Factura" arrow>

                <AddCardOutlinedIcon />
              </Tooltip>
            </IconButton>
          </Grid2>
          <Grid2 xs textAlign={"center"}>
            <IconButton
              onClick={handleCrear}
              data-services="crearAgenda"
              data-name={listDataBD[objetoCard.title]}
            >
              <Tooltip disableFocusListener title="Crear agenda" arrow>
                <EventIcon />
              </Tooltip>
            </IconButton>
          </Grid2>
        </Grid2>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse
        in={expanded}
        timeout={"auto"}
        orientation={isMobile ? "vertical" : "horizontal"}
        sx={{
          display: "flex", 
          justifyContent: "center",
          "& .MuiCollapse-wrapperInner":{width:"100%"}, 
          "& .MuiCollapse-wrapper":{width:"100%"},
          height:expanded&&"418px",
       
        }}

      >
        <ColorTabs
          listDataBD={listDataBD}
          objetoTabs={servicesObjet.historiaClinica}
        />
      </Collapse>
    </Card>

  );
}

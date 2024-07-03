import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useContext, useEffect, useState } from "react";
import {
  NotificationContext,
} from "../../contexts/FirebaseContext.js";
import {
  Backdrop,
  Box,
  CircularProgress,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TagIcon from "@mui/icons-material/Tag";
import PaidIcon from "@mui/icons-material/Paid";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { servicesObjet } from "../help/index.jsx";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { styled as muiStyled } from "@mui/material/styles";
import { useForm } from "../hooks/useForm.jsx";
import { validationsForm, validationsFormSubmit } from "../../validacion/index.jsx";
import BasicTable from "../tableData/index.jsx";
import dayjs from "dayjs";
import { NumericFormat } from "react-number-format";
import IconButton from "@mui/material/IconButton";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import FormCrearPago from "../formularios/form-crear-pago.jsx";
import { colorAnalogo500, colorAnalogo600, colorPrimary50, colorPrimary500, colorSecondary400, colorSecondary50, colorTriadic600, colorTriadict00_2 } from "../../globalStyle/variables.jsx";
import TypeFieldInput from "../typefieldInput/index.jsx";

const StyledGrid2 = muiStyled(Grid2)`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;

`;


const objetoTablaPago = {
  header: "codigo_pago_text",
  subheader: "",
  date: "fechadate",
  header2: "",
  dateCrate: "",
  horatime: "",
  body: "",
  telefono: "",
  firsChip: "valor_pago_double",
  SeconChip: "",
  thirdChip: "",
  mostrarPaginacion: false,
  IconosEdicion: true,
};

export default function ModalPagosFactura({
  openModal,
  listDataBD,
  setActualizar,
  actualizar,
  setItemSelec,
  xs,
  handleEdit,
  handleDelete,
  getDataItem,
  handlecloseModal,
  servicesEditar,
  servicesDelete,
  services,
  setData,
  openBackdrop,

}) {
  const {
    form,
    error,
    respose,
    loading,
    setResponse,
    handleChange,
    handleBlur,
    handleSubmit,
    setForm,
  } = useForm(
    validationsForm,
    validationsFormSubmit,
    servicesObjet.inicialpago
  );



  const { showNotification } =
    useContext(NotificationContext);

  const [typeSubmit, setTypeSubmit] = useState(null);
  const [totalPago, setTotalPago] = useState(0);

  useEffect(() => {
    if (getDataItem && typeSubmit === "editarPago") {
      handleChange(getDataItem);
    } else {
      handleChange(listDataBD);

      if (Array.isArray(listDataBD["pago"])) {
        const arreysumaricePagosPagos = listDataBD["pago"].reduce(
          (accumulator, currentValue) =>
            accumulator + currentValue.valor_pago_double,
          0
        );

        setTotalPago(arreysumaricePagosPagos);
      }

    }

    setResponse("");
  }, [getDataItem, typeSubmit, listDataBD]);

  useEffect(() => {
    if (respose === "guardar") {
      setForm(servicesObjet.inicialpago);
      setTypeSubmit(null);
      setActualizar(!actualizar)
      showNotification(
        `Se edito la agenda  `,
        `Excelente`,
        "exitosamente",
        "success"
      );
    }
    if (respose === "cancel") {
      handlecloseModal()
      setForm(servicesObjet.inicialpago);
      setTypeSubmit(null);
      showNotification(
        `se cancelo la edicion del paciente `,
        `Excelente`,
        "exitosamente ",
        "warning"
      );
    }
    if (respose === "error") {
      showNotification(
        `no se creo, `,
        `!Error!`,
        "varifica que no exita el paciente",
        "error"
      );
    }
  }, [respose, loading, actualizar, handlecloseModal, setActualizar]);

  const handleEditPago = (e) => {
    handleEdit(e)
    setTypeSubmit("editarPago");

  };
  const handledCrearPago = (e) => {
    setTypeSubmit("crearPago");
  };

  const handleClose = (e) => {
    const name = e.target.name;

    if (name === "cerrar") {
      setResponse("cancel");
      setActualizar(!actualizar);
    } else {
      setForm(servicesObjet.inicialpago);
      setTypeSubmit(null);
    }

  };
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <Dialog open={openModal} onClose={handleClose} maxWidth={"sm"} >
      <Backdrop
        open={openBackdrop}
        sx={{ color: "#fff", backgroundColor: "rgba(0, 0, 0, 0.25)" }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <DialogTitle sx={{ backgroundColor: colorAnalogo600 }}>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="h2" color={colorPrimary50} fontSize={22}>
                Pagos
              </Typography>
            }
          />
          <IconButton
            edge="end"
            aria-label="delete"
            sx={{ marginRight: "2rem", color: colorPrimary50 }}
            onClick={handledCrearPago}
          >
            <ListAltOutlinedIcon />
          </IconButton>
        </ListItem>
      </DialogTitle>
      <Divider variant="middle" />
      <DialogContent >
        <Box >
          <Grid2 container xs={12} spacing={2} margin={"0 0 2rem 0"} >
            {typeSubmit && (
              <form action="" method="post">
                <Grid2 container spacing={2} xs={12}>
                  {Object.values(servicesObjet.objetoPago).map(
                    (
                      {
                        label,
                        typeValueInput,
                        typefieldInput,
                        value,
                        value_boolean,
                        inicialvalue,
                        option,
                        disabled,
                      },
                      index
                    ) => {
                      return (
                        <Grid2 xs={12} md={6} key={index}>
                          <TypeFieldInput
                            name={value}
                            label={label}
                            typeValueInput={typeValueInput}
                            typefieldInput={typefieldInput}
                            value={form[value]}
                            name_boolean={value_boolean}
                            option={option}
                            onChange={handleChange}
                            handleBlur={handleBlur}
                            error={error}

                          />
                        </Grid2>
                      );
                    }
                  )}
                </Grid2>
              </form>
            )}
            {!typeSubmit && (
              <>
                <StyledGrid2 xs={12} md={6} sx={{ display: "flex", flexGrow: "1" }}>
                  <ListItemIcon>
                    <TagIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="h2" noWrap>
                        {listDataBD.numeroFactura}
                      </Typography>
                    }
                    secondary={
                      <Typography variant="h2" noWrap>
                        {listDataBD.codigofactura}
                      </Typography>
                    }
                  />
                </StyledGrid2>
                <StyledGrid2 xs={12} md={6}>
                  <ListItemIcon>
                    <DateRangeIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="h2" noWrap>
                        {dayjs(listDataBD.factura_date).format("YYYY-MM-DD")}
                      </Typography>
                    }
                  />
                </StyledGrid2>

                <StyledGrid2 xs={12} md={6} sx={{ display: "flex", flexGrow: "1" }}>
                  <ListItemIcon>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="h2" noWrap>
                        {listDataBD.nombre_text}
                      </Typography>
                    }
                    secondary={
                      <Typography variant="subtitle1" noWrap>
                        {listDataBD.documentodouble}
                      </Typography>
                    }
                  />
                </StyledGrid2>
                <StyledGrid2 xs={12} md={6}>
                  <ListItemIcon>
                    <PaidIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="h2">
                        <NumericFormat
                          displayType="text"
                          customInput={Typography}
                          thousandSeparator={true}
                          prefix={"$"}
                          decimalScale={2}
                          value={listDataBD.total_factura}
                        />
                      </Typography>
                    }
                  />
                </StyledGrid2>
                <StyledGrid2 xs={12} md={6} sx={{ display: "flex", flexGrow: "1" }}>
                  <ListItemIcon>
                    <AssignmentIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="h2" noWrap>
                        {listDataBD.procedimiento_text}
                      </Typography>
                    }
                  />
                </StyledGrid2>
                <StyledGrid2 xs={12} md={6}>
                  <ListItemIcon>
                    <InsertCommentOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="h2" noWrap>
                        {listDataBD.observaciones_text}
                      </Typography>
                    }
                  />
                </StyledGrid2>
                <StyledGrid2 xs={12}>
                  <ListItemText sx={{ display: "flex"}}
                    primary={
                      <Typography variant="h2" fontSize={"0.8rem"} width={"100px"} >Precio</Typography>
                    }
                    secondary={
                      <Typography variant="h2" sx={{ fontSize: "0.8rem", color: colorPrimary500 }}>
                        <NumericFormat
                          displayType="text"
                          customInput={Typography}
                          thousandSeparator={true}
                          prefix={"$"}
                          decimalScale={2}
                          value={listDataBD.total_factura}
                        />
                      </Typography>

                    }
                  />
                </StyledGrid2 >
                <StyledGrid2 xs={12} >
                  <ListItemText sx={{ display: "flex"}}
                    primary={
                      <Typography variant="h2" fontSize={"0.8rem"} width={"100px"}>Abono</Typography>
                    }
                    secondary={
                      <Typography variant="h2" sx={{ fontSize: "0.8rem", color: colorPrimary500 }}>
                        <NumericFormat
                          displayType="text"

                          customInput={Typography}
                          thousandSeparator={true}
                          prefix={"$"}
                          decimalScale={2}
                          value={totalPago}
                        />
                      </Typography>
                    }
                  />
                </StyledGrid2>
                <StyledGrid2 xs={12} >
                  <ListItemText sx={{ display: "flex", width:"100px" }}
                    primary={
                      <Typography variant="h2" fontSize={"0.8rem"} width={"100px"}>Deuda</Typography>
                    }
                    secondary={
                      <Typography variant="h2" sx={{ fontSize: "0.8rem", color: "#e77779" }}>
                        <NumericFormat
                          displayType="text"
                          customInput={Typography}
                          thousandSeparator={true}
                          prefix={"$"}
                          decimalScale={2}
                          value={listDataBD.total_factura - totalPago}
                        />
                      </Typography>
                    }
                  />
                </StyledGrid2>
              </>
            )}
          </Grid2>
          <Divider sx={{ margin: "2rem 0" }} />

          {!typeSubmit && <BasicTable
            listDataBD={listDataBD.pago}
            objetoTabla={objetoTablaPago}
            handleEdit={handleEditPago}
            handleDelete={handleDelete}
            servicesEditar={servicesEditar}
            servicesDelete={servicesDelete}
            backgroundColor={colorAnalogo600}
          />}

        </Box>
      </DialogContent>
      <DialogActions sx={{ alignItems: "flex-end", flexDirection: isMobile ? "colum" : "row" }}>
        <Box display={"flex"} flexGrow={1} flexDirection={"column"}>

        </Box>

        {!typeSubmit && (
          <Button onClick={handleClose} name="cerrar">
            Cerrar
          </Button>
        )}
        {typeSubmit && (
          <Box display={"flex"} justifyContent="space-between" width={"100%"}>
            <Button onClick={handleClose}>Cancel</Button>
            <Button
              onClick={handleSubmit}
              variant={"contained"}
              data-services={typeSubmit}
              id={listDataBD.id}
              data-codigofactura={listDataBD.codigofactura}
            >
              Guardar pago
            </Button>
          </Box>
        )}
      </DialogActions>
    </Dialog>
  );
}

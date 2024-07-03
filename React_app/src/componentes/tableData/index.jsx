
import {
  Box,
  Chip,
  ListItem,
  ListItemText,
  TablePagination,
  Typography,
  IconButton,
  ListItemIcon,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import TypeFieldInput from "../typefieldInput";
import dayjs from "dayjs";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { PatternFormat } from "react-number-format";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import { colorPrimary50} from "../../globalStyle/variables";





export default function BasicTable({
  listDataBD,
  objetoTabla,
  handleItem,
  page,
  rowsPerPage,
  setPage,
  setRowsPerPage,
  count,
  handleEdit,
  handleDelete,
  handlePagos,
  servicesEditar,
  servicesDelete,
  backgroundColor
}) {
  const [selectedRow, setSelectedRow] = useState(null);


  const handleRowSelect = (e, rowIndex) => {
    setSelectedRow(rowIndex);
    if (typeof handleItem === "function") {
      handleItem(e);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
  };

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <>
      {Array.isArray(listDataBD) &&
        listDataBD != null &&
        listDataBD.map((element, index) => {
          return (
            <Box
              data-codfactura= {element.id || null}
              padding={"1rem"}
              key={index}
              id={element.idpaciente}
              onClick={(e) => {
                handleRowSelect(e, index);
              }}
              display={"flex"}
              flexWrap= "wrap"
              sx={{backgroundColor:selectedRow === index && colorPrimary50}}
              borderBottom={`1px solid ${colorPrimary50}`}
              
            >
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                flexDirection={"column"}
                flexGrow={1}
                flexWrap={isMobile ? "wrap" : "nowrap"}
                width={isMobile ? "100%" : "200px"}
           
              >
                <ListItemText
                  primary={
                    <Typography variant="h2" sx={{ fontSize: 14 }}>
                      {element[objetoTabla.header]}
                    </Typography>
                  }
                />
                <ListItemText
                  primary={
                    <Typography variant="subtitle1">
                      {element[objetoTabla.body]}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="subtitle2">
                      {element[objetoTabla.subheader]}
                    </Typography>
                  }
                />
                <ListItemText
                  primary={
                    <Typography variant="subtitle1">
                      {objetoTabla.date &&
                        element[objetoTabla.date]}
                    </Typography>
                  }
                />
              </Box>

              <Box
                display={"flex"}
                justifyContent={"space-between"}
                flexGrow={1}
                alignItems={"center"}
                gap={"1rem"}
                flexWrap={"nowrap"}
              >
                <Box
                  display="flex"
                  flexGrow={isMobile ? 0:1}
                  flexDirection={isMobile && "column"}
                  gap={"1rem"}
                  
                  
                >
                  {objetoTabla.header2 && (
                    <ListItem>
                      <ListItemText
                        primary={
                          <Typography variant="h2">
                            {element[objetoTabla.header2]}
                          </Typography>
                        }
                      />
                    </ListItem>
                  )}
                  {objetoTabla.dateCrate && (
                    <ListItem>
                      <ListItemIcon>
                        <CalendarMonthIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography variant="subtitle1">
                            {dayjs(element[objetoTabla.dateCrate]).format(
                              "YYYY-MM-DD"
                            )}
                          </Typography>
                        }
                      />
                    </ListItem>
                  )}
                  {objetoTabla.horatime && (
                    <ListItem>
                      <ListItemIcon>
                        <PendingActionsIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography variant="subtitle1">
                            {element[objetoTabla.horatime]}
                          </Typography>
                        }
                      />
                    </ListItem>
                  )}
                  {objetoTabla.telefono && (
                    <ListItem>
                      <ListItemIcon>
                        <PermPhoneMsgIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <PatternFormat
                            displayType="text"
                            value={element[objetoTabla.telefono]}
                            format="(###) #### ###"
                          />
                        }
                      />
                    </ListItem>
                  )}
                  {objetoTabla.firsChip && (
                    <TypeFieldInput
                      typefieldInput="chipCurrency"
                      type={"currency"}
                      label={element[objetoTabla.firsChip]}
                    />
                  )}
                  {objetoTabla.SeconChip && (
                    <TypeFieldInput
                      typefieldInput="chip"
                      type={"chip"}
                      label={element[objetoTabla.SeconChip]}
                    />
                  )}
                  {objetoTabla.thirdChip && (
                    <Chip label={element[objetoTabla.thirdChip]} />
                  )}
                </Box >
                
                  {objetoTabla.IconosEdicion && (
                    <Box display={"flex"} gap={"1rem"} justifyContent={"space-between"} sx={{flexDirection:{xs:"column", sm:"row"}}} flexWrap={"nowrap"}>
                      <ListItem>
                        
                      <IconButton
                        id={element.id}
                        data-services={servicesEditar}
                        data-name={element[objetoTabla.header]}
                        onClick={handleEdit}
                        
                      >
                        <ModeEditIcon />
                      </IconButton>
                    </ListItem>
                    <ListItem>
                      <IconButton 
                        id={element.id} 
                        data-services={servicesDelete}
                        data-name={element[objetoTabla.header]}
                        onClick={handleDelete}  
                      >
                        <DeleteIcon />
                      </IconButton>
                      </ListItem>
                      {objetoTabla.iconPago && (
                        <ListItem>
                        <IconButton 
                          id={element.id} 
                          data-services= "pagosFactura"
                          data-name={element[objetoTabla.header]}
                          onClick={handlePagos}
                        >
                          <ReceiptIcon />
                        </IconButton>
                        </ListItem>
                      )}

                    </Box>
                    
                  )}
                
              </Box>
            </Box>
          );
        })}

      <Box >
        {objetoTabla.mostrarPaginacion && (
          <TablePagination

            component="div"
            rowsPerPageOptions={[-1]}
            
            count={count}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        )}
      </Box>
    </>
  );
}

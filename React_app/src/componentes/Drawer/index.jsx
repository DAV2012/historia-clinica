
import List from "@mui/material/List";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { Box, IconButton, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

import MuiDrawer from "@mui/material/Drawer";
import AlignHorizontalRightIcon from "@mui/icons-material/AlignHorizontalRight";
import ReorderIcon from "@mui/icons-material/Reorder";
import ScheduleSendIcon from "@mui/icons-material/ScheduleSend";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import PieChartIcon from '@mui/icons-material/PieChart';
import {

  colorPrimary50,
  colorPrimary500,
} from "../../globalStyle/variables";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const DrawerHeader = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  backgroundColor: colorPrimary500,
});

const DrawerContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
  color: colorPrimary50,
  backgroundColor: colorPrimary500,
  
});

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(6)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(6)} + 1px)`,
  },
});

const drawerWidth = 200;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  backgroundColor: colorPrimary500,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function BasicDrawer() {

  
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{ backgroundColor: colorPrimary500,margin:0,padding:0 }}
      
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerOpen} sx={{ color: colorPrimary50 }}>
          {open ? <ReorderIcon /> : <AlignHorizontalRightIcon />}
        </IconButton>
      </DrawerHeader>
      <DrawerContainer>
        <List>
          <ListItem
            disablePadding
            sx={{ justifyContent: "center", flexGrow: 1 }}
          >
            <ListItemButton onClick={() => handleNavigate("/dashboard")}>
              <ListItemIcon>
                <PieChartIcon sx={{ color: colorPrimary50 }} />
              </ListItemIcon>
              <ListItemText primary={<Typography variant={"h2"} color={colorPrimary50}>Dashboard</Typography>} />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{ justifyContent: "center", flexGrow: 1 }}
          >
            <ListItemButton onClick={() => handleNavigate("/agenda")}>
              <ListItemIcon>
                <ScheduleSendIcon sx={{ color: colorPrimary50 }} />
              </ListItemIcon>
              <ListItemText primary={<Typography variant={"h2"} color={colorPrimary50}>Agenda</Typography>} />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{ justifyContent: "center", flexGrow: 1 }}
          >
            <ListItemButton onClick={() => handleNavigate("/paciente")}>
              <ListItemIcon sx={{ color: colorPrimary50 }}>
                <FolderSharedIcon color="red" />
              </ListItemIcon>
              <ListItemText  primary={<Typography variant={"h2"} color={colorPrimary50}>Pacientes</Typography>} />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{ justifyContent: "center", flexGrow: 1 }}
          >
            <ListItemButton onClick={() => handleNavigate("/datos")}>
              <ListItemIcon sx={{ color: colorPrimary50 }}>
                <FindInPageIcon />
              </ListItemIcon>
              <ListItemText  primary={<Typography variant={"h2"} color={colorPrimary50}>Información</Typography>} />
            </ListItemButton>
          </ListItem>
        </List>
      </DrawerContainer>
    </Drawer>
  );
}

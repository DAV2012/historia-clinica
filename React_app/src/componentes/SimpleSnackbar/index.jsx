import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {  useContext,  useMemo} from "react";
import {
  Alert,
  AlertTitle,
  Collapse,
  ListItem,
  Slide,
  Stack,
} from "@mui/material";
import { NotificationContext } from "../../contexts/FirebaseContext";

export default function SimpleSnackbar() {
  const {hideNotification, notifications } = useContext(NotificationContext);

  
  const handleCloseSnackBar = (id,reason) => {
    if (reason === 'clickaway') {
      return;
    }
    hideNotification(id);
  };


  const action = (id) => (
    <Stack direction="row" spacing={2}>
      <Button
        color="secondary"
        size="small"
        onClick={(e,reason) => handleCloseSnackBar(id,reason)}
      >
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={(e,reason) => handleCloseSnackBar(id,reason)}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Stack>
  );

  return useMemo(() => (

          notifications.map((notification, index) => (
          <Snackbar
            key={notification.id}
            open={true}
            autoHideDuration={4000}
            onClose={(e,reason) => handleCloseSnackBar(notification.id,reason)}
            style={{ marginBottom: `${index * 90}px` }}
            action={action(notification.id)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Slide in={notification.isOpen} direction="up" mountOnEnter unmountOnExit>
              <ListItem>
                <Collapse in={notification.isOpen}>
                  <Alert
                    onClose={(e,reason) => handleCloseSnackBar(notification.id,reason)}
                    severity={notification.severity}
                    
                  >
                  {notification.title && <AlertTitle sx={{fontSize:"14px",fontWeight:700,color:"currentcolor"}}>{notification.title}</AlertTitle>}
                  {notification.message}
                  {notification.strong && <strong>{notification.strong}</strong>}
                  </Alert>
                </Collapse>
              </ListItem>
            </Slide>
          </Snackbar>
        ))

  ))
}

import React, { createContext, useContext, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { NotificationContext } from "./FirebaseContext";
import SimpleSnackbar from "../componentes/SimpleSnackbar";

export function NotificationProvider({ children }) {
    const [notifications, setNotifications] = useState([]);

    const showNotification = (message,title,strong, severity) => {
        const newNotification = { id: uuidv4(), message,title,strong, severity, isOpen: true };
    
        // Check if there are already 3 notifications
        if (notifications.length >= 3) {
          // Remove the last notification (the oldest one) and add the new notification to the beginning
          const updatedNotifications = [newNotification, ...notifications.slice(0, 2)];
          setNotifications(updatedNotifications);
        } else {
          // Add the new notification to the beginning of the array
          setNotifications((prevNotifications) => [newNotification, ...prevNotifications]);
        }
      };
    
      const hideNotification = (id) => {
        setNotifications((prevNotifications) =>
          prevNotifications.map((n) => (n.id === id ? { ...n, isOpen: false } : n))
        );
      };

      const data = {
        hideNotification,
        showNotification,
        notifications,
      };
  

  return (
    <NotificationContext.Provider value={data}>
      {children}
      <SimpleSnackbar />
    </NotificationContext.Provider>
  );
}

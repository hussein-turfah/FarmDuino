import { Badge, Box, Link, List, ListItem, ListItemText, Modal } from '@mui/material';
import styles from './navbar.module.css';
import User from '../../pages/user-settings/settings';
import React, { useEffect, useState } from 'react';
import UseHttp from '../../hooks/http-request';

const notifications_icon = process.env.PUBLIC_URL + '/assets/icons/notifications.png';

const Navbar = () => {
  // for notifications modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const notificationsData = async () => {
      try {
        const notifications = await UseHttp("user-logs", "GET", "",{Authorization: "bearer " + localStorage.getItem("token")})
        setNotifications(notifications);
      } catch (error) {
        console.log(error);
      }
    };
    notificationsData();
  }, []);



  return (
      <div className={styles.main_container}>
            <h3 className={styles.name}>
              Hussein Turfah
            </h3>
        
        <Link className={styles.logo_container} onClick={handleOpen}>
          <Badge badgeContent={notifications.length} color="error">
            <img src={notifications_icon} alt="logo" className={styles.logo} />
          </Badge>
        </Link>
        <Modal className={styles.modal} sx={{ outline: 'none', "&:focus": { outline: 'none' } }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box className={styles.modal_container}>
          <h1 className={styles.modal_header}>Notification History</h1>
          <List className={styles.list} >
            {notifications.map((notification) => (
            <ListItem key={notification.id}>
              <ListItemText  primary={notification.message} className={styles.modal_body} />
              </ListItem>
            ))}
          </List>
        </Box>
        </Modal>
      </div>  
      )
}
export default Navbar;
import { Badge, Box, Link, Modal } from '@mui/material';
import styles from './navbar.module.css';
import User from '../../pages/user-settings/settings';
import React from 'react';
const notifications = process.env.PUBLIC_URL + '/assets/icons/notifications.png';
const profile = process.env.PUBLIC_URL + '/assets/icons/profile.png';

const Navbar = () => {
  // for notifications modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
      <div className={styles.main_container}>
          <h3 className={styles.name}>
            Hussein Turfah
          </h3>
        <Link className={styles.logo_container} onClick={handleOpen}>
          <Badge badgeContent={15} color="error">
            <img src={notifications} alt="logo" className={styles.logo} />
          </Badge>
        </Link>
        <Modal className={styles.modal}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box className={styles.modal_container}>
          <h1 className={styles.modal_header}>Notification History</h1>
          <div className={styles.modal_body}>
            <h3 className={styles.modal_text}>
              No new notifications
            </h3>
          </div>
        </Box>
        </Modal>
      </div>  
      )
}
export default Navbar;
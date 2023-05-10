import React from 'react'
import styles from './admin-sidebar.module.css'
import { Modal, Box, TextField, Button } from '@mui/material';  
import { Link } from 'react-router-dom';


const logo = process.env.PUBLIC_URL + "/assets/images/logo1.svg";
const dashboard = process.env.PUBLIC_URL + "/assets/icons/dashboard.png";
const temperature = process.env.PUBLIC_URL + "/assets/icons/temperature.png";
const humidity = process.env.PUBLIC_URL + "/assets/icons/humidity.png";
const soil_moisture = process.env.PUBLIC_URL + "/assets/icons/soil_moisture.png";
const light_intensity = process.env.PUBLIC_URL + "/assets/icons/light_intensity.png";
const account_settings = process.env.PUBLIC_URL + "/assets/icons/account_settings.png";


const AdminSidebar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const signOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };


  return (
    <div className={styles.sidebar}>
      <div className={styles.logo_container}>
        <img src={logo} alt="logo" className={styles.logo}/>
      </div>
      <div className={styles.buttons_container}>
        <Link href="/admin-dashboard" className={styles.buttons}>
          <div className={styles.logos}>
            <img src={dashboard} alt="logo" className={styles.buttons_logo}/>
          </div>
            <h3 className={styles.links}>Dashboard</h3>
        </Link>
        <Link href="/admin-temperature" className={styles.buttons}>
          <div className={styles.logos}>
            <img src={temperature} alt="logo" className={styles.buttons_logo}/>
          </div>
            <h3 className={styles.links}>Temperature</h3>
        </Link>
        <Link onClick={handleOpen} className={styles.buttons}>
          <div className={styles.logos}>
            <img src={account_settings} alt="logo" className={styles.buttons_logo}/>
          </div>
            <h3 className={styles.links}>Account Settings</h3>
        </Link>
        <Modal className={styles.modal}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.modal_container}>
          <h1 className={styles.modal_header}>Account Settings</h1>
          <div className={styles.fields_container}>
            <TextField id="outlined-basic" label="Change Email Address" variant="outlined" />
            <TextField id="outlined-basic" label="Old Password" variant="outlined" />
            <TextField id="outlined-basic" label="New Password" variant="outlined" />
            <TextField id="outlined-basic" label="Change Plant Name" variant="outlined" />
          <div className={styles.modal_buttons}>
            <Button variant="outlined" sx={{background: '#65BEFF', height: '100%', width: '40%', padding: '3%', color: 'white',":hover": {borderColor: '#9747FF', backgroundColor:"#9747FF" }}}>
              Save Changes
            </Button>
            <Button variant="outlined" onClick={signOut} sx={{background: '#9747FF', height: '100%', width: '40%', padding: '3%', color: 'white',":hover": {borderColor: '#65BEFF', backgroundColor:"red" }}}>
              logout
            </Button>
          </div>
        </div>
        </Box>
      </Modal>
      </div>
    </div>
  );
};
export default AdminSidebar;


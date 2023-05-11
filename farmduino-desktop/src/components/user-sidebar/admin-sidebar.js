import React, { useEffect, useRef, useState } from 'react'
import styles from './sidebar.module.css'
import { Modal, Box, TextField, Button, Link } from '@mui/material';  
import UseHttp from '../../hooks/http-request';


const logo = process.env.PUBLIC_URL + "/assets/images/logo1.svg";
const dashboard = process.env.PUBLIC_URL + "/assets/icons/dashboard.png";
const sensors = process.env.PUBLIC_URL + "/assets/icons/sensors.png";
const ticker = process.env.PUBLIC_URL + "/assets/icons/ticker.png";
const account_settings = process.env.PUBLIC_URL + "/assets/icons/account_settings.png";


const AdminSidebar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const product_name_ref=useRef("") 
  const price_ref=useRef("");
  
  const [openTicker, setOpenTicker] = useState(false);
  const handleOpenTicker = () => setOpenTicker(true);
  const handleCloseTicker = () => setOpenTicker(false);

  const signOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };


  const insertTickerData = async () => {
    const product_name = product_name_ref.current.value;
    const price = price_ref.current.value;
  
    const form_data = new FormData();

    form_data.append("product_name", product_name);
    form_data.append("price", price);

    const data = await UseHttp("admin/add-ticker-element", "POST",form_data,{Authorization: "bearer " + localStorage.getItem("token")});
    if (data.error === false) {
      alert("error")
    }else{
      const product_name = product_name_ref.current.value = "";
      const price = price_ref.current.value = "" ;
    }
  }

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
        <Link href='/admin-sensors' className={styles.buttons}>
          <div className={styles.logos}>
            <img src={sensors} alt="logo" className={styles.buttons_logo}/>
          </div>
            <h3 className={styles.links}>Sensors</h3>
        </Link>
        <Link onClick={handleOpenTicker} className={styles.buttons}>
          <div className={styles.logos}>
            <img src={ticker} alt="logo" className={styles.buttons_logo}/>
          </div>
            <h3 className={styles.links}>Add to Ticker</h3>
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

      <Modal className={styles.modal}
        open={openTicker}
        onClose={handleCloseTicker}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.ticker_modal_container}>
          <h1 className={styles.modal_header}>Insert to Ticker</h1>
          <div className={styles.fields_container}>
            <TextField id="outlined-basic" label="Element Name" variant="outlined" inputRef={product_name_ref} />
            <TextField id="outlined-basic" label="Market Price" variant="outlined" inputRef={price_ref} />
          <div className={styles.ticker_modal_buttons}>
            <Button variant="outlined" onClick={insertTickerData} sx={{background: '#65BEFF', height: '100%', width: '40%', padding: '3%', color: 'white',":hover": {borderColor: '#9747FF', backgroundColor:"#9747FF" }}}>
              Add Element
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


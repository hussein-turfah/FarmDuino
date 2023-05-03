import * as React from 'react';
import { TextField, Button } from '@mui/material/';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers/';
import styles from './register.module.css';

const register_image = process.env.PUBLIC_URL + '/assets/images/register.jpg';

const Register = () => {
  const locale = 'zh-cn';

  return (
    <div className={styles.body}>
      <div className={styles.image_container}>
        <img src={register_image} alt="Register" className={styles.image} />
      </div>
      <div className={styles.main_container}>
        <h1 className={styles.h1}>Register</h1>
        <div className={styles.submain_container}>
          {/* <div className={styles.input_}></div> */}
          <div className={styles.name_fields}>
            <TextField className={styles.field} id="outlined-basic" label="First Name" variant="outlined" required/>
            <TextField className={styles.field} id="outlined-basic" label="Last Name" variant="outlined" required/>
          </div>
            <TextField className={styles.textfield_container} id="outlined-basic" label="Email" variant="outlined" type= "email" required/>
            <TextField className={styles.textfield_container} id="outlined-basic" label="Password" variant="outlined" type="password" required/>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
              <DatePicker className={styles.textfield_container} label="Date" defaultValue={dayjs('2023-12-10')} />
            </LocalizationProvider>
            <TextField className={styles.textfield_container} id="outlined-basic" label="Favorite Color" variant="outlined" required/>
            <TextField className={styles.textfield_container} id="outlined-basic" label="Plant Name" variant="outlined" required/>
          <div className={styles.button}>
            <Button variant='outlined' sx={{background:'#9747FF',height:'100%',width:'50%', padding: '4%', color:'white',":hover":{color:'black',borderColor:'#9747FF'}}}>Register</Button>
          </div>
            <p className={styles.p}>Already have an account? <a href="/login">Login</a></p>
        </div>
      </div>
    </div>
  );
};
export default Register;
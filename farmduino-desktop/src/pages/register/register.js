import * as React from 'react';
import { useRef } from 'react';
import { TextField, Button } from '@mui/material/';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers/';
import styles from './register.module.css';
import { useNavigate } from 'react-router';
import UseHttp from '../../hooks/http-request';

const register_image = process.env.PUBLIC_URL + '/assets/images/register.jpg';
const image = process.env.PUBLIC_URL + '/assets/images/colored_logo.svg';

const Register = () => {
  const locale = 'zh-cn';
  const navigate = useNavigate();

  const first_name_ref = useRef("")
  const last_name_ref = useRef("")
  const email_ref = useRef("")
  const password_ref = useRef("")
  const dob_ref = useRef("")
  const favorite_color_ref = useRef("")
  const plant_name_ref = useRef("")

  const sendData = async ()=>{
    const first_name = first_name_ref.current.value;
    const last_name = last_name_ref.current.value;
    const email = email_ref.current.value;
    const password = password_ref.current.value;
    const dob = dob_ref.current.value;
    const favorite_color = favorite_color_ref.current.value;
    const plant_name = plant_name_ref.current.value;

    const form_data = new FormData();
    form_data.append("first_name",first_name)
    form_data.append("last_name",last_name)
    form_data.append("email",email)
    form_data.append("password",password)
    form_data.append("dob",dob)
    form_data.append("favorite_color",favorite_color)
    form_data.append("plant_name",plant_name)

    const data = await UseHttp("register","POST",form_data)

    if (data.success) navigate("*")
  }
  

  return (
    <div className={styles.body}>
      <div className={styles.image_container}>
        <img src={register_image} alt="Register" className={styles.image} />
      </div>
      <div className={styles.main_container}>
      <img src={image} alt="logo" className={styles.logo} />
        <h1 className={styles.h1}>Register</h1>
        <div className={styles.submain_container}>
          <div className={styles.name_fields}>
            <TextField className={styles.field} id="outlined-basic" label="First Name" variant="outlined" required inputRef={first_name_ref}/>
            <TextField className={styles.field} id="outlined-basic" label="Last Name" variant="outlined" required inputRef={last_name_ref}/>
          </div>
            <TextField className={styles.textfield_container} id="outlined-basic" label="Email" variant="outlined" type= "email" required inputRef={email_ref}/>
            <TextField className={styles.textfield_container} id="outlined-basic" label="Password" variant="outlined" type="password" required inputRef={password_ref}/>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
              <DatePicker className={styles.textfield_container} label="Date of Birth" format="YYYY/MM/DD" defaultValue={dayjs('2023-12-10')} required inputRef={dob_ref}/>
            </LocalizationProvider>
            <TextField className={styles.textfield_container} id="outlined-basic" label="Favorite Color" variant="outlined" required inputRef={favorite_color_ref}/>
            <TextField className={styles.textfield_container} id="outlined-basic" label="Plant Name" variant="outlined" required inputRef={plant_name_ref}/>
          <div className={styles.button}>
            <Button variant='outlined' sx={{background:'#9747FF',height:'100%',width:'100%', padding: '4%', color:'white',":hover":{color:'black',borderColor:'#9747FF'}}} onClick={sendData}>Register</Button>
          </div>
            <p className={styles.p}>Already have an account? <a href="*">Login</a></p>
        </div>
      </div>
    </div>
  );
};
export default Register;
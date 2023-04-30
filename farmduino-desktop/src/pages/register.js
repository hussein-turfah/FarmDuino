import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button  from '@mui/material/Button';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';


const Register = () => {
  // const [locale, setLocale] = React.useState('zh-cn');
  const locale = 'zh-cn';
  
  return (
    <div>
      <h1>Register</h1>
      <div>
        <div>
          <TextField id="outlined-basic" label="First Name" variant="outlined" required/>
          <TextField id="outlined-basic" label="Last Name" variant="outlined" required/>
        </div>
        <div>
          <TextField id="outlined-basic" label="Email" variant="outlined" type= "email" required/>
        </div>
        <div>
          <TextField id="outlined-basic" label="Password" variant="outlined" type="password" required/>
        </div>
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
            <DatePicker label="Date" defaultValue={dayjs('2023-12-10')} />
          </LocalizationProvider>
        </div> 
        <div>
          <TextField id="outlined-basic" label="Favorite Color" variant="outlined" required/>
        </div>
        <div>
          <TextField id="outlined-basic" label="Plant Name" variant="outlined" required/>
        </div>
      </div>
      <div>
        <Button variant="outlined">Register</Button>
      </div>
    </div>
  );
};
export default Register;
import TextField from '@mui/material/TextField';

const Register = () => {
  return (
    <div>
      <h1>Register</h1>
      <div>
        <div>
          <TextField id="outlined-basic" label="First Name" variant="outlined" />
          <TextField id="outlined-basic" label="Last Name" variant="outlined" />
        </div>
        <div>
          <TextField id="outlined-basic" label="Email" variant="outlined" type= "email" />
        </div>
        <div>
          <TextField id="outlined-basic" label="Password" variant="outlined" type="password" />
        </div>
        <div>
          <TextField id="outlined-basic" label="Date of Birth" variant="outlined" type="date"/>
        </div>  
      </div>
    </div>
  );
};
export default Register;
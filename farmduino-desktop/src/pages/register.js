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
          <TextField id="outlined-basic" label="Email" variant="outlined" />
        </div>
      </div>
    </div>
  );
};
export default Register;
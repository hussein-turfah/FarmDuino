import TextField from '@mui/material/TextField';
import Button  from '@mui/material/Button';

const Register = () => {
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
          <TextField id="outlined-basic" label="Date of Birth" variant="outlined" type="date" required/>
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
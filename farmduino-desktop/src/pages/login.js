import { TextField } from "@mui/material";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <div>
        <div>
          <TextField id="outlined-basic" label="Email" variant="outlined" type="email" required/>
        </div>
        <div>
          <TextField id="outlined-basic" label="Password" variant="outlined" type="password" required/>
        </div>
        <div>
          <Button variant="outlined">Register</Button>
        </div>
      </div>
    </div>
  );
};
export default Login;

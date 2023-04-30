import { TextField, Button, Link } from "@mui/material";

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
          <Button variant="outlined">Login</Button>
        </div>
        <div>
          <Link href="/forgot-password">Forgot Password?</Link>
          <Link href="/register">Don't have an account? Register</Link>
        </div>
      </div>
    </div>
  );
};
export default Login;

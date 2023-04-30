import { TextField, Button, Link } from "@mui/material";
const LoginImage = process.env.PUBLIC_URL + '/assets/images/login.jpg';

const Login = () => {
  return (
    <div className="main-login-container">
      <img src={LoginImage} alt="Login" className="image" />
      <h2>Login</h2>
      <div className="submain-container">
        <div className="field-container">
          <TextField id="outlined-basic" label="Email" variant="outlined" type="email" required/>
        </div>
        <div className="field-container">
          <TextField id="outlined-basic" label="Password" variant="outlined" type="password" required/>
        </div>
        <div className="button-container">
          <Button variant="outlined">Login</Button>
        </div>
        <div className="links-container">
          <Link href="/forgot-password">Forgot Password?</Link>
          <Link href="/register">Don't have an account? Register</Link>
        </div>
      </div>
    </div>
  );
};
export default Login;

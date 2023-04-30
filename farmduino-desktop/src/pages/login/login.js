import { TextField, Button, Link } from "@mui/material";
import './login.css';

const LoginImage = process.env.PUBLIC_URL + '/assets/images/login.jpg';

const Login = () => {
  return (
    <div className="body">
      <div className="image-container">
        <img src={LoginImage} alt="Login" className="image" />
      </div>
      <div className="main-container">
        <h1 className="h1">Login</h1>
        <div className="submain-container">
          <div className="textfield-container">
          <TextField className="field" id="outlined-basic" label="Email" variant="outlined" type="email" required/>
            <TextField className="field" id="outlined-basic" label="Password" variant="outlined" type="password" required/>
          </div>
            <Button variant="outlined">Login</Button>
            <Link href="/">Forgot Password?</Link>
            <Link href="/">Don't have an account? Register</Link>
        </div>
      </div>
    </div>
  );
};
export default Login;

import { TextField, Button, Link } from "@mui/material";
import styles from "./login.module.css";
import { useNavigate } from "react-router";
import { useRef } from "react";
import UseHttp from "../../hooks/http-request";
const image = "../../assets/images/colored_logo.svg";

const LoginImage = process.env.PUBLIC_URL + '/assets/images/login.jpg';

const Login = () => {
  const navigate = useNavigate();
  const email_ref=useRef("") 
  const password_ref=useRef("");
  
  const saveToken = async () => {
    const email = email_ref.current.value;
    const password = password_ref.current.value;
    
    const form_data = new FormData();

    form_data.append("email", email);
    form_data.append("password", password);

    const data = await UseHttp("login", "POST",form_data);
    if(data.user.is_admin==0) {
      localStorage.setItem('token', data.token);
      navigate("/dashboard")
    }else if(data.user.is_admin==1) {
      navigate("/admin-dashboard")
      localStorage.setItem('is_admin', data.user.is_admin)
      localStorage.setItem('token', data.token); 
    }
    
  }
  return (
    <div className={styles.body}>
      <div className={styles.image_container}>
        <img src={LoginImage} alt="Login" className={styles.image} />
      </div>
      <div className={styles.main_container}>
          <img src={image} alt="logo" className={styles.logo} />
        <h1 className={styles.h1}>Login</h1>
        <div className={styles.submain_container}>
          <div className={styles.textfield_container}>
            <TextField className={styles.field} id="outlined-basic" label="Email" variant="outlined" type="email" required inputRef={email_ref} />
            <TextField className={styles.field} id="outlined-basic" label="Password" variant="outlined" type="password" required inputRef={password_ref} />
          </div>
          <Button variant="outlined" sx={{
            background: '#9747FF', height: '100%', width: '80%', padding: '3%', color: 'white',
            ":hover": { color: 'black', borderColor: '#9747FF' }
          }}
            onClick={saveToken}>
            Login
          </Button>
        </div>
        <div>
          <p className={styles.links}>Don't have an account? <a href="/register">Register</a></p>
          <p className={styles.links}><a href="/forgot-password">Reset password</a></p>
        </div>
      </div>
    </div>
  );
};
export default Login;

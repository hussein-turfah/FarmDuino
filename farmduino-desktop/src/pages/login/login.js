import { TextField, Button, Link } from "@mui/material";
import styles from "./login.module.css";

const LoginImage = process.env.PUBLIC_URL + '/assets/images/login.jpg';

const Login = () => {
  return (
    <div className={styles.body}>
      <div className={styles.image_container}>
        <img src={LoginImage} alt="Login" className={styles.image} />
      </div>
      <div className={styles.main_container}>
        <h1 className={styles.h1}>Login</h1>
        <div className={styles.submain_container}>
          <div className={styles.textfield_container}>
            <TextField className={styles.field} id="outlined-basic" label="Email" variant="outlined" type="email" required/>
            <TextField className={styles.field} id="outlined-basic" label="Password" variant="outlined" type="password" required/>
          </div>
            <Button variant="outlined" sx={{background:'#9747FF',height:'100%',width:'30%', padding: '3%', color:'white',":hover":{color:'black',borderColor:'#9747FF'}}}>Login</Button>
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

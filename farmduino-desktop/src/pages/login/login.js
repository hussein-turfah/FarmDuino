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
            <Button variant="outlined">Login</Button>
            <Link href="/">Forgot Password?</Link>
            <Link href="/">Don't have an account? Register</Link>
        </div>
      </div>
    </div>
  );
};
export default Login;

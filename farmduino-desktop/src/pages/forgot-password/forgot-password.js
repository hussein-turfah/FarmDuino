import { TextField, Button } from "@mui/material";
import styles from "./forgot-password.module.css";
const image = "../../assets/images/colored_logo.svg";

const forgot_password_image = process.env.PUBLIC_URL + '/assets/images/forgot-password.jpg';

const ForgotPassword = () => {
  return (
    <div className={styles.body}>
       <div className={styles.image_container}>
        <img src={forgot_password_image} alt="ForgotPassword" className={styles.image} />
      </div>
      <div className={styles.main_container}>
        <img src={image} alt="logo" className={styles.logo} />
        <h1 className={styles.h1}>Forgot Password</h1>
        <div className={styles.submain_container}>
          <div className={styles.textfield_container}>
            <TextField className={styles.field} id="outlined-basic" label="Email" variant="outlined" type="email" required/>
            <TextField className={styles.field} id="outlined-basic" label="Favorite Color" variant="outlined" type="text" required/>
          </div>
            <Button variant="outlined" sx={{background:'#9747FF',height:'100%',width:'40%', padding: '4%', color:'white',":hover":{color:'black',borderColor:'#9747FF'}}}>Reset Password</Button>
        </div>
        <div>
            <p className={styles.links}>Remembered your password? <a href="/login">Login</a></p>
            <p className={styles.links}>Don't have an account? <a href="/register">Register</a></p>
        </div>
      </div>
    </div>
  );
};
export default ForgotPassword;
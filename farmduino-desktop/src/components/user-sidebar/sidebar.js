import { Link } from "@mui/material";
import styles from "./sidebar.module.css";
const logo = process.env.PUBLIC_URL + "/assets/images/logo1.svg";
const dashboard = process.env.PUBLIC_URL + "/assets/icons/dashboard.png";
const temperature = process.env.PUBLIC_URL + "/assets/icons/temperature.png";
const humidity = process.env.PUBLIC_URL + "/assets/icons/humidity.png";
const soil_moisture = process.env.PUBLIC_URL + "/assets/icons/soil_moisture.png";
const light_intensity = process.env.PUBLIC_URL + "/assets/icons/light_intensity.png";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo_container}>
        <img src={logo} alt="logo" className={styles.logo}/>
      </div>
      <div className={styles.buttons_container}>
        <Link href="/dashboard" className={styles.buttons}>
          <div className={styles.logos}>
            <img src={dashboard} alt="logo" className={styles.buttons_logo}/>
          </div>
            <h3 className={styles.links}>Dashboard</h3>
        </Link>
        <Link href="/temperature" className={styles.buttons}>
          <div className={styles.logos}>
            <img src={temperature} alt="logo" className={styles.buttons_logo}/>
          </div>
            <h3 className={styles.links}>Temperature</h3>
        </Link>
        <Link href="/humidity" className={styles.buttons}>
          <div className={styles.logos}>
            <img src={humidity} alt="logo" className={styles.buttons_logo}/>
          </div>
            <h3 className={styles.links}>Humidity</h3>
        </Link>
        <Link href="/soil-moisture" className={styles.buttons}>
          <div className={styles.logos}>
            <img src={soil_moisture} alt="logo" className={styles.buttons_logo}/>
          </div>
            <h3 className={styles.links}>Soil Moisture</h3>
        </Link>
        <Link href="/light-intensity" className={styles.buttons}>
          <div className={styles.logos}>
            <img src={light_intensity} alt="logo" className={styles.buttons_logo}/>
          </div>
            <h3 className={styles.links}>Light Intensity</h3>
        </Link>
      </div>
    </div>
  );
};
export default Sidebar;
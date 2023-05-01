import { Link } from "@mui/material";
import styles from "./sidebar.module.css";
const logo = process.env.PUBLIC_URL + "/assets/images/logo.png";
const dashboard = process.env.PUBLIC_URL + "/assets/images/dashboard.png";
const temperature = process.env.PUBLIC_URL + "/assets/images/temperature.png";
const humidity = process.env.PUBLIC_URL + "/assets/images/humidity.png";
const soil_moisture = process.env.PUBLIC_URL + "/assets/images/soil_moisture.png";
const light_intensity = process.env.PUBLIC_URL + "/assets/images/light_intensity.png";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo_container}>
        <img src={logo} alt="logo" className={styles.logo}/>
      </div>
      <div className={styles.buttons_container}>
        <div className="buttons">
          <img src={dashboard} alt="logo" className={styles.dashboard_logo}/>
          <Link href="/dashboard" className={styles.links}>Dashboard</Link>
        </div>
        <div className="buttons">
        <img src={logo} alt="logo" className={styles.dashboard_logo}/>
          <Link href="/dashboard" className={styles.links}>Dashboard</Link>
        </div>
        <div className="buttons">
        <img src={logo} alt="logo" className={styles.dashboard_logo}/>
          <Link href="/dashboard" className={styles.links}>Dashboard</Link>
        </div>
        <div className="buttons">
        <img src={logo} alt="logo" className={styles.dashboard_logo}/>
          <Link href="/dashboard" className={styles.links}>Dashboard</Link>
        </div>
        <div className="buttons">
        <img src={logo} alt="logo" className={styles.dashboard_logo}/>
          <Link href="/dashboard" className={styles.links}>Dashboard</Link>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
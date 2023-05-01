import { Link } from "@mui/material";
import styles from "./sidebar.module.css";
const logo = process.env.PUBLIC_URL + "/assets/images/logo.png";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        {/* <img src={logo} alt="logo" /> */}
      </div>
      <div className={styles.container}>
      </div>
    </div>
  );
};
export default Sidebar;
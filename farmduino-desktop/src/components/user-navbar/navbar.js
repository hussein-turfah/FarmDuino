import { Badge, Link } from '@mui/material';
import styles from './navbar.module.css';
import User from '../../pages/user-settings/settings';
const notifications = process.env.PUBLIC_URL + '/assets/icons/notifications.png';
const profile = process.env.PUBLIC_URL + '/assets/icons/profile.png';

const Navbar = () => {

  return (
      <div className={styles.main_container}>
          <h3 className={styles.name}>
            Hussein Turfah
          </h3>
        <Link href='/notifications' className={styles.logo_container}>
          <Badge badgeContent={1} color="error">
            <img src={notifications} alt="logo" className={styles.logo} />
          </Badge>
        </Link>
      </div>  
      )
}
export default Navbar;
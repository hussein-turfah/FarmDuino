import { Link } from '@mui/material';
import styles from './navbar.module.css';
const notifications = process.env.PUBLIC_URL + '/assets/icons/notifications.png';
const profile = process.env.PUBLIC_URL + '/assets/icons/profile.png';

const Navbar = () => {

  return (
    <div className={styles.body}>
      <div className={styles.main_container}>
        <div className={styles.text_container}>
          <h3 className={styles.name}>
            Hussein Turfah
          </h3>
        </div>
        <Link href='/notifications' className={styles.logo_container}>
          <img src={notifications} alt ="logo" className={styles.logo} />
        </Link>
        <Link href='/profile' className={styles.logo_container}>
          <img src={profile} alt="logo" className={styles.logo} />
        </Link>
      </div>
    </div>
  )
}
export default Navbar;
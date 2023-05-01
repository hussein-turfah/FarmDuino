import styles from './navbar.module.css';
const Navbar = () => {

    return (
        <div className={styles.body}>
          <div className={styles.main_container}>
            <div className={styles.logo_container}>
              <img  alt ="logo" className={styles.logo} />
            </div>
            <div className={styles.logo_container}>
              <img alt="logo" className={styles.logo} />
            </div>
          </div>
        </div>
    )
}
export default Navbar;
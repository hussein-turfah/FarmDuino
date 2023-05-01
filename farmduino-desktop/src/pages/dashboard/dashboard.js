import Sidebar from '../../components/user-sidebar/sidebar';
import styles from './dashboard.module.css';
import Navbar from '../../components/user-navbar/navbar';

const Dashboard = () => {
    return (
        <div className={styles.body}>
            <Sidebar />
            <div className={styles.main_container}>
                <Navbar />
            </div>
        </div>
    )
}
export default Dashboard;
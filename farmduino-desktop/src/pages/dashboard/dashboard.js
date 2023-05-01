import Sidebar from '../../components/user-sidebar/sidebar';
import styles from './dashboard.module.css';
import Navbar from '../../components/user-navbar/navbar';
import Ticker from '../../components/ticker/ticker';

const Dashboard = () => {
    return (
        <div className={styles.body}>
            <Sidebar />
            <div className={styles.main_container}>
                <Navbar />
                <Ticker />
                <div>
                    <div className={styles.page_header}>
                        <h1>Dashboard</h1>
                        <h3>Greenhouse 1</h3>
                    </div>
                    <div className={styles.container_header}>
                        <h2>
                            Greenhouse Details
                        </h2>
                        <div className={styles.boxes_container}>
                            <div className={styles.box}>
                                <h3>Temperature</h3>
                                <h4>25°C</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;
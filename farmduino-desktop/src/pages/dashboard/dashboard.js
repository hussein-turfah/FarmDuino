import Sidebar from '../../components/user-sidebar/sidebar';
import styles from './dashboard.module.css';

const Dashboard = () => {
    return (
        <div>
            <Sidebar className={styles.body}/>
        </div>
    )
}
export default Dashboard;
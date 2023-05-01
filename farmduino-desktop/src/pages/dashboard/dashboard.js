import Sidebar from '../../components/user-sidebar/sidebar';
import styles from './dashboard.module.css';
import Navbar from '../../components/user-navbar/navbar';

const Dashboard = () => {
    return (
        <div>
            <Sidebar />
            <Navbar />
        </div>
    )
}
export default Dashboard;
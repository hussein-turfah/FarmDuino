import React from 'react'
import styles from './admin-dashboard.module.css'
import AdminSidebar from '../../../components/user-sidebar/admin-sidebar'
import { Admin_Page_Title, Container_title} from '../../../components/general-components/general';
import Ticker from '../../../components/ticker/ticker';
import AdminNavbar from '../../../components/user-navbar/admin-navbar';
import UsersTable from '../../../components/admin-components/table/users-table';


const AdminDashboard = () => {

  return (
    <div className='body'>
      <AdminSidebar />
      <div className='main_container'>
        <AdminNavbar />
        <div className='submain_container'>
          <Admin_Page_Title title="Dashboard" subtitle="Greenhouse 1" />
          <div className={styles.container1}>
            <Container_title title='Users Table' />
            <UsersTable />
          </div>
        </div>
        <Ticker />
    </div>
  </div>
  );
}
export default AdminDashboard
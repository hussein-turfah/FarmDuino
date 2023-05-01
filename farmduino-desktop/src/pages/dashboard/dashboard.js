import Sidebar from '../../components/user-sidebar/sidebar';
import styles from './dashboard.module.css';
import Navbar from '../../components/user-navbar/navbar';
import Ticker from '../../components/ticker/ticker';
import { Page_Content_Container, Page_Title, Mybox } from '../../components/general-components/general';

const temperature = process.env.PUBLIC_URL + 'assets/icons/temperature.png';


const Dashboard = () => {
    return (
      <div className={styles.body}>
        <Sidebar />
        <div className={styles.main_container}>
          <Navbar />
          <Ticker />
          <div className={styles.submain_container}>
            <Page_Title title="Dashboard" subtitle="Greenhouse 1" />
            <div className={styles.cards_container}>
                <Page_Content_Container children={<Mybox title="Temperature" image_source={temperature} value="30 C"/>}/>
                <Page_Content_Container children={<Mybox title="Temperature" image_source={temperature} value="30 C"/>}/>
                <Page_Content_Container children={<Mybox title="Temperature" image_source={temperature} value="30 C"/>}/>
                <Page_Content_Container children={<Mybox title="Temperature" image_source={temperature} value="30 C"/>}/>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Dashboard;
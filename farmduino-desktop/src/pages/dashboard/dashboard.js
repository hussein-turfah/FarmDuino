import Sidebar from '../../components/user-sidebar/sidebar';
import styles from './dashboard.module.css';
import Navbar from '../../components/user-navbar/navbar';
import Ticker from '../../components/ticker/ticker';
import { Page_Content_Container, Page_Title, Mybox, Container_title } from '../../components/general-components/general';

const temperature = process.env.PUBLIC_URL + 'assets/icons/temperature.png';
const plant_image = process.env.PUBLIC_URL + 'assets/images/banana.jpg';

const Dashboard = () => {
    return (
      <div className={styles.body}>
        <Sidebar />
        <div className={styles.main_container}>
          <Navbar />
          <Ticker />
          <div className={styles.submain_container}>
            <Page_Title title="Dashboard" subtitle="Greenhouse 1" />
            <div className={styles.container1}>
                <Container_title title='Greenhouse Details'/>
                <div className={styles.cards_container}>
                    <Page_Content_Container children={<Mybox title="Temperature" image_source={temperature} value="30 C"/>}/>
                    <Page_Content_Container children={<Mybox title="Temperature" image_source={temperature} value="30 C"/>}/>
                    <Page_Content_Container children={<Mybox title="Temperature" image_source={temperature} value="30 C"/>}/>
                    <Page_Content_Container children={<Mybox title="Temperature" image_source={temperature} value="30 C"/>}/>
                </div>
            </div>
            <div className={styles.container2}>
                <Page_Content_Container className={styles.box1}
                children = {<>heyy</>}
                />
                <Page_Content_Container className={styles.plant_details}
                children = {
                    <div>
                        <img src={plant_image} />
                        <h2>
                            Plant Species: 
                            <h3>
                            <ul>
                                <li>Temperature: </li>
                                <li>Humidity</li>
                                <li>Soil Moisture</li>
                                <li>Light Intensity</li>
                            </ul>
                            </h3>
                        </h2>
                    </div>
                }
                />
            </div>
          </div>
        </div>
      </div>
    );
}
export default Dashboard;
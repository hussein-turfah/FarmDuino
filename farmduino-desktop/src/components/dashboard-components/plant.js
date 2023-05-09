import { Container_title, Myboxnologo, Page_Content_Container } from "../general-components/general";
import styles from "./plant.module.css";

const plant_image = process.env.PUBLIC_URL + 'assets/images/banana.jpg';


export const Plant = (props) => {
  return (
    <div className={styles.plant_body}>
      <Container_title title="Plant Details" />
      <div className={styles.plant_details_container}>
      <div className={styles.first_row}>
        <div className={styles.plant_image_container}>
          <img src={plant_image} className={styles.plant_image} />
        </div>
       <Myboxnologo styles={styles.plant_species} 
       title="Plant Species" value="BANANA (MUSA)"/>
      </div>
      <div className={styles.second_row}>
        <Myboxnologo styles={styles.ai_readings} title="Temperature" value="25*C" />
        <Myboxnologo styles={styles.ai_readings} title="Humidity" value="20%" />
      </div>
      <div className={styles.second_row}>
        <Myboxnologo styles={styles.ai_readings} title="Soil Moisture" value="50%" />
        <Myboxnologo styles={styles.ai_readings} title="Light Intensity" value="50%" />
      </div>
    </div>
    </div>
  );
};

export const Plant_row = (props) => {
  return (
    <div className={styles.row_plant_body}>
      <Container_title title="Consult AI" />
      <div className={styles.row_plant_details_container}>
      <div className={styles.row_first_row}>
        <div className={styles.row_plant_image_container}>
          <img src={plant_image} className={styles.plant_image} />
        </div>
       <Myboxnologo styles={styles.row_plant_species} 
       title="Plant Species" value="BANANA (MUSA)"/>
      </div>
      <div className={styles.row_second_row}>
        <Myboxnologo styles={styles.row_ai_readings} title="Temperature" value="25*C" />
        <Myboxnologo styles={styles.row_ai_readings} title="Humidity" value="20%" />
        <Myboxnologo styles={styles.row_ai_readings} title="Soil Moisture" value="50%" />
        <Myboxnologo styles={styles.row_ai_readings} title="Light Intensity" value="50%" />
      </div>
    </div>
    </div>
  );
};
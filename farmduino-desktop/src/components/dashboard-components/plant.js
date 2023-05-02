import { Container_title, Page_Content_Container } from "../general-components/general";
import styles from "./plant.module.css";

const plant_image = process.env.PUBLIC_URL + 'assets/images/banana.jpg';


export const Plant = (props) => {
  return (
      <div className={styles.plant_details_container}>
        <div className={styles.plant_image_container}>
          <img src={plant_image} className={styles.plant_image} />
        </div>
        <div className={styles.details}>
          <Container_title title="Plant Details" />
          <h3>&nbsp;Plant Species:</h3>
          <h3>&nbsp;&nbsp;Temperature: </h3>
          <h3>&nbsp;&nbsp;Humidity:</h3>
          <h3>&nbsp;&nbsp;Soil Moisture:</h3>
          <h3>&nbsp;&nbsp;Light Intensity:</h3>
        </div> 
      </div>
  );
};

export const Plant_row = (props) => {
  return (
    <div className={styles.plant_details_row}>
      <div className={styles.plant_details_container_row}>
        <Container_title title="Plant Details" />
        <div>
          <h3>&nbsp;&nbsp;Plant Species:</h3>
          <h3>&nbsp;&nbsp;Temperature: </h3>
          <h3>&nbsp;&nbsp;Humidity:</h3>
          <h3>&nbsp;&nbsp;Soil Moisture:</h3>
          <h3>&nbsp;&nbsp;Light Intensity:</h3>
        </div>      
      </div>
      <div className={styles.plant_image_container_row}>
        <img src={plant_image} className={styles.plant_image_row} />
      </div>
    </div>
  );
};
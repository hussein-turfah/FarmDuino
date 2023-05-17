import { useEffect, useState } from "react";
import { Container_title, Myboxnologo, Page_Content_Container } from "../general-components/general";
import styles from "./plant.module.css";
import UseHttp from "../../hooks/http-request";

const plant_image = process.env.PUBLIC_URL + 'assets/images/banana.jpg';


export const Plant = (props) => {
  const [aiData, setAIData] = useState([]);
  const [ideal_conditions, setIdealConditions] = useState([]);
  const [plant_image, setPlantImage] = useState("")


  // get artificial intelligence details
  useEffect(() => {
    const artificialIntelligenceDetails = async ()=>{
      try{ 
        const data = await UseHttp("ai","GET","",{Authorization: "bearer"+ localStorage.getItem("token")})
        setAIData(data);
        setIdealConditions(data.ideal_conditions);
      }catch(error){
        console.log(error)
      }
    }
    artificialIntelligenceDetails();
  }, []);

  // get plant image
  useEffect(() => {
    const plantImage = async ()=>{
      try{
        const image = await UseHttp("plant-image","GET","",{Authorization: "bearer"+ localStorage.getItem("token")})
        setPlantImage(image.image_url)
      }catch(error){
        console.log(error)
      }
    }
    plantImage();
  }, []);

  return (
    <div className={styles.plant_body}>
      <Container_title title="Plant Details" />
      <div className={styles.plant_details_container}>
      <div className={styles.first_row}>
        <div className={styles.plant_image_container}>
          <img src={plant_image} className={styles.plant_image} alt="Loading..." />
        </div>
       <Myboxnologo styles={styles.plant_species} 
       title="Plant Species" value={aiData.Genus_species}/>
      </div>
      <div className={styles.second_row}>
        <Myboxnologo styles={styles.ai_readings} title="Temperature" value={ideal_conditions.temperature} />
        <Myboxnologo styles={styles.ai_readings} title="Humidity" value={ideal_conditions.humidity} />
      </div>
      <div className={styles.second_row}>
        <Myboxnologo styles={styles.ai_readings} title="Soil Moisture" value={ideal_conditions.soil_moisture} />
        <Myboxnologo styles={styles.ai_readings} title="Light Intensity" value={ideal_conditions.light_intensity} />
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
        <Myboxnologo styles={styles.row_ai_readings} title="Temperature" value="25°C" />
        <Myboxnologo styles={styles.row_ai_readings} title="Humidity" value="20%" />
        <Myboxnologo styles={styles.row_ai_readings} title="Soil Moisture" value="50%" />
        <Myboxnologo styles={styles.row_ai_readings} title="Light Intensity" value="50%" />
      </div>
    </div>
    </div>
  );
};
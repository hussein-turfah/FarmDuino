import { Box } from "@mui/material";
import styles from "./general.module.css";

// for pages that has a title ex: Dashboard, Temperature, etc and Greenhouse Number
export const Page_Title = (props) => {
  return (
    <div className={styles.page_title}>
      <h1>{props.title}</h1>
      <h3>{props.subtitle}</h3>
    </div>
  );
};

// for containers that has cards or other components
export const Page_Content_Container = (props) => {
  return(
    <div className={styles.page_content_container}>
      {props.children}
    </div>
  )
};
export const Container_title = (props) => {
  return(
    <div className={styles.container_title}>
      <h1>{props.title}</h1>
    </div>
  )
};

export const Mybox = (props) => {
  return(
    <Box className={styles.Box}>
        <div>
          <img src={props.source}/>
        </div>
        <h3>{props.title}</h3>
        <h1>{props.value}</h1>
    </Box>
  )
};

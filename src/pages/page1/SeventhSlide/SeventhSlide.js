import { useEffect } from "react";
import Appointment from "./Appontment";
import Information from "./Information";
import classes from "./SeventhSlide.module.css";
import { Route } from "react-router-dom";
function SeventhSlide() {
  return (
    
      <div className={classes.container} id='contact'>
      <div className={classes.subContainer}  >
        <Information />
        <Appointment  />
      </div>
    </div>
    
    
  );
}
export default SeventhSlide;

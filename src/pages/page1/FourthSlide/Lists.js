import classes from "./Lists.module.css";
import img1 from "./../../../experience.svg";
import img2 from "./../../../success.svg";
import img3 from "./../../../dedicatedTeam.svg";
import img4 from "./../../../cost.svg";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
function ListsSlideFour() {
  useEffect(()=>{
    Aos.init({duration:500})
  },[])
  return (
    <div>
      <div className={classes.listsContainer}>
        <div className={classes.listContainer}>
          <img src={img1} data-aos='zoom-in-up' alt="icon"/>
          <h data-aos='zoom-in-up'>Experienced and licensed</h>
          <p data-aos='zoom-in-up'>
            3+ years in the industry, valued experience for capacity building to
            see the term abroad studies from student perspective .our company is
            officially registered with full recognition from Ethiopian
            government
          </p>
        </div>
        <div className={classes.listContainer}>
          <img src={img2} data-aos='zoom-in-up' alt="icon"/>
          <h data-aos='zoom-in-up'>Success</h>
          <p data-aos='zoom-in-up'>
            Ethiopia's top rated Educational consultancy with one of the highest
            students visa success rate in the industry
          </p>
        </div>
        <div className={classes.listContainer}>
          <img src={img3} data-aos='zoom-in-up' alt="icon"/>
          <h data-aos='zoom-in-up'>Dedicated team of Experts</h>
          <p data-aos='zoom-in-up'> 
            Our team of experts are always ready to consult, assist and guide
            students from university acceptance to securing student visa
          </p>
        </div>
      </div>
      <div className={classes.listContainer}>
        <img src={img4} data-aos='zoom-in-up' alt="icon"/>
        <h data-aos='zoom-in-up'>Cost effective</h>
        <p data-aos='zoom-in-up'>
          universal procedures are very favorable to encourage students to study
          abroad We have the most reasonable and fair service charge to
          encourage Ethiopian students
        </p>
      </div>
    </div>
  );
}
export default ListsSlideFour;

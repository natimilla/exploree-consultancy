import classes from "./SecondSlide.module.css";
import img from "./../../../images/pexels-pixabay-267885.jpg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
function SecondSlide() {
  return (
    <div className={classes.container}>
    <div className={classes.imgContainer}>
      <img src={img} className={classes.image} alt='graduation Image'/>
      <div>
        <h>Who we are?</h>
        <p>
          Universal Educational Consultants, incepted in 2018, is an Addis
          Ababa-based Overseas Educational Consultancy, dedicated to providing
          best solutions to the Ethiopian students seeking for education in
          International educational institutions. Universal is one of the
          Leading Overseas Educational Consultants, acknowledged for providing
          best guidance and counselling to the students. You can study abroad in
          best educational hubs of the world, including, USA, Canada, Poland,
          Italy, Turkey, Cyprus and China with us
        </p>
      </div>
    </div>
    <div className={classes.linkContainer}>
    <div></div>
    <Link to='/About' className={classes.link}>Read more...</Link>
    </div>
    </div>
  );
}
export default SecondSlide;

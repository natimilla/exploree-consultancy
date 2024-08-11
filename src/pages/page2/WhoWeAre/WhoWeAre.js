import classes from "./WhoWeAre.module.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
function WhoWeAre() {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <div className={classes.container} id='why'>
      <div className={classes.headingContainer}>
        <h>Why Choose Universal?</h>
      </div>
      <p data-aos="zoom-in-up">
        Exploree? If you are aspiring for a rewarding career in future and a
        world-class study program is quintessential for the fruition of your
        career plans, then trust Exploree Educational Consultancy – the pioneers
        in overseas education counselling – to equip you with the best possible
        academic opportunities in prestigious universities abroad. A leading
        education consultancy in Ethiopia, Exploree has successfully placed many
        of students in many illustrious universities all over the world – a feat
        that can be ascribed to our methodical mapping of geographical
        locations, institutions and courses as appropriate to the applicant’s
        prole. In order to ensure the consistency in the quality of our
        services, we have consciously chosen not to operate through the
        conventional business model of franchisees/agents or branch. If you
        envision yourself as a successful professional in future and wondering
        how Universal Edu can help you transform your dreams into reality, then
        here’s a list of the standout offerings that provide UniversalEdu with a
        competitive edge and make it your ideal partner in your academic
        pursuits that will play a vital role in shaping your career ahead:
      </p>
      <ul>
        <li data-aos="zoom-in-up">
          Over 3 years of proven expertise in the overseas education counselling
          domain
        </li>
        <li data-aos="zoom-in-up">
          Ethiopia’s top-rated education consultancy with one of the highest
          student visa success rates in the industry
        </li >
        <li data-aos="zoom-in-up">
          Competent team of experienced and friendly counsellors who guide
          students throughout the course admission process and help them
          successfully bridge the gap between where they are presently and where
          they aspire to be in future
          <li data-aos="zoom-in-up">
            Student-centered strategy that emphasizes on personalized attention
            to each student as opposed to an assembly line approach
          </li>
          <li data-aos="zoom-in-up">
            Meticulous evaluation of students on various parameters such as
            academic background, financial stability, future plans, strengths
            and weaknesses to determine the most conducive options that are in
            line with their expectations
          </li>
          <li data-aos="zoom-in-up">
            Trusted partner for many students who rely solely upon our expert
            counselling and guidance to make informed decisions for a fulfilling
            professional career in the days to come
          </li>
        </li>
      </ul>
    </div>
  );
}
export default WhoWeAre;

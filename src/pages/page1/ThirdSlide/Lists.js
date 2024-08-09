import { useEffect } from "react";
import classes from "./Lists.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css'
function Lists() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
  return (
    <div>
    <div className={classes.listsContainer}>
      <div className={classes.serviceListContainer}>
        <div className={classes.heading} data-aos='zoom-in-up'>
          Country/University and Course Selection
        </div>
        <hr className={classes.horizontalLine}/>
        <div className={classes.description} data-aos='zoom-in-up'>
          Taking into consideration your academic strengths and weaknesses,
          financial capabilities, subjects of interest and future plans, UEC
          will help you in identifying the right course in the right
          college/university.
        </div>
      </div>
      <div className={classes.serviceListContainer}>
        <div className={classes.heading} data-aos='zoom-in-up'>Application Processing</div>
        <hr className={classes.horizontalLine}/>
        <div className={classes.description} data-aos='zoom-in-up'>
          Assistance in preparing the application letter and required documents
          such as transcripts, letter of recommendations, essays (Statement of
          Purpose) etc. is given on the basis of a successful strategy to
          maximize the chance of admissions.
        </div>
      </div>
      <div className={classes.serviceListContainer}>
        <div className={classes.heading} data-aos='zoom-in-up'>Full and partial scholarships</div>
        <hr className={classes.horizontalLine}/>
        <div className={classes.description} data-aos='zoom-in-up'>
          There are various types of scholarship opportunities available for
          students. Due to a lack of enough information on how to apply and when
          to apply many students miss the opportunities. Our experts in the
          field select out such opportunities and guide you with the application
          process.
        </div>
      </div>
      </div>
      <div className={classes.listsContainer}>
      <div className={classes.serviceListContainer}>
        <div className={classes.heading} data-aos='zoom-in-up'>Follow-up and Securing Admission</div>
        <hr className={classes.horizontalLine}/>
        <div className={classes.description} data-aos='zoom-in-up'>
          We do the necessary follow-up and secure admissions in the shortest
          possible time. UECs success rate in admissions is 100%.{" "}
        </div>
      </div>
      <div className={classes.serviceListContainer}>
        <div className={classes.heading} data-aos='zoom-in-up'>Visa Guidance</div>
        <hr className={classes.horizontalLine}/>
        <div className={classes.description} data-aos='zoom-in-up'>
          UEC provides the guidance in preparing your visa application and
          necessary documentation enabling you to put in conclusive proof in
          terms of establishing your academic genuineness, financial stability
          and roots back to Ethiopia. We have an unbeatable success rate of over
          90% in securing student visas to even the toughest places in the world
          like USA due to our systematic guidance and professional approach.
        </div>
      </div>
      <div className={classes.serviceListContainer}>
        <div className={classes.heading} data-aos='zoom-in-up'>Pre departure guidance</div>
        <hr className={classes.horizontalLine}/>
        <div className={classes.description} data-aos='zoom-in-up'>
          We give full guidance on steps student need to have before departure
          including airport pickups ,ticketing and booking service
        </div>
      </div>
      </div>
      <div className={classes.listsContainer}>
      <div className={classes.serviceListContainer}>
        <div className={classes.heading} data-aos='zoom-in-up'>
          Guidance for  IELTS/TOEFL/GRE/GMAT/SAT
        </div>
        <hr className={classes.horizontalLine}/>
        <div className={classes.description} data-aos='zoom-in-up'>
          UEC assists you in scheduling the required tests, Filing application
          forms, scheduling the tests, giving the probable list of universities
          where the scores can be reported etc. UEC provides imported study
          materials, CDs and computer-based tests to ensure that you get good
          scores.
        </div>
      </div>
      <div className={classes.serviceListContainer}>
        <div className={classes.heading} data-aos='zoom-in-up'>
          Bank Loan and Travel Arrangements (Value Added Services)
        </div>
        <hr className={classes.horizontalLine}/>
        <div className={classes.description} data-aos='zoom-in-up'>
          UEC assists you with educational loans, foreign exchange formalities
          and even travel plans. We will coordinate airport-pick up and
          temporary accommodations, if required.
        </div>
      </div>
    </div>
    </div>
  );
}
export default Lists;

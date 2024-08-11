import { useState } from "react";
import classes from "./EighthSlide.module.css";
import minus from "./minus.svg";
import plus from "./plus.svg";
function EighthSlide() {
  
  const [openFaq1, setOpenFaq1] = useState(false);
  const SlideHandler1 = () => {
    setOpenFaq1((prev) => !prev);
  };
  const [openFaq2, setOpenFaq2] = useState(false);
  const SlideHandler2 = () => {
    setOpenFaq2((prev) => !prev);
  };
  const [openFaq3, setOpenFaq3] = useState(false);
  const SlideHandler3 = () => {
    setOpenFaq3((prev) => !prev);
  };
  const [openFaq4, setOpenFaq4] = useState(false);
  const SlideHandler4 = () => {
    setOpenFaq4((prev) => !prev);
  };
  return (
    <div className={classes.container}>
      <div className={classes.heading}>FAQ</div>
      <div className={classes.allContainer}>
      <div className={classes.faqContainer} onClick={SlideHandler1}>
        <div className={`${classes.imgContainer} ${openFaq1 ? classes.active: ' '}`}>
          <p>Do you apply for full scholarship ?</p>
          <img src={openFaq1 ? minus : plus} alt="change icon"/>
        </div>

        {openFaq1 && (
          <p className={classes.description}>
            {" "}
            We apply for full, partial scholarship and self sponsored admissions
            too
          </p>
        )}
      </div>
      <div className={classes.faqContainer} onClick={SlideHandler2}>
        <div className={`${classes.imgContainer} ${openFaq2 ? classes.active: ' '}`}>
          <p>
            How will a study abroad experience enhance my employability after I
            graduate?
          </p>
          <img src={openFaq2 ? minus : plus} alt="change Icon" />
        </div>

        {openFaq2 && (
          <p className={classes.description}>
            At present, private as well as government sectors are looking for
            students with international exposures and experiences. This factor
            will contribute to the amplification of employability, international
            knowledge, resilience and flexibility in the part of students. These
            skills are important to employers and hence, the chances of
            employment for students with foreign degrees are high.
          </p>
        )}
      </div>
      <div className={classes.faqContainer} onClick={SlideHandler3}>
        <div className={`${classes.imgContainer} ${openFaq3 ? classes.active: ' '}`}>
          <p>
            Do I need to have IELTS ,TOFEL or SAT to study in Canada or USA ?
          </p>
          <img src={openFaq3 ? minus : plus} alt="change Icon"/>
        </div>

        {openFaq3 && (
          <p className={classes.description}>
            Not necessary but if you have it will help you through the Admission
            process
          </p>
        )}
      </div>

      <div className={classes.faqContainer} onClick={SlideHandler4}>
        <div className={`${classes.imgContainer} ${openFaq4 ? classes.active: ' '}`}>
          <p>
            What is the role of universal Educational Consultancy in helping me
            with my abroad study?
          </p>
          <img src={openFaq4 ? minus : plus} alt="change Icon"/>
        </div>

        {openFaq4 && (
          <p className={classes.description}>
            We guide you in your quest to international education from top to
            bottom. Intercraft family in keenly dedicated to provide service of
            career counseling to the students of different educational level and
            background. From helping you to choose a correct college for your
            desired course to application procedure, we assist you with
            everything. We also help you provide information on the Visa Process
            and also the policy changes. We will assist your with documentation
            and interview training
          </p>
        )}
      </div>
      </div>
    </div>
  );
}
export default EighthSlide;

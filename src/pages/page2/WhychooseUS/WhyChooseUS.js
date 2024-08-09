import classes from "./WhyChooseUs.module.css";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Aos from 'aos';
function WhyChooseUs() {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <div className={classes.container}>
      <div className={classes.headingContainer}><h>Who We Are ?</h></div>
      <p data-aos="zoom-in-up">
        Exploree Educational Consultants, incepted in 2022, is an Addis
        Ababa-based Overseas Educational Consultancy, dedicated to providing
        best solutions to the Ethiopian students seeking for education in
        International educational institutions. Exploree is one of the Leading
        Overseas Educational Consultants, acknowledged for providing best
        guidance and counselling to the students. You can study abroad in best
        educational hubs of the world, including, USA, Canada, Poland, Italy,
        Turkey, Cyprus and China with us. As education is the main catalyst in
        deciding the career of a student, we leave no stone unturned in ensuring
        that you make the right decision. Our expert mentors understand the
        dilemma of Ethiopian students and hence, have the par excellence in
        resolving all their doubts. Exploree keeps extensive knowledge of
        ever-changing education sector. With the valuable insights to deliver,
        we offer the best educational, cultural and financial solutions to the
        undergraduates, graduates and all the interested students. Our team
        comprises the potential educators and counseling experts, along with a
        huge Alumni network to refer you to the top colleges and universities.
        We provide the complete assistance in Course counseling,
        University/Country selection, Scholarships, Education Loans,
        Pre-departure orientations. From form filling to fee submission, from
        the thought of studying abroad to your departure . we can help you at
        every step. Exploree has a right mix of professionals and young
        education enthusiasts, their exclusive, worthy and ideal knowledge about
        overseas studies, along with the right tactics to consult the aspirants
        makes us one of the most sought after Overseas Educational Consultancies
        in Ethiopia.
      </p>
    </div>
  );
}
export default WhyChooseUs;

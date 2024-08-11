import classes from "./Information.module.css";
import phoneIcon from "./../../../phone.svg";
import mailIcon from "./../../../mailIcon.svg";
import locationIcon from "./../../../locationIcon.svg";
import facebookIcon from "./../../../facebookLogoIcon.svg";
import instagramIcon from "./../../../instagramLogoIcon.svg";
import telegramIcon from "./../../../telegramLogoIcon.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Information() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className={classes.container} data-aos="zoom-in-up">
      <div className={classes.headingHeadingContainer}>
      <div className={classes.headingContainer}>
        {" "}
        <h>Get in Touch</h>
        <hr className={classes.horizontalLine} />
      </div>
      </div>
      

      <div className={classes.iconContainer}>
        <div>
          <p className={classes.icon}>
            <img src={phoneIcon} alt="phone Icon" />
            <a href="tel:0942131214"> +251 942131214</a>
          </p>
          <p className={classes.icon}>
            <img src={phoneIcon} alt="phone Icon" />
            <a href="tel:0942050924"> +251 942050924</a>
          </p>
          <p className={classes.icon}>
            <img src={mailIcon} alt="email Icon" />
            <a href="mail:@exploreeconsultancy"> @exploreeconsultancy</a>
          </p>
          <p className={classes.icon}>
            <img src={locationIcon} alt="location Icon" />
            <a href="https://maps.app.goo.gl/6z1BSQ7BBRk19Pm29">
              {" "}
              22,Tsega Building 5th Floor
            </a>
          </p>
        </div>
      </div>
      <div className={classes.headingContainer}>
        <h>Find us</h>
        <hr className={classes.horizontalLine} />
      </div>

      <div className={classes.map}>
        <div className={classes.subMap}>
          <iframe
            className={classes.iframe}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1402.8931932482353!2d38.78776061930697!3d9.011320424935365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b850d9f0ecbc5%3A0x802e7a6ed78e8834!2sTsega%20Business%20Center!5e0!3m2!1sen!2set!4v1721924996623!5m2!1sen!2set"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      
      <div className={classes.headingContainer}>
        {" "}
        <h>Follow us on</h>
        <hr className={classes.horizontalLine} />
      </div>
      <div className={classes.linkContainer}>
        <a href="">
          <img src={facebookIcon} alt="facebook Icon" />
        </a>
        <a href="https://www.instagram.com/exploreeconsultancy?igsh=YnVhOXhzaHZsMG8=">
          <img src={instagramIcon} alt="instagram Icon"></img>
        </a>
        <a href="https://t.me/Exploreeconsultancy_user">
          <img src={telegramIcon} alt="telegram Icon" />
        </a>
      </div>
    </div>
  );
}
export default Information;

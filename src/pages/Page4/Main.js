import classes from "./Main.module.css";
import phone from "./../../phone.svg";
import location from "./../../locationIcon.svg";
import email from "./../../mailIcon.svg";
function Main() {
  return (
    <div className={classes.container}>
      <div className={classes.headingContainer}>
        <h className={classes.heading}>Exploree Educational Consultants</h>
      </div>
      <div className={classes.subHeading}>
        <h>
          Refer students to us and Earn up to 6500 birr per person Start
          Recruiting now !
        </h>
      </div>
      <div className={classes.subSubHeading}>
        <p>
          Apply to be our agent or come to our office in person Join our
          Affiliate program
        </p>
        <h>Be part of Exploree team</h>
      </div>
      <p className={classes.icon}>
        <img src={phone} alt='phone Icon' />
        <a href="tel:0942131214"> +251 942131214</a>
      </p>
      <p className={classes.icon}>
        <img src={phone} alt='phone Icon' />
        <a href="tel:0942050924"> +251 942050924</a>
      </p>
      <p className={classes.icon}>
        <img src={email} alt='email Icon'/>
        <a href="mail:@exploreeconsultancy"> @exploreeconsultancy</a>
      </p>
      <p className={classes.icon}>
        <img src={location} alt="location Icon"/>
        <a href="https://maps.app.goo.gl/6z1BSQ7BBRk19Pm29">
          {" "}
          22,Tsega Building 5th Floor
        </a>
      </p>
    </div>
  );
}
export default Main;

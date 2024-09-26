import Contact from "./Contact";
import classes from "./Footer.module.css";
import QuickLink from "./quickLink";
import SocialLink from "./SocialLink";
function Footer() {
  return (
    <div className={classes.container}>
      <div className={classes.subContainer}>
        <Contact />
        <QuickLink />
        <SocialLink />
      </div>
      <div className={classes.footer}>
        <p>
          Exploree Educational consultant 2024 | All Rights Rserved | Powered By{" "}
          <a href="https://t.me/Exploreeconsultancy_user">Exploree Consultancy</a>
        </p>
      </div>
    </div>
  );
}
export default Footer;

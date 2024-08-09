import classes from './Contact.module.css';
import logo from './../../logo.svg';
import facebook from './facebookLogo.svg';
import instagram from './instagram.svg';
import telegram from './telegramLogo.svg';
import phone from './phoneLogo.svg';
import mail from './mail.svg';
import location from './location.svg'
function Contact(){
   return <div>
    <div ><img src={logo} className={classes.logo}/></div>
    <h className={classes.heading}><span className={classes.headingSpan}>Exploree</span> Consultancy</h>
    <div>
    <a href='' className={classes.linkLogo}><img src={facebook}/></a>
    <a href='' className={classes.linkLogo}><img src={instagram}/></a>
    <a href='' className={classes.linkLogo}><img src={telegram}/></a>
    </div>
    <div className={classes.linkContainer}>
    <a href="tel:0942050924" className={classes.link}><img src={phone}/> +251 942050924</a>
    </div>
    <div className={classes.linkContainer}>
    <a href="tel:0942131214"className={classes.link}><img src={phone}/> +251 942131214</a>
    </div>
    <div className={classes.linkContainer}>
    <a href="mail:@exploreeconsultancy"className={classes.link}><img src={mail}/> @exploreeconsultancy</a>
    </div>
    <div className={classes.linkContainer}>
    <a href="https://maps.app.goo.gl/6z1BSQ7BBRk19Pm29"><img src={location}/> 22,Tsega Building 5th Floor</a>
    </div>
    
   </div>
}
export default Contact
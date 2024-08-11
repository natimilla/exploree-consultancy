import classes from './SocialLink.module.css'
import facebook from './../../facebookLogoIcon.svg';
import instagram from './../../instagramLogoIcon.svg';
import telegram from './../../telegramLogoIcon.svg';
function SocialLink(){
    return <div>
        <h className={classes.heading}> Social Links </h>
        <a href=''><p className={classes.links}><img src={facebook}/> facebook</p></a>
        <a href='https://www.instagram.com/exploreeconsultancy?igsh=YnVhOXhzaHZsMG8='><p className={classes.links}><img src={instagram}/> instagram</p></a>
        <a href='https://t.me/Exploreeconsultancy_user'><p className={classes.links}><img src={telegram}/> telegram</p></a> 
    </div>
}
export default SocialLink
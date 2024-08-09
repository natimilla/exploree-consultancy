import classes from './SocialLink.module.css'
import facebook from './../../facebookLogoIcon.svg';
import instagram from './../../instagramLogoIcon.svg';
import telegram from './../../telegramLogoIcon.svg';
function SocialLink(){
    return <div>
        <h className={classes.heading}> Social Links </h>
        <p className={classes.links}><img src={facebook}/> facebook</p>
        <p className={classes.links}><img src={instagram}/> instagram</p>
        <p className={classes.links}><img src={telegram}/> telegram</p>
    </div>
}
export default SocialLink
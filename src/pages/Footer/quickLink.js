import { Link } from 'react-router-dom';
import classes from './quickLink.module.css';
function QuickLink(){
    return <div>
        <h className={classes.heading}>Quick Links</h>
        <p><Link to='' className={classes.Link}>Home</Link></p>
        <p><Link to=''className={classes.Link}>Services</Link></p>
        <p><Link to=''className={classes.Link}>Why Choose Exploree</Link></p>
       <p><Link to=''className={classes.Link}>About us</Link></p>  
        <p><Link to=''className={classes.Link}>Contact us</Link></p>
    </div>
}
export default QuickLink
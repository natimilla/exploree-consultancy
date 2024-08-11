import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link'
import classes from './quickLink.module.css';
function QuickLink(){
    return <div className={classes.container}>
        <h className={classes.heading}>Quick Links</h>
        <p><HashLink to='/#firstSlide' className={classes.Link}>Home</HashLink></p>
        <p><HashLink to='/#services'className={classes.Link}>Services</HashLink></p>
        <p><HashLink to='/About#why'className={classes.Link}>Why Choose Exploree</HashLink></p>
       <p><HashLink to='/About#firstSlide'className={classes.Link}>About us</HashLink></p>  
        <p><HashLink to='/#contact'className={classes.Link}>Contact us</HashLink></p>
    </div>
}
export default QuickLink
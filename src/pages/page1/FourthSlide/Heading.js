import classes from './Heading.module.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function HeadingSlideFour(){
    useEffect(()=>{
        Aos.init({duration:1000})
    },[])
    return <div className={classes.heading}>
        <h data-aos='zoom-in-up'>Why choose Exploree?</h>
    </div>
}
export default HeadingSlideFour;
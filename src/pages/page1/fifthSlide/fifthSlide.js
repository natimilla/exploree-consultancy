import CountUp from 'react-countup';
import classes from './fifthSlide.module.css';
import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
function FifthSlide(){
    const [trigger,setTrigger]=useState(false)

    return <ScrollTrigger onEnter={()=>{setTrigger(true)}} onExit={()=>{setTrigger(false)}}>
        
        <div className={classes.container}>
        <h>Numbers Speak</h>    
        <div className={classes.listContainer}>
        <div >
            {trigger && <h><CountUp start={0} end={96} duration={5}/>+</h>}
            <p>Got Admissions</p>
        </div>
        <div>
            {trigger && <h><CountUp start={0} end={85} duration={5}/>+</h>}
            <p>Got Visa</p>
        </div>
        <div>
            {trigger && <h><CountUp start={0} end={30} duration={5}/>+</h>}
            <p>University's</p>
        </div>
        </div>
    </div>
    </ScrollTrigger>
    
}
export default FifthSlide
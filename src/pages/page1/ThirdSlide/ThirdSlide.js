import Heading from './Heading';
import Lists from './Lists';
import classes from './ThirdSlide.module.css';
function ThirdSlide(){
    return <div className={classes.container}  id='services'>
         <Heading/>
         <Lists/>
    </div>
}
export default ThirdSlide
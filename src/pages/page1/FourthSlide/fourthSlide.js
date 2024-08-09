import HeadingSlideFour from "./Heading";
import ListsSlideFour from "./Lists";
import classes from './fourthSlide.module.css'
function FourthSlide(){
    return <div className={classes.container}>
          <HeadingSlideFour/>
          <ListsSlideFour/>
    </div>
}
export default FourthSlide;
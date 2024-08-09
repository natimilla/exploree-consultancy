import classes from './Spinner.module.css';
import img from "./../../../images/Rolling@1x-1.0s-200px-200px.svg";
function Spinner(){
    return <div>
    <div>
      <img src={img} />
    </div>
    <h className={classes.header}>Loading...</h>
  </div>

}
export default Spinner;
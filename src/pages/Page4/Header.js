import classes from './Header.module.css';
function Header(){
    return <div className={classes.container}>
    <div className={classes.subContainer}>
      <h className={classes.heading}>Be our agent and start making money today !</h>
    </div>
  </div>
}
export default Header
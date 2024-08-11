import classes from './main.module.css';
function Main(){
    return <div className={classes.container}>
        <h>Looking to<br/>
        <span className={classes.colorVariant}>Study</span><br/>
        Abroad ?</h>
        <a href='tel:094205924' className={classes.link}>CALL NOW</a>
        <a href='#contact' className={classes.link}>CONTACT US</a>
    </div>
}
export default Main;
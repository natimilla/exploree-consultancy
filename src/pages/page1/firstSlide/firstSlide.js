import Main from "./main";
import classes from "./firstSlide.module.css";

function FirstSlide() {
  return (
    <div className={classes.container} id="firstSlide">
      <div>
        <Main />
      </div>
    </div>
  );
}
export default FirstSlide;

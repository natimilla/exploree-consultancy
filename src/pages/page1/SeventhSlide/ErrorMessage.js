import { useDispatch } from 'react-redux';
import classes from './ErrorMessage.module.css'
import { LoadingActions } from '../../../Store/LoadingDisplayContainer';
function ErrorMessage(){
    const dispatch=useDispatch();
    const displayHandler=()=>{
        dispatch(LoadingActions.ErrorStateHandler())
        dispatch(LoadingActions.LoadingStateHandler())
    }
    return<div className={classes.container}>
        <h>Ooops Something Went Wrong Try Again</h>
        <div>
          <button className={classes.button} onClick={displayHandler}>Ok</button>
        </div>
    </div>
}
export default ErrorMessage;
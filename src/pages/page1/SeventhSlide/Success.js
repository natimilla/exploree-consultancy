import { useDispatch, useSelector } from "react-redux";
import classes from "./Success.module.css";
 import { LoadingActions } from "../../../Store/LoadingDisplayContainer";
import { ClientInformationAction } from "../../../Store/ClientInformation";
function Success() {
  const name = useSelector((state) => state.client.name);
  const email = useSelector((state) => state.client.email);
  const appointment = useSelector((state) => state.client.Appointment);
  const PhoneNumber = useSelector((state) => state.client.Number);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedAppointment = new Date(appointment).toLocaleString('en-US', options);
  const dispatch=useDispatch()
  const displayHandler=()=>{
       dispatch(LoadingActions.LoadingStateHandler())
       dispatch(ClientInformationAction.successStateHandler())
  }
  return (
    <div className={classes.container}>
      <div className={classes.heading}>Successfully Submitted</div>
      <div className={classes.information}>
        <h>
          Dear <span>{name}</span>, Your Information has been Submitted we will
          Contact you as soon as Possible. Your appointment has been scheduled
          for <span>{formattedAppointment}</span> we will contact you  via email
          through <span>{email}</span>{" "} or through <span>{PhoneNumber}</span>
        </h>
      </div>
      <div className={classes.buttonContainer}>
        <div></div>
        <div>
          <button className={classes.button} onClick={displayHandler}>Ok</button>
        </div>
      </div>
    </div>
  );
}
export default Success;

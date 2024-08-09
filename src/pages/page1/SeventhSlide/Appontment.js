import classes from "./Appointment.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import { useDispatch } from "react-redux";
import { LoadingActions } from "../../../Store/LoadingDisplayContainer";
import { ClientInformationAction } from "../../../Store/ClientInformation";
function Appointment() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setNumber] = useState("");
  const [AppointmentDate, setDate] = useState("");
  const [Message, setMessage] = useState("");
  const dispatch= useDispatch()
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const phoneNumberHandler = (event) => {
    setNumber(event.target.value);
  };
  const AppointmentDateHandler = (event) => {
    setDate(event.target.value);
  };
  const MessageHandler = (event) => {
    setMessage(event.target.value);
  };
  const ClientInformation=[]
  const SubmitHandler = async(event) => {
    event.preventDefault();
    dispatch(LoadingActions.LoadingStateHandler());
    ClientInformation.push({
      name:name,
      email:email,
      appointment_date:new Date(AppointmentDate),
      phonenumber:phoneNumber,
      message:Message
    })
   
    try{
      const response=await fetch("https://exploree-consultancy-default-rtdb.firebaseio.com/clientInformation.json",{
        method:'POST',
        body:JSON.stringify(ClientInformation)
      })
       if(!response.ok){
        throw new Error("failed to fetch")
       
       }
       dispatch(ClientInformationAction.clientInformationHandler({
        name:name,
        email:email,
        Number:phoneNumber,
        Appointment:new Date(AppointmentDate),
       }))
       dispatch(ClientInformationAction.successStateHandler())
       setName("");
       setDate("");
       setEmail("");
       setMessage("");
       setNumber("");
  
    }
     catch(Error){
      dispatch(LoadingActions.ErrorStateHandler())
     }   
  };
  const today = new Date();
  const todayFormatted = today.toISOString().slice(0, 10);
  return (
    <div >
      
      <form
      className={classes.form}
      data-aos="zoom-in-up"
      onSubmit={SubmitHandler}
    >
      <h>Set Appointment</h>
      <p>Your Name</p>
      <input
        type="text"
        className={classes.input}
        onChange={nameChangeHandler}
        value={name}
       
      />
      <p>Your Email</p>
      <input
        type="email"
        className={classes.input}
        onChange={emailChangeHandler}
        value={email}
       
      />
      <p>Phone number</p>
      <input
        type="number"
        className={classes.input}
        onChange={phoneNumberHandler}
        value={phoneNumber}
        
      />
      <p>Appointment Date</p>
      <input
        type="date"
        min={todayFormatted}
        className={classes.input}
        onChange={AppointmentDateHandler}
        value={AppointmentDate}
        
      />
      <p>Your Message(optional)</p>
      <textarea rows={5} className={classes.input} onChange={MessageHandler} value={Message} />
      <div>
        <button type="submit" className={classes.button}>
          SUBMIT
        </button>
      </div>
    </form>
    
    </div>
    
  );
}
export default Appointment;

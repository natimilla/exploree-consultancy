import classes from "./Appointment.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import { useDispatch } from "react-redux";
import { LoadingActions } from "../../../Store/LoadingDisplayContainer";
import { ClientInformationAction } from "../../../Store/ClientInformation";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
function Appointment() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setNumber] = useState("");
  const [AppointmentDate, setDate] = useState("");
  const [Message, setMessage] = useState("");
  const [disabledDates,setDisabledDates]=useState([])
  const dispatch = useDispatch();
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const phoneNumberHandler = (event) => {
    setNumber(event.target.value);
  };
  const AppointmentDateHandler = (date) => {
    setDate(date);
  };
  const MessageHandler = (event) => {
    setMessage(event.target.value);
  };
  const ClientInformation = [];
  const SubmitHandler = async (event) => {
    event.preventDefault();
    dispatch(LoadingActions.LoadingStateHandler());
    ClientInformation.push({
      name: name,
      email: email,
      appointment_date: new Date(AppointmentDate),
      phonenumber: phoneNumber,
      message: Message,
    });

    try {
      const response = await fetch(
        "https://exploree-consultancy-default-rtdb.firebaseio.com/clientInformation.json",
        {
          method: "POST",
          body: JSON.stringify(ClientInformation),
        }
      );
      if (!response.ok) {
        throw new Error("failed to fetch");
      }
      dispatch(
        ClientInformationAction.clientInformationHandler({
          name: name,
          email: email,
          Number: phoneNumber,
          Appointment: new Date(AppointmentDate),
        })
      );
      dispatch(ClientInformationAction.successStateHandler());
      setName("");
      setDate("");
      setEmail("");
      setMessage("");
      setNumber("");
    } catch (Error) {
      dispatch(LoadingActions.ErrorStateHandler());
    }
  };
  const today = new Date();
  useEffect(()=>{
    const fetchDate=async()=>{
      const response=await fetch('https://exploree-consultancy-default-rtdb.firebaseio.com/disableDates.json');
      const data=await response.json();
      const DUMMY_FILE=[];
      for(const key in data){
        for(let i=0;i<data[key].length;i++){
          DUMMY_FILE.push({
               disabled_date:new Date(data[key][i].disable_date)
          })
        }
      }
      setDisabledDates(DUMMY_FILE);
      console.log(disabledDates)
    }
    fetchDate();
    
  },[])
  const isDateDisabled = (date) => {
    return disabledDates.some(disabledDate => 
        date.toDateString() === new Date(disabledDate.disabled_date).toDateString()
    );
}
  return (
    <div>
      <form
        className={classes.form}
        data-aos="zoom-in-up"
        onSubmit={SubmitHandler}
      >
        <div className={classes.heading}>Set Appointment</div>
        <p>Your Name</p>
        <input
          type="text"
          className={classes.input}
          onChange={nameChangeHandler}
          value={name}
          required
        />
        <p>Your Email</p>
        <input
          type="email"
          className={classes.input}
          onChange={emailChangeHandler}
          value={email}
          required
        />
        <p>Phone number</p>
        <input
          type="number"
          className={classes.input}
          onChange={phoneNumberHandler}
          value={phoneNumber}
          required
        />
        <p>Appointment Date</p>
        <DatePicker
          minDate={today}
          selected={AppointmentDate}
          onChange={AppointmentDateHandler}
          placeholderText='Select Date'
          className={classes.input}
          filterDate={(date) => !isDateDisabled(date)}
          required
        />
        <p>Your Message(optional)</p>
        <textarea
          rows={5}
          className={classes.input}
          onChange={MessageHandler}
          value={Message}
        />
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

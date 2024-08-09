import { createSlice } from "@reduxjs/toolkit";
const ClientInformation = createSlice({
  name: "clientInformation",
  initialState: {
    successState:false,
    name: "",
    Appointment: "",
    email: "",
    Number: "",
  },
  reducers: {
    clientInformationHandler(state, action) {
      state.name = action.payload.name;
      state.Appointment = action.payload.Appointment;
      state.date = action.payload.date;
      state.email = action.payload.email;
      state.Number = action.payload.Number;
    },
    successStateHandler(state){
        state.successState=!state.successState;
    }
  },
});
export const ClientInformationAction = ClientInformation.actions;
export default ClientInformation.reducer;

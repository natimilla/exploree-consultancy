import { configureStore } from "@reduxjs/toolkit";
import LoadingDisplayContainer from "./LoadingDisplayContainer";
import ClientInformation from "./ClientInformation";

const store=configureStore({
    reducer:{loading:LoadingDisplayContainer,client:ClientInformation}
})
export default store;
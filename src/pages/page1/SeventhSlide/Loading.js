import { useEffect } from "react";
import classes from "./Loading.module.css";
import Spinner from "./Spinner";

import Success from "./Success";
import { useSelector } from "react-redux";
import ErrorMessage from "./ErrorMessage";

function Loading() {
  const LoadingState = useSelector((state) => state.loading.LoadingState);
  const successState = useSelector((state) => state.client.successState);
  const ErrorState= useSelector((state)=>state.loading.errorState)
  useEffect(()=>{
    console.log(LoadingState)
  },[])
  return (
    <div className={classes.Container}>
      <div className={classes.outerSpinner}>
        {LoadingState && !successState &&!ErrorState && <Spinner/>}
        {successState && <Success />}
        {ErrorState && <ErrorMessage/>}
      </div>
    </div>
  );
}
export default Loading;

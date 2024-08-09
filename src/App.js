import logo from "./logo.svg";
import img from "./images/pexels-olia-danilevich-8093032 (1).jpg";
import "./App.css";
import Page1 from "./pages/page1/Page1";
import Loading from "./pages/page1/SeventhSlide/Loading";
import { useSelector } from "react-redux";
import Page2 from "./pages/page2/Page2";
import Header from "./Header/Header";
import Footer from "./pages/Footer/Footer";
import Page3 from "./pages/Page3/Page3";
import Page4 from "./pages/Page4/Page4";
import { Route, Router, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
function App() {
  const LoadingState = useSelector((state) => state.loading.LoadingState);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Page1 />
          {LoadingState && <Loading />}
        </Route>
        <Route path="/About">
          {" "}
          <Page2 />
        </Route>
        <Route path="/country">
          <Page3 />
        </Route>
        <Route path="/work_with_us">
          <Page4 />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;

import "./App.css";
import NavbarTop from "./components/navbar/navbar";
import Home from "./components/Home/Home";
import AboutSection from "./components/About/aboutSection";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavbarTop />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={AboutSection} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

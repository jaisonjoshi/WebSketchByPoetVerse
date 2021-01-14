import "./App.css";
import NavbarTop from "./components/navbar/navbar";
import Home from "./components/Home/Home";
import AboutSection from "./components/About/aboutSection";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import Career from "./components/Contact/Career";
import Contact from "./components/Contact/Contact";
import KeyProjects from "./components/keyprojects/keyproject";
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
          <Route exact path='/career' component={Career} />
          <Route exact path='/projects' component={KeyProjects} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

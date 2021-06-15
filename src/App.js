import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./assets/main.css";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="grid h-screen grid-rows-3afa">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

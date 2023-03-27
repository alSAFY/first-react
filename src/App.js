import { Component } from "react";
import Home from "./Component/Home/Home.jsx";
import Nav from "./Component/Nav/Nav.jsx";
import Portfolio from "./Component/Portfolio/Portfolio.jsx";
import About from "./Component/About/About.jsx";
import Contact from './Component/Contact/Contact';
import Footer from "./Component/Footer/Footer.jsx";

export default class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <Home />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
      </>
    );
  }
}

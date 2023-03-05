import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Navbar from "./components/navbar/index";
import Footer from "./components/footer/index";
import Wrapper from "./components/wrapper/index";
import About from "./pages/about";
import Portfolio from "./pages/applications";
import Contact from "./pages/contact";
import ResumePage from "./pages/resumepage";
function App() {
  return (
    <HashRouter basename="/">
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/resume" component={ResumePage} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Wrapper>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
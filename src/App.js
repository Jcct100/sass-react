import React from "react";
import Home from "./components/home";
import AboutMe from "./components/about-us";
import Subscribe from "./components/subscribe";
import FollowMe from "./components/follow-me";
import ContactMe from "./components/contact-me";

function App() {
  return (
    <div className="App">
      <Home />
      <AboutMe />
      <Subscribe />
      <FollowMe />
      <ContactMe />
    </div>
  );
}

export default App;

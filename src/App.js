import React from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer"; // ✅ using the Footer component

console.log({ Header, Home, About, Projects, Contact });

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer /> 
    </div>
  );
}

export default App;


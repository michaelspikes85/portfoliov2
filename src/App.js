import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <div className="container">
        <AboutMe />
        <Experience />
        <Technologies />
        <Portfolio />
      </div>
    </>
  );
}

export default App;

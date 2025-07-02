import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
// import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Project";
import { Gallery } from "./components/sections/Gallery";
import { Contacts } from "./components/sections/Contact";
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  // const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}>
        <Navbar />
        {/* <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}
        <Home />
        <About />
        <Projects />
        <Gallery />
        <Contacts />
      </div>
    </>
  );
}

export default App;

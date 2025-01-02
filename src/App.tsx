import { Outlet } from "react-router-dom";
import Navbar from "./components/sharedComponents/Navbar";
import { useStore } from "./store";
import Footer from "./components/sharedComponents/Footer";
import { useEffect } from "react";

function App() {
  const { scrollToTop, setBreakpoint } = useStore();

  function handleBreakpoint() {
    const screenWidth_RemUnits = window.innerWidth / 16;
    const [tabletBreakpoint, desktopBreakpoint] = [42, 66];

    // set screen breakpoint
    screenWidth_RemUnits < tabletBreakpoint
      ? setBreakpoint("mobile")
      : screenWidth_RemUnits < desktopBreakpoint
      ? setBreakpoint("tablet")
      : setBreakpoint("desktop");
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    handleBreakpoint();
    window.addEventListener("resize", handleBreakpoint);

    return () => {
      window.removeEventListener("resize", handleBreakpoint);
    };
  }, [scrollToTop]);
  return (
    <div className="App-component">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

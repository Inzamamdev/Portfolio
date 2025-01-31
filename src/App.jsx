import { useState } from "react";
import Navbar from "./components/Navbar";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" bg-white dark:bg-black ">
        <Navbar />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </div>
    </>
  );
}

export default App;

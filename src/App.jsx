import { useState } from "react";
import Navbar from "./components/Navbar";
import SectionOne from "./components/SectionOne";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" bg-white dark:bg-black ">
        <Navbar />
        <SectionOne />
      </div>
    </>
  );
}

export default App;

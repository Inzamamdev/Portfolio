import { useRef } from "react";
import Navbar from "./components/Navbar";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";
function App() {
  const sectionOneRef = useRef(null);
  const sectionTwoRef = useRef(null);
  const sectionThreeRef = useRef(null);
  const sectionFourRef = useRef(null);

  return (
    <>
      <div className=" bg-white dark:bg-black ">
        <Navbar
          sectionOneRef={sectionOneRef}
          sectionTwoRef={sectionTwoRef}
          sectionThreeRef={sectionThreeRef}
          sectionFourRef={sectionFourRef}
        />
        <div ref={sectionOneRef}>
          <SectionOne />
        </div>
        <div ref={sectionTwoRef}>
          <SectionTwo />
        </div>
        <div ref={sectionThreeRef}>
          <SectionThree />
        </div>
        <div ref={sectionFourRef}>
          <SectionFour />
        </div>

        <SectionFive />
      </div>
    </>
  );
}

export default App;

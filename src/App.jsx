import { useState } from "react";
import Navbar from "./components/Navbar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" bg-white dark:bg-black">
        <Navbar />
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import Header from "./assets/components/Header";
import Home from "./assets/components/Home";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;

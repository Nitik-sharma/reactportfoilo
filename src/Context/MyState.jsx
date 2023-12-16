import React, { useState } from "react";
import myContext from "./Context";

function MyState({ children }) {
  const [mode, setMode] = useState("light");

  const toggleBtn = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#000";
      document.body.style.color = "#fff";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
    }
  };

  return (
    <myContext.Provider value={{ mode, toggleBtn }}>
      {children}
    </myContext.Provider>
  );
}

export default MyState;

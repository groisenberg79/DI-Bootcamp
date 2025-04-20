import { useContext, useEffect } from "react";
import { DynamicContext } from "./Context";

const ColorMode = () => {
  const { darkMode, changeMode } = useContext(DynamicContext);
  useEffect(() => {
    const root = document.documentElement; // this is <html>
    root.classList.toggle("manual-dark", darkMode);
  }, [darkMode]);

  return (
    <div>
      <button onClick={() => changeMode(darkMode)}>Toggle Theme</button>
    </div>
  );
};

export default ColorMode;

import { createContext, useContext, useReducer } from "react";
import { browserReducer } from "./browserReducer";

const BrowserContext = createContext();

const BrowserProvider = ({ children }) => {
  const [browserState, browserDispatch] = useReducer(browserReducer, {
    userName: "",
    time: "",
    greetings: "",
    tasks: "",
    quotesOfTheDay: "",
    focus: localStorage.getItem("focus") || "",
    enterPressed: JSON.parse(localStorage.getItem("enterPressedOnce")) || false,
    focusDone: JSON.parse(localStorage.getItem("focusDone")) || false,
    isEdit: false,
    isFocusEdit: false,
  });
  return (
    <BrowserContext.Provider value={{ browserState, browserDispatch }}>
      {children}
    </BrowserContext.Provider>
  );
};

const useBrowser = () => useContext(BrowserContext);

export { useBrowser, BrowserProvider };

import { createContext, useContext, useReducer } from "react";
import { browserReducer } from "./browserReducer";

const BrowserContext = createContext();

const BrowserProvider = ({ children }) => {
    const [browserState, browserDispatch] = useReducer(browserReducer, {
        userName:"",
        tasks:"",
        todo:"",
      });
  return (
    <BrowserContext.Provider value={{browserState, browserDispatch}}>
      {children}
    </BrowserContext.Provider>
  );
};

const useBrowser = () => useContext(BrowserContext);

export { useBrowser, BrowserProvider };
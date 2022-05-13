import React, {useEffect} from "react";
import { Focus, GetTimeAndDate, Quotes, Weather } from "../components";
import { useBrowser } from "../contexts";

export const HomePage = () => {
  const {
    browserState: { userName },
  } = useBrowser();

  return (
    <div className="text-center text-white font-semibold  h-screen flex justify-center	items-center flex-col	">
      <span>
        <Weather />
      </span>

      <span className="text-3xl">
        <GetTimeAndDate />
      </span>
      <span>
        <Focus/>
      </span>

      <span className="m-6"><Quotes/></span>
    </div>
  );
};

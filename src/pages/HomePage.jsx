import React from "react";
import { GetTimeAndDate } from "../components";
import { useBrowser } from "../contexts";

export const HomePage = () => {
  const {
    browserState: { userName },
  } = useBrowser();
  return (
    <div className="text-center text-white font-bold  h-screen flex justify-center	items-center flex-col	">
        <span className="text-3xl"><GetTimeAndDate /></span>
      <h1 className="m-5 text-4xl">Welcome, {userName} !!</h1>
    </div>
  );
};

import React from "react";
import { Focus, GetTimeAndDate, Quotes, Weather } from "../components";

export const HomePage = () => {
  return (
    <div className="text-center text-white font-semibold  h-screen flex justify-center	items-center flex-col	">
      <span>
        <Weather />
      </span>

      <span className="text-3xl">
        <GetTimeAndDate />
      </span>

      <span>
        <Focus />
      </span>

      <span className="m-6">
        <Quotes />
      </span>

    </div>
  );
};

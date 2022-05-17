import React from "react";
import { Focus, GetTimeAndDate, Quotes, Todo, Weather } from "../components";

export const HomePage = () => {
  return (
    <div className="text-center text-white font-semibold  h-screen flex justify-center	items-center flex-col	z-10">
      <span>
        <Weather />
      </span>

      <span className="text-3xl">
        <GetTimeAndDate />
      </span>

      <span>
        <Focus />
      </span>

      <span className="m-4 absolute bottom-12">
        <Quotes />
      </span>
      <span className="m-1">
        <Todo />
      </span>
    </div>
  );
};
